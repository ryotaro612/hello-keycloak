'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({}) {


  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('keycloak', {}, {kc_idp_hint: 'github'})}>Sign in</button>
    </>
  );
}