import { auth } from '@/app/lib/auth';
import { getUserWithEmail } from '@/app/lib/users';
import Navbar from '@/app/navbar';

export default async function Nav() {
  const session = await auth();
  // fetch the user with the email
  const user = await getUserWithEmail(session?.user?.email, true);
  return <Navbar user={user} />;
}
