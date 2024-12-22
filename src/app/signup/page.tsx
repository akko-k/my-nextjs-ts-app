'use server';
import { signup } from '@/app/signup/actions';
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
export default async function SignUp() {
  return (
    <div className="w-full flex justify-center mt-40">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>新規登録</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="signup" action={signup}>
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
        <CardFooter className="flex justify-between">
          <Button type="submit" form="signup">
            登録
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
