import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

const handler = NextAuth({
    secret: 'say_lalisa_love_me_lalisa_love_me_hey',
    providers: [
        Keycloak({
            clientId: 'app1',
            clientSecret: 'foobar',
            issuer: 'http://localhost:8080/realms/sample',
        })
    ]
});

export { handler as GET, handler as POST };