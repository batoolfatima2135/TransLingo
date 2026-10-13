import { NextResponse } from "next/server";
import { ApiError } from "@/services/api-client";
import { registerUser } from "@/services/auth/registerUser";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic server-side validation
    if (
      !body.firstName?.trim() ||
      !body.lastName?.trim() ||
      !body.email?.trim() ||
      !body.password
    ) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    await registerUser({
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim(),
      phoneNumber: body.phoneNumber?.trim() || null,
      password: body.password,
    });

    return NextResponse.json(
      { message: "Account created successfully." },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.status },
      );
    }

    console.error("Registration failed:", error);

    return NextResponse.json(
      { message: "Unable to create your account. Please try again." },
      { status: 500 },
    );
  }
}
