'use client'
import Image from "next/image";
import { useState, useEffect } from 'react'
import { fetchTrendingMovies } from '@/lib/api';

import MovieCard from '@/components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // get trending movies
    fetchTrendingMovies().then(data => {
      setMovies(data.results)
      console.log('testing movie data in pages: ', data.results)
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
