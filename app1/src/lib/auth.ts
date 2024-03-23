import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

export const authOptions = {
  providers: [], // rest of your config
} satisfies NextAuthOptions

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);