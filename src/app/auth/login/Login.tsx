'use client';

import React from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/AuthForm';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
