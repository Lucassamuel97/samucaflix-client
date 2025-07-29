'use client';

import React from 'react';
import { InputField } from '../InputField';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
  };
  return (
    <form
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] px-4 py-8 opacity-90 shadow-lg'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-sm text-gray-500'>
          New to the app?{' '}
          <a href='#' className='text-red-500 hover:underline'>
            Register
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          label='Email'
          type='email'
          id='email'
          placeholder='Enter your email'
          required
          autoComplete='email'
        />

        <InputField
          label='Password'
          type='password'
          id='password'
          placeholder='Enter your password'
          required
          autoComplete='current-password'
        />
      </div>

      <button
        type='submit'
        className='rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700'
      >
        Login
      </button>
    </form>
  );
}
