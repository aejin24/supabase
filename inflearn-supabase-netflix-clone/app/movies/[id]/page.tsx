import { getMovie } from "actions/movieActions";
import UI from "./ui";

export async function generateMetadata({ params, searchParams }) {
  const movie = await getMovie(params.id);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function Page({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="mt-16">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>}
    </main>
  );
}
