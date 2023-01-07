import { useEffect, useState } from "react";
import style from "./postImageField.module.css";

type PostImageFieldProps = {
    images: Array<string>,
    index: number
}

const PostImageField = ({ images, index }: PostImageFieldProps) => {
    const containerId = "post-image-container_" + index;
    const imageWidth = 473;
    const [isDisplayArrow, setIsDisplayArrow] = useState({ leftArrow: false, rightArrow: true });
    const [imageIndex, setImageIndex] = useState(0);

    const imageContainerMaxWidth = (images.length - 1) * imageWidth;

    const scrollLeft = () => {
        setImageIndex(prev => prev + imageWidth);
    }
    const scrollRight = () => {
        setImageIndex(prev => prev - imageWidth);
    }

    useEffect(() => {
        const imageIndex_abs = Math.abs(imageIndex);
        if (imageIndex_abs <= 0) {
            setIsDisplayArrow({ leftArrow: false, rightArrow: true })
        } else if (imageIndex_abs >= imageContainerMaxWidth) {
            setIsDisplayArrow({ leftArrow: true, rightArrow: false })
        } else if (imageIndex_abs !== 0 && imageIndex_abs !== imageContainerMaxWidth) {
            setIsDisplayArrow({ leftArrow: true, rightArrow: true })
        }
    }, [imageIndex])

    return <div className={style.imageField}>
        <div className={style.container} id={containerId}>
            {images.map((img, i) => {
                const imagePositionX = `translateX(${imageIndex + (i * imageWidth)}px)`
                return <img src={img} key={img} style={{ transform: imagePositionX }} />
            })}

            {images.length > 1 && <div className={style.dotGroup}>
                {images.map((img, i) => {
                    const isActive = (Math.abs(imageIndex) / imageWidth === i)
                    // return <div className={`post-image-container-dot${isActive ? " active" : ""}`} key={containerId + "_ImageIndex_" + i} />
                    return <div className={style.dot + isActive ? " " + style.active : ""} key={containerId + "_ImageIndex_" + i} />
                })}
            </div>}
        </div>

        {isDisplayArrow.leftArrow && <div className={style.arrowLeft} onClick={scrollLeft} />}
        {isDisplayArrow.rightArrow && images.length > 1 && <div className={style.arrowRight} onClick={scrollRight} />}
    </div>
}
export default PostImageField