'use client';

import React from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';

type ServerError = {
  message: string;
};

export default function LoginForm() {

  const router = useRouter();
  const [errors, setErrors] = React.useState<string[]>([]);

  console.log(errors);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try{
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        router.push('/');
        return;
      } 

      const payload: ServerError[] = await response.json();

      setErrors(payload.map((error) => error.message));

    } catch (error) {
      console.error('Login error:', error);
      setErrors(['Login failed. Please try again.']);
    }
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
