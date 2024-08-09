export interface BreedInterface {
  id: string;
  name: string;
  reference_image_id: string;
  description: string;
  temperament: string;
  life_span: string;
}

export enum BREED_SPECIES {
  DOG = "dog",
  CAT = "cat",
}
