import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getAllCats, getAllDogs } from "@/app/services/breed";
import { BreedInterface } from "../interfaces/breed";
import { shuffle } from "../utils/utils";

export const useGetBreedList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const { data: dogBreeds, isLoading: isLoadingDogs } = useQuery<
    BreedInterface[]
  >("dogBreeds", getAllDogs, { staleTime: 1000 * 60 * 10 });
  const { data: catBreeds, isLoading: isLoadingCats } = useQuery<
    BreedInterface[]
  >("catBreeds", getAllCats, { staleTime: 1000 * 60 * 10 });

  const shuffledDogBreeds = useMemo(
    () => shuffle(dogBreeds || []),
    [dogBreeds]
  );

  const shuffledCatBreeds = useMemo(
    () => shuffle(catBreeds || []),
    [catBreeds]
  );

  const filteredDogBreeds = useMemo(
    () =>
      shuffledDogBreeds.filter((breed: BreedInterface) =>
        breed.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ),
    [shuffledDogBreeds, searchQuery]
  );

  const filteredCatBreeds = useMemo(
    () =>
      shuffledCatBreeds.filter((breed: BreedInterface) =>
        breed.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ),
    [shuffledCatBreeds, searchQuery]
  );

  const allBreeds = [...(dogBreeds || []), ...(catBreeds || [])];
  const filteredBreeds = allBreeds.filter((breed: BreedInterface) =>
    breed.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (breed: BreedInterface) => {
    setSearchQuery(breed.name);
    setShowSuggestions(false);
  };

  return {
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
  };
};
