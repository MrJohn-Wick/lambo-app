"use server";

import { signIn, signOut } from '@lambo/lib/auth';
import {
  AccessToken,
  IngressAudioEncodingPreset,
  IngressClient,
  IngressInput,
  IngressVideoEncodingPreset,
  type CreateIngressOptions,
} from "livekit-server-sdk";
import { TrackSource } from "livekit-server-sdk/dist/proto/livekit_models";
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { Router } from 'next/router';

const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL!);

export async function createStreamerToken(slug: string) {
  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      // HACK: should really be the streamer's name
      identity: slug,
    }
  );

  token.addGrant({
    room: slug,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
}

export async function createViewerToken(roomName: string, identity: string) {
  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      identity: identity,
    }
  );

  token.addGrant({
    room: roomName,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
}

export async function createIngress(
  roomSlug: string,
  ingressType: IngressInput
) {
  const options: CreateIngressOptions = {
    name: roomSlug,
    roomName: roomSlug,
    participantName: roomSlug,
    participantIdentity: roomSlug,
  };

  if (ingressType === IngressInput.WHIP_INPUT) {
    // https://docs.livekit.io/egress-ingress/ingress/overview/#bypass-transcoding-for-whip-sessions
    options.bypassTranscoding = true;
  } else {
    options.video = {
      source: TrackSource.CAMERA,
      preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
    };
    options.audio = {
      source: TrackSource.MICROPHONE,
      preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
    };
  }

  const ingress = await ingrecredentialsssClient.createIngress(ingressType, options);

  return ingress;
}

export async function resetIngresses() {
  const ingresses = await ingressClient.listIngress({});

  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressClient.deleteIngress(ingress.ingressId);
    }
  }
}

export async function userLogin(prevState: unknown, formData: FormData) {
  const {email, password} = {
    email: formData.get('email') as string,
    password: formData.get('password'),
  }

  if(!email || !password) {
    return {
      message: 'Invalid fields'
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
      // redirectTo: 'http://localhost:3001/profile',
    })
    redirect('/profile');
  } catch (error) {
    console.log("Action error", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": 
          return { message: "Invalid credentials" }
        default:
          return { message: "Somthing went wrong!" }
      }
    }
    throw error;
  }

}

export async function userLogout() {
  await signOut();
}