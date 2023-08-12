import { useState, useEffect } from "react";

const useFetch = (url, lenPoke) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const promises = Array.from({ length: lenPoke }, (_, index) =>
                    fetch(`${url}/${index + 1}`).then((response) => response.json())
                );
                const response = await Promise.all(promises);
                setData(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, lenPoke]);

    return { data, loading };
};

export default useFetch;