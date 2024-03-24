'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './page.module.scss';

export default function Home({}) {
  return <div className={styles.sso}>
    <div>
      <button className={styles.ssoButton}>Single-Sign On</button>
    </div>
    <div>
      <span>Single-Sign On (kc_idp_hint)</span>
      <input></input>
    </div>
    {/* <button onClick={() => signIn('keycloak', {}, { kc_idp_hint: 'github' })}>Sign in</button> */}
  </div>
}