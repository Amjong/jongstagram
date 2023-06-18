'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import ColorButton from './ui/ColorButton';

type Props = {
  text?: string;
};

export default function LoginButton({ text }: Props) {
  const { data: session } = useSession();
  return (
    <div className='rounded-lg bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]'>
      {session ? (
        <ColorButton
          text={text ? text : 'Sign out'}
          onClick={signOut}
        ></ColorButton>
      ) : (
        <ColorButton
          text={text ? text : 'Sign in'}
          onClick={signIn}
        ></ColorButton>
      )}
    </div>
  );
}
