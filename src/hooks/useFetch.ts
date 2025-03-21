import { useQuery } from "@tanstack/react-query";

export const useFetch = <T>(url: string, delay = 1000) => {
  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error loading data");
      }
      return response.json();
    },
  });
};
