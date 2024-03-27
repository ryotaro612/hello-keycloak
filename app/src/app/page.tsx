'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './page.module.scss';
import { ReactNode, useState } from 'react';

async function resolveIdProvider(email: string) {
  const result = await fetch('/v1/idProviders', { method: 'POST', body: JSON.stringify({ email }) });
  return result.json();
}

function SignIn() {
  const [email, setEmail] = useState<string>('');
  return <>
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
        window.location.href ='http://localhost:3001';
      }}>
        Continue
      </button>
    </div>
  </>
}

function SignOut({ userName }: { userName: string }) {
  return <div className={styles.signOut}>
    <span className={styles.greeting}>
      Hello {userName}.
    </span>
    <button className={styles.signOutButton} onClick={() => { signOut() }}>
      Sign out
    </button>
  </div>
}
export default function Home({ }) {
  const session = useSession();
  console.log(session);
  let form: ReactNode;
  const userName = session.data?.user?.name;
  if (typeof userName == 'string') {
    form = <SignOut userName={userName} />
  } else {
    form = <SignIn />;
  }
  return <div className={styles.sso}>
    {form}
  </div>
}