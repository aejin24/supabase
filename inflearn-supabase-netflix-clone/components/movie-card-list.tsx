"use client";

import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "actions/movieActions";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";
import MovieCard from "./movie-card";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);

  const getAllMoviesQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => searchMovies(search),
  });

  return (
    <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
      {getAllMoviesQuery.isLoading && <Spinner />}
      {getAllMoviesQuery.data &&
        getAllMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
