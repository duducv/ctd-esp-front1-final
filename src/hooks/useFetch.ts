import { useEffect, useState } from "react";

export default function useFetch<T>(url: string , options?: RequestInit) {
   const [data, setData] = useState<T>()
   const [isFetchLoading, setIsLoading] = useState(false)
   const [error, setError] = useState<{} | undefined>()

   useEffect(() => {
      fetch(url, options)
      .then((res) => {
         setIsLoading(true)
         return res.json()
      })
      .then((json) => setData(json))
      .catch((err) => {
           setError(err)
      })
      .finally(() => setIsLoading(false))
   }, [options, url]);

   return { data, isFetchLoading, error }
}