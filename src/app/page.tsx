import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Trending' />
        <MovieRow sectionTitle='Action' />
        <MovieRow sectionTitle='Comedy' />
      </main>
    </div>
  );
}
