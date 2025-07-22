import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Welcome to SamucaFlix</h1>
      <Image
        src='https://example.com/image.jpg'
        alt='Description of image'
        width={500}
        height={300}
      />
    </main>
  );
}
