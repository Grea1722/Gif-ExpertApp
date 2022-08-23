import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs";

export const useFecthGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await GetGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
      getImages();
    }, [])


    return{
        images,
        isLoading
    }
    
}
