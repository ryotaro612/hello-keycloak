'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './page.module.scss';
import { useState } from 'react';

export default function Home({ }) {

  const [email, setEmail] = useState<string>('');
  console.log(email);

  return <div className={styles.sso}>
    <div className={styles.keycloak}>
      <button onClick={() => signIn('keycloak')} className={styles.ssoButton}>Single-Sign On</button>
    </div>
    <div className={styles.idpHint}>
      <span className={styles.description}>Single-Sign On (kc_idp_hint)</span>
      <div className={styles.email}>
        <span className={styles.emailDescription}>Email address</span>
        <input onChange={(e)=>{
          setEmail(e.target.value);
        }} type='email' placeholder='Email address' className={styles.emailInput}/>
      </div>
      <button className={styles.idpHintButton}>
        Continue
      </button>
    </div>
    {/* <button onClick={() => signIn('keycloak', {}, { kc_idp_hint: 'github' })}>Sign in</button> */}
  </div>
}