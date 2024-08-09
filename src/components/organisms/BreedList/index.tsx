import { BreedInterface } from "@/app/interfaces/breed";
import { SafeImage } from "@/components/molecules/SafeImage";
import Link from "next/link";

type Props = {
  filteredDogBreeds: BreedInterface[];
  filteredCatBreeds: BreedInterface[];
};

export const BreedList = ({ filteredDogBreeds, filteredCatBreeds }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredDogBreeds?.slice(0, 15).map((breed: BreedInterface) => (
        <Link href={`/breed/dog/${breed.id}`} key={breed.id}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <SafeImage
              breed={breed}
              apiBaseUrl="https://cdn2.thedogapi.com/images"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {breed.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
      {filteredCatBreeds?.slice(0, 15).map((breed: BreedInterface) => (
        <Link href={`/breed/cat/${breed.id}`} key={breed.id}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <SafeImage
              breed={breed}
              apiBaseUrl="https://cdn2.thecatapi.com/images"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {breed.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
