import SignOut from '@/components/SignOut';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const message = user
    ? `Logged in as ${user.email}`
    : 'Not logged in';

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h1>Home</h1>
      <p>{message}</p>
      {user ? (
        <SignOut />
      ) : (
        <>
          <Button asChild>
            <Link href="/signup">SignUp</Link>
          </Button>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </>
      )}
    </div>
  );
}
