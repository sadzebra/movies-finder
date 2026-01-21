import Link from 'next/link';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function MovieCard({ movie }: { movie: MovieProps }) {
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`;

  console.log('testing again: ', movie)

  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        {/* <img src={imageUrl} alt={movie.title} className="w-full h-auto group-hover:scale-105 transition-transform" /> */}
      </div>
      <h3 className="mt-2 text-lg font-bold truncate">{movie.title}</h3>
      <p className="text-sm text-gray-500">{movie.release_date?.split('-')[0]}</p>
    </Link>
  );
}
