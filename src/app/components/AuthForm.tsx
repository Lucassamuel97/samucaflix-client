'use client';

import { InputField } from "./InputField";

type AuthFormProps = {
    formType: 'login' | 'register';
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
    return (
        <form
            role='form'
            onSubmit={onSubmit}
            className='flex w-full max-w-md flex-col gap-4 rounded bg-[#141414]/90 px-4 py-8 shadow-lg'
        >
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-3xl font-bold'>
                    {formType === 'login' ? 'Login' : 'Register'}
                </h1>
                <p className='text-sm text-gray-500'>
                    {formType === 'login'
                        ? 'New to the app?'
                        : 'Already have an account?'}{' '}
                    <a
                        href={formType === 'login' ? '/register' : '/login'}
                        className='text-red-500 underline-offset-2 hover:underline'
                    >
                        {formType === 'login' ? 'Register' : 'Login'}
                    </a>
                </p>
            </div>
            <div className='mt-8 flex flex-col gap-4'>

                {formType === 'register' && (
                    <InputField
                        id='name'
                        type='text'
                        label='Name'
                        placeholder='Enter your full name'
                        required
                        autoComplete='name'
                    />
                )}

                <InputField
                    id='email'
                    type='email'
                    label='Email'
                    placeholder='Enter your email'
                    required
                    autoComplete='email'
                />

                <InputField
                    id='password'
                    type='password'
                    label='Password'
                    placeholder='Enter your password'
                    required
                    autoComplete='current-password'
                />

                {formType === 'register' && (
                    <InputField
                        id='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        placeholder='Confirm your password'
                        required
                        autoComplete='new-password'
                    />
                )}
            </div>
            <button
              type='submit'
              className='rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700'
            >
              {formType === 'login' ? 'Login' : 'Register'}
            </button>
        </form>
    );
};