'use client';
import { Tables } from '@/src/types/database.types';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function Home() {
  const supabase = createClient();
  const [todos, setTodos] = useState<Tables<'todos'>[]>([]);
  const [todoContent, setTodoContent] =
    useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<
    number | null
  >(null);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*');
    if (error) {
      console.error(error);
    }

    setTodos(data ?? []);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodoId) {
      await updateTodo();
    } else {
      await addTodo();
    }
    setTodoContent('');
    setEditingTodoId(null);
    fetchTodos();
  };

  const addTodo = async () => {
    const { error } = await supabase
      .from('todos')
      .insert({ content: todoContent });
    if (error) {
      console.error(error);
    } else {
      await fetchTodos();
    }
    setTodoContent('');
    fetchTodos();
  };

  const updateTodo = async () => {
    const { error } = await supabase
      .from('todos')
      .update({ content: todoContent })
      .eq('id', editingTodoId as number);
    if (error) {
      console.error(error);
    } else {
      await fetchTodos();
    }
  };

  const deleteTodo = async (todoId: number) => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todoId);
    if (error) {
      console.error(error);
    } else {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    }
  };

  const startEditing = (
    todoId: number,
    content: string
  ) => {
    setEditingTodoId(todoId);
    setTodoContent(content);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <form
        className="flex gap-4"
        onSubmit={handleTodoSubmit}>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          className="border p-2"
          placeholder={
            editingTodoId ? 'Edit Todo' : 'New Todo'
          }
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-400 rounded-lg">
          {editingTodoId ? 'Save' : 'Add Todo'}
        </button>
        {editingTodoId && (
          <button
            onClick={() => {
              setEditingTodoId(null);
              setTodoContent('');
            }}
            className="py-2 px-4 bg-gray-400 rounded-lg">
            Cancel
          </button>
        )}
      </form>

      <h1 className="text-4xl">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="list-disc">
            <div className="flex items-center gap-3">
              <span>{todo.content}</span>
              <button
                onClick={() =>
                  startEditing(
                    todo.id,
                    todo.content as string
                  )
                }
                className="py-2 px-4 bg-blue-400 rounded-lg">
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="py-2 px-4 bg-red-400 rounded-lg">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
