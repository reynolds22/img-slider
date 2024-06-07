import React, { useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

export default function ImgSlider({url, limit=5, page=1}){

    const [img, setImg] = useState([]); 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState();

    async function FetchImages(getUrl){
        try{
            const responce =  await fetch(`${getUrl}?page=${page}&limit=${limit}`);
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
        if(url !== '') FetchImages(url);
    },[url]);

    if(loading){
        return <div>Loading Data Please Wait.</div>
    }
    if(errorMsg !== null){
        return <div>Error Occured ! {errorMsg}</div>
    }

    return (
        <div className="img-Slider">
            <BsArrowLeftCircleFill className="arrow arrow-left"/>
            {
                img && img.length 
                ? img.map((imgItem)=>{
                    <img 
                        key={imgItem.id}
                        alt={imgItem.download_url}
                        src={imgItem.download_url}
                        className="current-img"
                    />
                })
                : null
            }
            <BsArrowRightCircleFill className="arrow arrow-right"/>
        </div>
    );
};
