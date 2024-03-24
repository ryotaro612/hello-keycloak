import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

const handler = NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        Keycloak({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
            issuer: process.env.NEXT_AUTH_ISSUER_BASE_URL,
        })
    ]
});

export { handler as GET, handler as POST };