import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ImageGallery from '@/components/ImageGallery';

export default function Home() {
  return (
    <div className="flex justify-center gap-4 p-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">ログイン</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ログインフォーム</DialogTitle>
            <DialogDescription>
              こちらからログインしてください
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                email
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="password"
                className="text-right">
                password
              </Label>
              <Input
                id="password"
                className="col-span-3"
                type="password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">ログイン</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ImageGallery />
    </div>
  );
}
