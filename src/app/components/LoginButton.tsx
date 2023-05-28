'use client';
import { signIn } from 'next-auth/react';

type props = {
  text: string;
};

export default function LoginButton({ text }: props) {
  return (
    <button
      className='rounded-lg border-2 border-pink-300 text-2xl p-1'
      onClick={() => signIn()}
    >
      {text}
    </button>
  );
}
