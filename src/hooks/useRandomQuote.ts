import { useEffect, useState } from "react";
import { getRandomQuote } from "../services";
import type { Quote } from "../interfaces";

export const useRandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ isError: boolean; error: string | null }>({ isError: false, error: null });

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        setLoading(true);
        const quote = await getRandomQuote();
        setRandomQuote(quote);
      } catch (err) {
        if (err instanceof Error) {
          setError({ isError: true, error: err.message });
        } else {
          setError({ isError: true, error: String(err) });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRandomQuote();
  }, []);

  return { randomQuote, loading, error: error.isError, errorMessage: error.error };
};
