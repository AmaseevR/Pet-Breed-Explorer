import { BREED_SPECIES, BreedInterface } from "../interfaces/breed";
import { catApi, dogApi } from "../lib/axios";

export async function getAllDogs(): Promise<BreedInterface[]> {
  const { data } = await dogApi.get("/breeds");
  return data;
}

export async function getAllCats(): Promise<BreedInterface[]> {
  const { data } = await catApi.get("/breeds");
  return data;
}

export async function getBreed(
  id: string,
  species: BREED_SPECIES
): Promise<BreedInterface> {
  const api = species === BREED_SPECIES.DOG ? dogApi : catApi;
  const { data } = await api.get(`/breeds/${id}`);
  return data;
}
