import { useState } from "react";
export const useFetching: Function = (callback: CallableFunction) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fetching = async (...args: IArguments[]) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e: Error | unknown | null) {
      if (e) {
        if (typeof e === "string") {
          setError(e.toUpperCase());
        } else if (e instanceof Error) {
          setError(e.message);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
