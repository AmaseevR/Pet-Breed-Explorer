import axios from "axios";

const API_KEY = process.env.X_API_KEY;
const DOG_BASE_URL = "https://api.thedogapi.com/v1/"
const CAT_BASE_URL = "https://api.thecatapi.com/v1/"

export const dogApi = axios.create({
  baseURL: DOG_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

export const catApi = axios.create({
  baseURL: CAT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});
