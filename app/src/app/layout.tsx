import 'normalize.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

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
  console.log(session, 'session');
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>{applicationName}</h1>
        {children}
      </body>
    </html>
  );
}
