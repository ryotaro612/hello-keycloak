'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({}) {


  return (
    <>{process.env.NEXT_PUBLIC_DOGE}foobar
    {process.argv}
      Not signed in <br />
      <button onClick={() => signIn('keycloak', {}, {kc_idp_hint: 'github'})}>Sign in</button>
    </>
  );
}