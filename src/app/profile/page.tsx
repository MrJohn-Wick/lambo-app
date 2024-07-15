'use client';

import React from 'react';
import Feature from '@/components/Feature';
import Layout from '@/components/Layout';
import PrivateSessionsIcon from '@/assets/private-sessions.svg';
import { logout } from '@/actions/logout';
import { useSession } from 'next-auth/react';


const Profile: React.FC = () => {
  const session = useSession();
  console.log([ "Profile", session ]);

  return (
    <Layout>
      <Feature 
        title="Private section"
        description="Welcome to the private section. Only logged user can see this page."
        imageSrc={PrivateSessionsIcon}
        imageAlt="Private sessions"
      />
      <div>{ session.data?.user && session.data.user.email }</div>
      <button onClick={() => { logout() }}>Logout</button>
    </Layout>
  );
}

export default Profile;
