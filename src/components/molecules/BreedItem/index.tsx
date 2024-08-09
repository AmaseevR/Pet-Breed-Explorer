import Link from "next/link";
import { SafeImage } from "../SafeImage";
import { BreedInterface } from "@/app/interfaces/breed";

type Props = {
  redirect: string;
  breed: BreedInterface;
};

export const BreedItem = ({ redirect, breed }: Props) => {
  return (
    <Link href={`/breed/dog/${breed.id}`} key={breed.id}>
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
        <SafeImage
          breed={breed}
          apiBaseUrl="https://cdn2.thedogapi.com/images"
        />

        <div className="bg-n-1 p-4 absolute z-10 bottom-0 left-0 rounded-tr-lg">
          <h3 className="text-lg font-semibold text-black">{breed.name}</h3>
        </div>
      </div>
    </Link>
  );
};
