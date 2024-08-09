import { useState } from "react";
import Image from "next/image";
import { BreedInterface } from "@/app/interfaces/breed";
import { BROKEN_IMAGE_URL } from "@/app/constant/constant";

type Props = {
  breed: BreedInterface;
  apiBaseUrl: string;
};

export const SafeImage = ({ breed, apiBaseUrl }: Props) => {
  const [imgSrc, setImgSrc] = useState(
    `${apiBaseUrl}/${breed?.reference_image_id}.jpg`
  );

  const handleError = () => {
    setImgSrc(BROKEN_IMAGE_URL);
  };

  return (
    <Image
      src={imgSrc}
      alt={breed?.name}
      className="w-full h-64 object-cover"
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
