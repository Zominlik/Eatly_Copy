"use client"
import axios from "axios";
import { memo, useState, useEffect } from "react";
import { AllpropsType } from "../TsTypes"

const useAxiosFetch = ({dataUrl}:AllpropsType) => {

    const [datas, setDatas] = useState<any>([]);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url:AllpropsType) => {
            setLoading(true);
            try {
                    const response = await axios.get(url,
                    {
                        cancelToken: source.token
                    });
                    if(isMounted) {
                        setLoading(false);
                        setError(null)
                        setDatas(response.data);
                        console.log(datas)
                    }
                
            } catch (err) {
                if(isMounted) {
                    setError(err.message)
                    setLoading(false);
                    console.log(error)
                }
            } finally {
                isMounted && setTimeout(() => setLoading(false), 2000)
            }
        }

        fetchData(dataUrl)

        const cleanUp = () => {
            console.log("cleanUp function")
            isMounted = false;
            source.cancel()
        }

        return cleanUp
    }, [dataUrl])







    return {datas, error, loading}
}

export default memo(useAxiosFetch)