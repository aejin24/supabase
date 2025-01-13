"use client";

import { getMovie } from "actions/movieActions";
import UI from "./ui";

export default async function Page({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="mt-16">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>}
    </main>
  );
}
