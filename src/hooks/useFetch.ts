import { useState, useEffect } from "react";

export const useFetch = <T>(url: string, delay = 1000) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, delay));

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error load data");
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, delay]);

  return { data, loading, error };
};
