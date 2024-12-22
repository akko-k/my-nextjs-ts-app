import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Dashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const message = `Logged in as ${user?.email}`;
  return (
    <div className="w-full flex justify-center mt-40">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>ログイン済み</p>
            <p>{message}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="/">トップページへ</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
