import {Fragment, useState} from "react";
import "../App.css";

const images = [
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const openLightbox = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    return (
        <div className={"main-div"}>
            <div className={"title-div"}>
                <span id={"title-name"}>Image Gallery with Lightbox Effect</span>
            </div>
        <div className="gallery">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index}`}
                    onClick={() => openLightbox(index)}
                    className="gallery-item"
                />
            ))}
            {selectedImage && (
                <div className="lightbox">
                    <button className="close" onClick={closeLightbox}>&times;</button>
                    <button className="prev" onClick={prevImage}>&#10094;</button>
                    <img src={selectedImage} alt="Enlarged" className="lightbox-img" />
                    <button className="next" onClick={nextImage}>&#10095;</button>
                </div>
            )}
        </div>
        </div>
    );
};

export default Gallery;
