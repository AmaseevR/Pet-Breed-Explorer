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
      className="mx-auto w-auto h-auto max-h-[60vh] object-cover"
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
