import { NextRequest, NextResponse } from 'next/server';
import { loginFormSchema } from '@/app/lib/validations/LoginValidation';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    // Here you would typically handle the login logic, e.g., checking credentials against a database
    console.log('Login attempt with:', { email, password });

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 400 }
    );
  }
}
