'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from './ui/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <div>
      {Object.values(providers).map(({ name, id }) => (
        <div key={name}>
          <ColorButton
            text={`Sign in with ${name}`}
            onClick={() => signIn(id, { callbackUrl })}
          ></ColorButton>
        </div>
      ))}
    </div>
  );
}
