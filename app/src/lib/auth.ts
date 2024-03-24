import NextAuth, { NextAuthOptions } from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

export const authOptions = {
  providers: [
        Keycloak({
            clientId: 'app1',
            clientSecret: 'foobar',
            issuer: 'http://localhost:8080/realms/sample',
        })
  ], // rest of your config
} satisfies NextAuthOptions ;

export const { handlers, auth, signIn, signOut, handler } = NextAuth(authOptions);