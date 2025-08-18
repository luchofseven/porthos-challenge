import type { ApiQuotesProps, Quote } from "../interfaces";

const API_URL = "https://dummyjson.com";

// Para obtener todas las citas (quotes)
export const getQuotes = async (): Promise<ApiQuotesProps> => {
  try {
    const response = await fetch(`${API_URL}/quotes`);
    const data: ApiQuotesProps = await response.json();

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
