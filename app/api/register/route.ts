import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { z } from "zod"

// Define Zod schema for user registration
const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirm: z.string().min(6, "Confirmation password must be at least 6 characters long"),
  role: z.string().optional().default("user"), // Default role to "user"
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body against Zod schema
    const parsedBody = registerSchema.parse(body);
    const { name, email, password, role } = parsedBody;

    // Hash the password
    const hash = await bcrypt.hash(password, 12);

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        role,
        password: hash,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { status: "validation_error", errors: error.errors },
        { status: 400 }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    }
  }
}
