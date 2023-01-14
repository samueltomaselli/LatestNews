import { ReactEventHandler, useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { InfoContext } from "../context/Context";

export const SearchBar = () => {
  const { search, setSearch } = useContext(InfoContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-gray-300 bg-opacity-30  flex items-center p-3 h-16 gap-3 rounded-md">
      <FaSearch className="text-2xl" />
      <input
        type="search"
        value={search}
        onChange={handleChange}
        className="bg-gray-300 bg-opacity-0 text-white h-10 w-full focus:outline-none text-xl placeholder:text-white placeholder:opacity-40"
        placeholder="Search news by title, description or author"
      />
    </div>
  );
};
