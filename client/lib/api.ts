import { isCustomErrorPage } from "next/dist/build/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTrendingMovies = async () => {
  const res = await fetch(`${API_URL}/trending`);

  if (!res.ok)
    throw new Error('Response was not ok');

  const data = await res.json();

  return data;
}

export const fetchSearchMovies = async () => {
  console.log('fetch search movies');
}

export const fetchSignleMovie = async (id: string) => {
  console.log('Fetch movie');

  const res = await fetch(`${API_URL}/movie/${id}`);

  if (!res.ok)
    throw new Error('Problem getting movvie data');

  const data = await res.json();

  console.log('data to return', data)

  return data;
}

