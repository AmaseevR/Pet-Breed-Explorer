import { BreedInterface } from "@/app/interfaces/breed";
import { ChangeEvent } from "react";

type Props = {
  searchQuery: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onShowSuggestions: (value: boolean) => void;
  showSuggestions: boolean;
  filteredBreeds: BreedInterface[];
  onSuggestionClick: (value: BreedInterface) => void;
};

export const Search = ({
  searchQuery,
  onSearchChange,
  onShowSuggestions,
  showSuggestions,
  filteredBreeds,
  onSuggestionClick,
}: Props) => {
  return (
    <div className="flex justify-center mt-10 relative">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        onFocus={() => onShowSuggestions(true)}
        onBlur={() => setTimeout(() => onShowSuggestions(false), 100)}
        placeholder="Search breeds..."
        className="mb-4 p-3 border border-gray-300 rounded-lg w-full max-w-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showSuggestions && searchQuery && (
        <div className="absolute top-full mt-1 w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul>
            {filteredBreeds.slice(0, 5).map((breed: BreedInterface) => (
              <li
                key={breed.id}
                className="p-3 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                onClick={() => onSuggestionClick(breed)}
              >
                {breed.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
