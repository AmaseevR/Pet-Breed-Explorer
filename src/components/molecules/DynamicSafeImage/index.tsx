import { useState } from "react";
import Image from "next/image";
import { BREED_SPECIES } from "@/app/interfaces/breed";
import { BROKEN_IMAGE_URL } from "@/app/constant/constant";

type Props = {
  breed: any;
  species: BREED_SPECIES;
};

export const DynamicSafeImage = ({ breed, species }: Props) => {
  const apiBaseUrl = `https://cdn2.${
    species === BREED_SPECIES.DOG ? "thedogapi.com" : "thecatapi.com"
  }/images`;

  const [imgSrc, setImgSrc] = useState(
    breed?.reference_image_id
      ? `${apiBaseUrl}/${breed.reference_image_id}.jpg`
      : BROKEN_IMAGE_URL
  );

  const handleError = () => {
    setImgSrc(BROKEN_IMAGE_URL);
  };

  return (
    <Image
      src={imgSrc}
      alt={breed?.name}
      className="h-[400px] w-[400px] object-cover rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] border-4 border-n-1"
      width={500}
      height={500}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          handleError();
        }
      }}
      onError={handleError}
    />
  );
};
