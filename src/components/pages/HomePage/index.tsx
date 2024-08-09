"use client";

import { useGetBreedList } from "@/app/hooks/useGetBreedList";
import { Loader } from "@/components/templates/Loader";
import { BreedList } from "@/components/organisms/BreedList";
import { Search } from "@/components/molecules/Search";

export default function HomePage() {
  const {
    searchQuery,
    showSuggestions,
    isLoadingDogs,
    isLoadingCats,
    filteredDogBreeds,
    filteredCatBreeds,
    setShowSuggestions,
    filteredBreeds,
    handleSearchChange,
    handleSuggestionClick,
  } = useGetBreedList();

  if (isLoadingDogs || isLoadingCats) return <Loader />;

  return (
    <div className="container mx-auto px-4">
      <Search
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onShowSuggestions={(value) => setShowSuggestions(value)}
        showSuggestions={showSuggestions}
        filteredBreeds={filteredBreeds}
        onSuggestionClick={(value) => handleSuggestionClick(value)}
      />

      <BreedList
        filteredDogBreeds={filteredDogBreeds}
        filteredCatBreeds={filteredCatBreeds}
      />
    </div>
  );
}
