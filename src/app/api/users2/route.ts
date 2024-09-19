import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://randomuser.me/api/?results=10");
  const data = await res.json();
  return NextResponse.json(data.results);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // 실제로는 데이터베이스에 저장하는 로직이 들어갑니다.
  return NextResponse.json(
    { message: "User created", user: body },
    { status: 201 }
  );
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  // 실제로는 데이터베이스의 사용자 정보를 업데이트하는 로직이 들어갑니다.
  return NextResponse.json({ message: "User updated", user: body });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // 실제로는 데이터베이스에서 사용자를 삭제하는 로직이 들어갑니다.
  return NextResponse.json({ message: `User ${id} deleted` });
}
