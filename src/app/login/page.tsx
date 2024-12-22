'use server';
import { login, loginGoogle } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default async function Login() {
  return (
    <div className="w-full flex justify-center mt-40">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="signup" action={login}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">
                  メールアドレス
                </Label>
                <Input id="email" name="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  パスワード
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center flex-col gap-4 w-full">
          <div className="w-full flex justify-end">
            <Button type="submit" form="login">
              ログイン
            </Button>
          </div>
          <div className="border w-full"></div>
          <form action={loginGoogle}>
            <Button type="submit">Googleでログイン</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
