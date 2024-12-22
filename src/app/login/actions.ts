import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  'use server';
  const supabase = await createClient();
  const email = formData.get('email');
  const password = formData.get('password');
  if (!email || !password) return;
  const { error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });

  if (error) {
    console.error(error);
    return;
  }

  revalidatePath('/');
  redirect('/');
}
