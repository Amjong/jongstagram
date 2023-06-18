import { AuthOptions } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/app/components/SignIn';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInpage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(AuthOptions);
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};
  return <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'} />;
}
