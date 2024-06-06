import React, { useState } from 'react';

export default function ImgSlider(url, limit){

    const [img, setImg] = useState([]); 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    async function fetchImages(getUrl){
        try{
            const responce =  await fetch(getUrl);
            const data = await responce.json();
            setLoading(true)

            if(data){
                setImg(data)
                setLoading(false)
            }
        } 
        catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    };

    useEffect(() => {
        if(url !== '') fetchImages(url);
    },[url]);

    return (
        <div className="img-Slider"></div>
    );
};
