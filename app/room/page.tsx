"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from "@livekit/components-react";
import { Suspense, useEffect, useState } from "react";
import { Track } from "livekit-client";
import { useSearchParams } from "next/navigation";

function Room() {
  const params = useSearchParams();

  useEffect(() => {
    const room = params.get("room");
    const name = params.get("name");

    if (room && name) {
      setRoom(room);
      setName(name);
    }
  }, [params]);

  const [room, setRoom] = useState<string>();
  const [name, setName] = useState<string>();

  const [token, setToken] = useState("");

  async function getToken() {
    if (!room || !name) {
      return;
    }
    try {
      const resp = await fetch(
        `/api2/get-participant-token?room=${room}&username=${name}`,
      );
      const data = await resp.json();

      setToken(data.token);
    } catch (e) {
      console.error(e);
    }
  }

  if (token === "") {
    return (
      <form
        className="flex flex-col justify-center items-center min-h-screen"
        onSubmit={(e) => {
          e.preventDefault();
          getToken();
        }}
      >
        <input
          className="mb-4 ring-1 ring-gray-300"
          placeholder="Room"
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          className="mb-4 ring-1 ring-gray-300"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          type="submit"
        >
          Join
        </button>
      </form>
    );
  }

  return (
    <LiveKitRoom
      audio={true}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      style={{ height: "100dvh" }}
      token={token}
      video={true}
      onDisconnected={() => setToken("")}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Room />
    </Suspense>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );

  return (
    <GridLayout
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
      tracks={tracks}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
