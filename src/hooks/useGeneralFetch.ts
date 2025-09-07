import { useCallback, useEffect, useState } from "react";

type DataType<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: DataType<T>;
  loading: boolean;
  error: ErrorType;
  refetch: () => void;
}

// Función sleep/genérica para delays
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useGeneralFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<DataType<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)
  const [trigger, setTrigger] = useState(0)
  

  const refetch = useCallback(() => {
    setTrigger(prev => prev + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)

    const fetchData = async () => {
      try {
        await sleep(2000);
        const response = await fetch(url, controller);

        if (!response.ok) {
          throw new Error("Error en la petición")
        }

        const jsonData: T = await response.json();

        setData(jsonData)
        setError(null);
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();

    return () => {
      controller.abort();
    }

  }, [url, trigger])

  return { data, loading, error, refetch }
}

