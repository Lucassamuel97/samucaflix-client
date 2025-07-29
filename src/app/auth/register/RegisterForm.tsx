'use client';

import React from 'react';
import { InputField } from '../InputField';

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit register');
    e.preventDefault();
  };

  return (
    <form
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] px-4 py-8 opacity-90 shadow-lg'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Register</h1>
        <p className='text-sm text-gray-500'>
          Already have an account?{' '}
          <a href='#' className='text-red-500 hover:underline'>
            Login
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          label='Name'
          type='text'
          id='name'
          placeholder='Enter your full name'
          required
          autoComplete='name'
        />

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
          autoComplete='new-password'
        />

        <InputField
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          placeholder='Confirm your password'
          required
          autoComplete='new-password'
        />
      </div>

      <button
        type='submit'
        className='rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700'
      >
        Register
      </button>
    </form>
  );
}