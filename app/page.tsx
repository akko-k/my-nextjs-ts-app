'use client';
import { Tables } from '@/src/types/database.types';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function Home() {
  const supabase = createClient();
  const [todos, setTodos] = useState<Tables<'todos'>[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase
        .from('todos')
        .select('*');
      if (error) {
        console.error(error);
      }

      setTodos(data ?? []);
    };

    fetchTodos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className="text-2xl list-disc">
            {todo.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
