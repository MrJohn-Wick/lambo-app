"use client";
import { LiveKitRoom, PreJoin } from '@livekit/components-react';
import { useEffect, useState } from "react";
import { LayoutStyled } from './styled';

export default function MyLiveKitApp() {
  const serverUrl = 'wss://videoapp-8bu281ak.livekit.cloud';
  
  const [token, setToken] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/getToken")
      .then(response => response.json())
      .then((data: any) => {
        console.log(data);
        setToken(data);
      });
  }, []);

  return (
    <LayoutStyled>
      <LiveKitRoom serverUrl={serverUrl} token={token} connect={true}>
        {/* Your components go here. */}
        <PreJoin />
      </LiveKitRoom>
    </LayoutStyled>
  );
};
