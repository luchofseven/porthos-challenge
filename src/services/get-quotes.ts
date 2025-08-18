import { API_URL } from "../const/apiUrl";
import type { ApiQuotesResponse, Quote } from "../interfaces";

// Para obtener todas las citas (quotes)
export const getQuotes = async (): Promise<ApiQuotesResponse> => {
  try {
    const response = await fetch(`${API_URL}/quotes`);
    const data: ApiQuotesResponse = await response.json();

    if (!data) {
      throw new Error("getQuotes - An error occurred while calling the API");
    }

    return data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

// Para obtener una sola cita aleatoria (random quote)
export const getRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch(`${API_URL}/quotes/random`);
    const data: Quote = await response.json();

    if (!data) {
      throw new Error(`getRandomQuote - An error occurred while calling the API`);
    }

    return data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};
