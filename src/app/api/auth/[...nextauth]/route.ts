import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { redirect } from 'next/dist/server/api-utils';

const authHandler = (
  req: NextApiRequest,
  res: NextApiResponse
): NextApiHandler => NextAuth(req, res, options);

const options = {
  providers: [
    //구글 provider 정의
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export { authHandler as GET, authHandler as POST };
