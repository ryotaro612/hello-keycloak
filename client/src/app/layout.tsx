import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { NextAuthProvider } from './NextAuthProvider';

const inter = Inter({ subsets: ["latin"] });
const applicationName = process.env.NEXT_PUBLIC_APP_NAME

export const metadata: Metadata = {
  title: applicationName,
  description: "An OIDC client",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
