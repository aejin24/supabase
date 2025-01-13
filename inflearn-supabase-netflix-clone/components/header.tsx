"use client";

import { useRecoilState } from "recoil";
import { searchState } from "utils/recoil/atoms";
import Logo from "./logo";

export default function Header() {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-gray-900 flex items-center justify-between">
      <nav className="flex gap-4">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>

      <div className="flex w-full max-w-72 items-center gap-2 border-white rounded-md p-2 bg-transparent text-white border">
        <i className="fa-search fas" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent"
          placeholder="Search Movies"
        />
      </div>
    </header>
  );
}
