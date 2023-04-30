import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { details } from "./Image";
import "../App.css";

const CatalogViewer = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    let box = document.querySelector(".catalog")

    useEffect(() => {
        let intervalId;
        if (autoplay) {
            intervalId = setInterval(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [autoplay, currentImageIndex, images.length]);

    const handlePreviousImage = () => {
        // setCurrentImageIndex(
        //     (currentImageIndex - 1 + images.length) % images.length
        // );
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width
    };

    const handleNextImage = () => {
        // setCurrentImageIndex((currentImageIndex + 1) % images.length);
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleAutoplayClick = () => {
        setAutoplay(!autoplay);
    };

    const currentImage = images[currentImageIndex];

    return (
        <div className="main">
            <div className="catalog-viewer-image">
                <img
                    src={currentImage}
                    alt={`${currentImageIndex + 1}`}
                />
                <div className="catalog-viewer__details">
                    <h6>{details}</h6>
                </div>
            </div>
            <button
                className='btn-play'
                onClick={handleAutoplayClick}
            >
                {autoplay ? <FaPause /> : <FaPlay />}
            </button>
            <div className="catalog-viewer">
                <button onClick={handlePreviousImage} className="btn left"><FaArrowLeft /></button>
                <div className="catalog">
                    {images.map((image, index) => (
                        <img
                            width={200}
                            height={200}
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`catalog-viewer__thumbnail ${index === currentImageIndex ? "selected" : ""
                                }`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
                <button onClick={handleNextImage} className="btn right"><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default CatalogViewer;
