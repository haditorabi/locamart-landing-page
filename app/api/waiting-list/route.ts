import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email)
      return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_LIST_ID = process.env.SENDGRID_LIST_ID;

    if (!SENDGRID_API_KEY || !SENDGRID_LIST_ID) {
      return NextResponse.json(
        { error: "Missing SendGrid API credentials" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list_ids: [SENDGRID_LIST_ID],
          contacts: [{ email }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.errors?.[0]?.message || "Failed to add contact" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Email added successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
