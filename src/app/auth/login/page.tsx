'use client';

import React from 'react';

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='bg-cover bg-center bg-no-repeat text-white opacity-80'
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <form
          className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] px-4 py-8 shadow-lg opacity-90'
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
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full rounded px-3 py-2 text-black'
                autoComplete='email'
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                required
                className='w-full rounded px-3 py-2 text-black'
                autoComplete='current-password'
              />
            </div>
            <button
              type='submit'
              className='rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
