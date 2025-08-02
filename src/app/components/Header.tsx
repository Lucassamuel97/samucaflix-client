'use client';
import React, { useState, Suspense } from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';
import { useScroll } from '../hooks/useScroll';
import { SearchForm } from './SearchForm';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function HeaderContent() {
  const isScrolled = useScroll();
  const params = useSearchParams();
  const router = useRouter();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newParams = new URLSearchParams(params.toString());
    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  };

  return (
    <header
      className={`${isScrolled ? 'bg-black/70' : 'bg-transparent'} fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <SearchForm
          onSearch={onSearch}
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
        />
        <UserProfile />
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense
      fallback={
        <header className='fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4'>
          <div className='flex items-center space-x-2 md:space-x-8'>
            <Logo />
            <NavLinks />
          </div>
          <div className='flex items-center space-x-2 md:space-x-8'>
            <div className='h-8 w-32 animate-pulse rounded bg-gray-600'></div>
            <UserProfile />
          </div>
        </header>
      }
    >
      <HeaderContent />
    </Suspense>
  );
}
