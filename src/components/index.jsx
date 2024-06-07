import React, { useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css'

export default function ImgSlider({url, limit=5, page=1}){

    const [img, setImg] = useState([]); 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function FetchImages(getUrl){
        try{
            setLoading(true)
            const responce =  await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await responce.json();

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

    function handlePrev(){
        setCurrentSlide(currentSlide === 0 ? img.length - 1 : currentSlide - 1);
    };
    function handleNext(){
        setCurrentSlide(currentSlide === img.length - 1 ? 0 : currentSlide + 1);
    };
 
    useEffect(() => {
        if(url !== '') FetchImages(url);
    },[url]);
    console.log(img);
    if(loading){
        return <div>Loading Data Please Wait.</div>
    }
    if(errorMsg !== null){
        return <div>Error Occured ! {errorMsg}</div>
    }

    return (
        <div className="img-Slider">
            <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left"/>
            {
                img && img.length 
                ? img.map((imgItem, index)=>(
                    <img 
                        key={imgItem.id}
                        alt={imgItem.download_url}
                        src={imgItem.download_url}
                        className={currentSlide === index ? 'current-img' : 'current-img hide-c-img'}
                    />))
                : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicate">
                {
                    img && img.length
                    ? img.map((_, index)=> (
                        <button 
                            key={index} 
                            className={currentSlide === index ? 'current-indicate' : 'current-indicate inactive-indicate'}
                            onClick={()=> setCurrentSlide(index)}
                        ></button>))
                    : null
                }
            </span>
        </div>
    );
};
