import React,{useState} from 'react';

interface ButtonwImageProps {
    text: string;
    imageSrc: string;
    onClick?: () => void;
    className?: string;
}

const ButtonwImage: React.FC<ButtonwImageProps> = ({ text, imageSrc, onClick, className }) => {
    const [click, setClick] = useState(false);

    return (
        <button onMouseUp={()=>setTimeout(()=>{ setClick(false)},200)} onMouseDown={()=>setClick(true)} onClick={()=>{onClick?onClick():''}} className={`button-with-image ${className} ${click?'translate-y-[-4px]':''} transition-all duration-[300ms]`}>
            <img src={imageSrc} className="button-image" />
            <span className="button-text">{text}</span>
        </button>
    );
};

export default ButtonwImage;