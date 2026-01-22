'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Hook to get the ID from the URL
import { fetchSignleMovie } from '@/lib/api';
import Link from 'next/link';

export default function moviePage() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('get Movie information (useEffect');

    setIsLoading(true);

    if (!id)
      return;

    fetchSignleMovie(id)
      .then((data) => {
        setMovieData(data)
        setIsLoading(false);

        console.log(`Movie data: ${movieData}`)
      })
  }, [id]);

  if (isLoading)
    return <div className="text-center mt-20 text-xl">Loading movie details...</div>;

  if (!movieData)
    return <div className="text-center mt-20 text-xl text-red-500">Movie not found</div>;

  const imageUrl = movieData.poster_path
    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movieData.poster_path}`
    : '/placeholder.jpg'; // Fallback if no image

  const backdropUrl = movieData.backdrop_path
    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movieData.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link href="/" className="mb-6 inline-block text-blue-400 hover:underline">
        &larr; Back to Home
      </Link>

      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl">

        {backdropUrl && (
          <div
            className="h-64 md:h-96 w-full bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${backdropUrl})` }}
          />
        )}

        <div className="p-8 md:flex gap-8 -mt-20 relative z-10">
          <img
            src={imageUrl}
            alt={movieData.title}
            className="w-full md:w-80 rounded-lg shadow-lg border-4 border-gray-700"
          />

          <div className="mt-6 md:mt-20">
            <h1 className="text-4xl font-bold mb-2">{movieData.title}</h1>
            <div className="flex items-center gap-4 text-gray-400 mb-6">
              <span>{movieData.release_date?.split('-')[0]}</span>
              <span>•</span>
              <span className="text-yellow-400 font-bold">★ {movieData.vote_average.toFixed(1)}</span>
              <span>•</span>
              <span>{movieData.genres?.map(g => g.name).join(', ')}</span>
            </div>

            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
              {movieData.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
