import { useEffect, useState } from "react";

//Can be extended to accept options object for fetch API, for example if we want to pass some headers, 
//also can be extended to accept a param with which we can decide how to read the response, because sometimes we want to read it as text etc.
export const useFetch = <T>(url: string): { data: T, error: object | null } => {
    const [data, setData] = useState<T | any>(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error loading partners!')
                }
                return res.json();
            })
            .then(setData)
            .catch(setError);
    }, [url]);

    return { data, error };
};