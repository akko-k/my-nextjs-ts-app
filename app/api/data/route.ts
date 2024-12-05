// app/api/data/route.ts - GET リクエストでデータ取得

import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const users = await res.json();
  return NextResponse.json(users);
}

// app/api/data/route.ts - POST リクエストでデータ処理

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body); // クライアントからのデータを処理
  return NextResponse.json({
    status: 'Success',
    received: body,
  });
}
