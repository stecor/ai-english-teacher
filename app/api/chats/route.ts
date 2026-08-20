// app/api/chats/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { userId, title } = await req.json();

    const id = randomUUID();

  const result = await db.query(
  `
  INSERT INTO "Chat" ("userId", title)
  VALUES ($1, $2)
  RETURNING *
  `,
  [userId, title || "New conversation"]
);

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Could not create chat" },
      { status: 500 }
    );
  }
}