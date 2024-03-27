'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './page.module.scss';
import { ReactNode, useEffect, useState } from 'react';
import { sign } from 'crypto';

async function resolveIdProvider(email: string) {
  const result = await fetch('/v1/idProviders', { method: 'POST', body: JSON.stringify({ email }) });
  return result.json();
}


export default function Home({ }) {
  useEffect(() => {
    signIn('keycloak', {
      callbackUrl: '/v1/callback'
    }, { kc_idp_hint: 'github' });
  });
  return <>
  </>
}