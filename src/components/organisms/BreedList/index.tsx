import { BreedInterface } from "@/app/interfaces/breed";
import { BreedItem } from "@/components/molecules/BreedItem";
import { Fragment } from "react";

type Props = {
  filteredDogBreeds: BreedInterface[];
  filteredCatBreeds: BreedInterface[];
};

export const BreedList = ({ filteredDogBreeds, filteredCatBreeds }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {filteredDogBreeds?.slice(0, 15).map((breed: BreedInterface) => (
        <Fragment key={breed.id}>
          <BreedItem redirect={`/breed/dog/${breed.id}`} breed={breed} />
        </Fragment>
      ))}

      {filteredCatBreeds?.slice(0, 15).map((breed: BreedInterface) => (
        <Fragment key={breed.id}>
          <BreedItem redirect={`/breed/cat/${breed.id}`} breed={breed} />
        </Fragment>
      ))}
    </div>
  );
};
