import { NextResponse } from "next/server";
import { User } from "@/types/user";

export async function GET(): Promise<NextResponse<User[]>> {
  const res = await fetch("https://randomuser.me/api/?results=10");
  const data = await res.json();
  const users: User[] = data.results.map(
    (user: {
      login: { uuid: string };
      name: { first: string; last: string };
      email: string;
    }) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
    })
  );
  return NextResponse.json(users);
}
