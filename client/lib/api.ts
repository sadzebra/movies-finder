const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTrendingMovies = async () => {
  console.log('Fetch trending movies', API_URL, process.env);

  const res = await fetch(`${API_URL}/trending`);

  // console.log('testing: ', res.json());

  if (!res.ok)
    throw new Error('Response was not ok');

  const data = await res.json();

  // 2. Now you can log it...
  console.log("Debug Data:", data);

  return data;
}
// export const fetchTrending = async () => {
//   const res = await fetch(`${API_URL}/trending`);
//   if (!res.ok) throw new Error('Network response was not ok');
//   return res.json();
// };

export const fetchSearchMovies = async () => {
  console.log('fetch search movies');
}

export const fetchMovie = async () => {
  console.log('Fetch movie')
}

