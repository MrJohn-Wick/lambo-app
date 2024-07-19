'use client';

import React, { useEffect, useState } from 'react';
import Feature from '@/components/Feature';
import Layout from '@/components/Layout';
import PrivateSessionsIcon from '@/assets/private-sessions.svg';
import { LogoutButton } from '@/components/auth/logout-button';
import { useSession } from 'next-auth/react';


interface Profile {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
};

const ProfilePage: React.FC = () => {
  const session = useSession();
  const [profile, setProfile] = useState<Profile>();

  useEffect( () => {
    console.log("Start profile", session);

    const fetchData = async (): Promise<Profile | undefined> => {
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+'/users/me', {
        headers: {
          'Authorization': "Bearer " + session.data?.user.access_token,
        }
      });
      if (res.ok) {
        const payload = res.json();
        return payload;
      }
    };

    fetchData().then((p) => {
      console.log(p);
      if (p) setProfile(p);
    });

  }, [session]);

  return (
    <Layout>
      <Feature 
        title="Private section"
        description="Welcome to the private section. Only logged user can see this page."
        imageSrc={PrivateSessionsIcon}
        imageAlt="Private sessions"
      />
      { profile && (
        <>
          <div>{ profile.id }</div>
          <div>{ profile.email }</div>
          <div>{ profile.firstname }</div>
          <div>{ profile.lastname }</div>
          <div>{ profile.birthday }</div>
        </>
      )}
      <LogoutButton>Logout</LogoutButton>
    </Layout>
  );
}

export default ProfilePage;
