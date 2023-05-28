import Image from 'next/image';
import LoginButton from './components/LoginButton';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <div className='mt-20'>
        <LoginButton text='Sign in with Google'></LoginButton>
      </div>
    </main>
  );
}
