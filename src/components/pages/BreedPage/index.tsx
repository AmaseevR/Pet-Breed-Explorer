"use client";

import { useQuery } from "react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BREED_SPECIES, BreedInterface } from "@/app/interfaces/breed";
import { Loader } from "@/components/templates/Loader";
import { getBreed } from "@/app/services/breed";
import { DynamicSafeImage } from "@/components/molecules/DynamicSafeImage";

export default function BreedPage() {
  const { id, species } = useParams<{ id: string; species: BREED_SPECIES }>();

  const { data: breed, isLoading } = useQuery<BreedInterface>(
    ["breed", id],
    () => getBreed(id, species),
    {
      enabled: !!id && !!species,
    }
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <Loader />
      </div>
    );

  if (!breed)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <p className="text-center text-xl font-semibold">Breed not found</p>
      </div>
    );

  return (
    <div className="container mx-auto p-4 max-w-[1000px]">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <DynamicSafeImage breed={breed} species={species} />
        <div className="p-4 ">
          <h1 className="text-2xl font-bold">{breed.name}</h1>
          <p className="mt-2">{breed.description}</p>
          <p className="mt-2">
            <strong>Temperament:</strong> {breed.temperament}
          </p>
          <p className="mt-2">
            <strong>Life Span:</strong> {breed.life_span} years
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/" passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
