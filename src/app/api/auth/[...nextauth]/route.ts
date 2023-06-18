import { signIn } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authHandler = (
  req: NextApiRequest,
  res: NextApiResponse
): NextApiHandler => NextAuth(req, res, AuthOptions);

export const AuthOptions = {
  secret: process.env.NEXTAUTH_SECERT,
  providers: [
    //구글 provider 정의
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signIn',
  },
};

export { authHandler as GET, authHandler as POST };
