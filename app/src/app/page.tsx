'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './page.module.scss';
import { useState } from 'react';

async function resolveIdProvider(email: string) {
  const result = await fetch('/v1/idProviders', { method: 'POST', body: JSON.stringify({ email }) });
  return result.json();
}

export default function Home({ }) {

  const [email, setEmail] = useState<string>('');

  return <div className={styles.sso}>
    <div className={styles.keycloak}>
      <button onClick={() => signIn('keycloak')} className={styles.ssoButton}>Single-Sign On</button>
    </div>
    <div className={styles.idpHint}>
      <span className={styles.description}>Single-Sign On (kc_idp_hint)</span>
      <div className={styles.email}>
        <span className={styles.emailDescription}>Email address</span>
        <input onChange={(e) => {
          setEmail(e.target.value);
        }} type='email' placeholder='Email address' className={styles.emailInput} />
      </div>
      <button className={styles.idpHintButton} onClick={async () => {
        const { kc_idp_hint } = await resolveIdProvider(email);
        signIn('keycloak', {}, {kc_idp_hint});
      }}>
        Continue
      </button>
    </div>
    {/* <button onClick={() => signIn('keycloak', {}, { kc_idp_hint: 'github' })}>Sign in</button> */}
  </div>
}