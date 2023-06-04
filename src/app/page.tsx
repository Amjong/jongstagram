import LoginButton from './components/LoginButton';
import { getUserSession } from './service/session';

export default async function Home() {
  const session = await getUserSession();
  return (
    <main className='flex flex-col items-center'>
      <div className='mt-20'>
        {session && <div>{`Signed! as ${session?.user?.email}`}</div>}
        {!session && (
          <LoginButton
            text='Sign in with Google'
            session={session}
          ></LoginButton>
        )}
      </div>
    </main>
  );
}
