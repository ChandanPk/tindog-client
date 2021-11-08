import { useState, useEffect } from "react";

export default function useFetch(url) {

    const abortContr = new AbortController();

    const [data, setData] = useState();
    const [err, setErr] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal: abortContr.signal})
                .then(res => {
                    if (!res.ok) {
                        console.log(res)
                        data && setData(null)
                        throw Error("Unable to fetch, 404 not found!")
                    }
                    // console.log(res)
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setData(data)
                    setIsPending(false)
                    err && setErr(null)
                })
                .catch(err => {
                    if (err.name === "AbortError"){
                        console.log("Fetch was aborted!")
                    }else {
                        // console.log(err, "bc")
                        setErr(err.message)
                        setIsPending(null)
                    }
                    
                })
        }, 300)

        return ()=> abortContr.abort();
// eslint-disable-next-line
    }, [])

    return { data, isPending, err, setData }

}