import { getServerSession } from 'next-auth/next';
import { AuthOptions } from '../api/auth/[...nextauth]/route';

export async function getUserSession() {
  const session = await getServerSession(AuthOptions);
  return session;
}
