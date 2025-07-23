'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup remove o comportamento do scroll quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};

const Logo = () => (
  <Image
    src='/logo.png'
    alt='SamucaFlix'
    width={90}
    height={90}
    className='cursor-pointer'
  />
);

const NavLinks = () => (
  <nav>
    <ul className='hidden md:flex md:space-x-4'>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>Latest</li>
    </ul>
  </nav>
);

const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      src='/profile.png'
      alt='profile picture'
      width={30}
      height={30}
      className='cursor-pointer rounded'
    />
  </div>
);

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={` ${isScrolled ? 'bg-black/70' : 'bg-transparent'} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
