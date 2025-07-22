import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <main className="relative p-8 pb-20 scrollbar-hide lg:px-16">
        <h1 className="text-4xl font-bold">Welcome to SamucaFlix!</h1>
        <p className="mt-4 text-lg">Your favorite movie</p>
      </main>
    </div>
  );
}
