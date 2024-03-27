import NextAuth, { NextAuthOptions } from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

export const authOptions = {
  providers: [
        Keycloak({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
            issuer: process.env.NEXT_AUTH_ISSUER_BASE_URL,
        })
  ], // rest of your config
} satisfies NextAuthOptions ;

//export const { handlers, auth, signIn, signOut, handler } = NextAuth(authOptions);