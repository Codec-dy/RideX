import React from 'react';

interface ImageTitleTextCProps {
    imageSrc: string;
    title: string;
    text: string;
}

const ImageTitleTextC: React.FC<ImageTitleTextCProps> = ({ imageSrc, title, text }) => {
    return (
        <div className="flex flex-col gap-2 text-center">
            <img src={imageSrc} alt={"image"} className="image" />
            <h2 className="font-semibold text-blue-700">{title}</h2>
            <p className="text-xs text-gray-600">{text}</p>
        </div>
    );
};

export default ImageTitleTextC;