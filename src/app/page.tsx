import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie } from './service/MovieService';

export default async function Home() {

  const featuredMovie = await getFeaturedMovie('101');
  console.log('Featured Movie:', featuredMovie);
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie}/>
        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Trending' />
        <MovieRow sectionTitle='Action' />
        <MovieRow sectionTitle='Comedy' />
      </main>
    </div>
  );
}
