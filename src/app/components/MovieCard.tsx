import Image from 'next/image';
import { Movie } from '../types /movie';
import { MovieInfo } from './MovieInfo';

export const MovieCard = ({ movie }: { movie: Movie }) => (
    <div className="group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]">
        <Image
            alt={movie.title}
            src={movie.bannerFileURL}
            width={600}
            height={400}
            className="rounded-md object-cover object-top transition-all"
        />

        <div className="pointer-events-none absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition-all delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:pointer-events-auto">
            <Image
                src={movie.bannerFileURL}
                alt={movie.title}
                width={600}
                height={400}
                className="h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition-all"
            />

            <MovieInfo movie={movie} />
        </div>
    </div>
);
