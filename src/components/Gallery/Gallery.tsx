import React, { useEffect, useState } from 'react';
import ViewPanel from '../ViewPanel/ViewPanel';
import ImageGrid from '../ImagesGrid/ImagesGrid';
import { imageService } from '../../services/ImagesService';
import { ImagesContent, Response} from '../../Model/Interfaces';
import './Gallery.css';

function Gallery() {
    const [images, setImages] = useState<ImagesContent[]>([]);
    const [displayImages, setDisplayImages] = useState<ImagesContent[]>([]);
    const [isRowDisplay, setIsRowDisplay] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response: Response = await imageService.getImages();
                setImages(response.data);
                setDisplayImages(randomArrayBuilder(response.data, 5))
            } catch (e) {
                console.log('failed to fetch data with error:', e);
            }
        }
         fetchData();
    }, [])

    /* randomArrayBuilder function returns a new array with diffrent random values in the length of size */
    const randomArrayBuilder = (imagesList: ImagesContent[] = [], size: number = 5): ImagesContent[] => {
        const randomArray: ImagesContent[] = [];
        while (randomArray.length < size) {
            const random = Math.floor(Math.random() * imagesList.length);
            if (randomArray.indexOf(imagesList[random]) === -1) {
                randomArray.push(imagesList[random]);
            }
        }
        return randomArray;
    };

    return (
        <div className='wrapper'>
            <ViewPanel setIsRowDisplay={setIsRowDisplay} />
            <ImageGrid displayImages={displayImages} rowDisplay={isRowDisplay} />
            <button data-testid="refresh-button" onClick={() => setDisplayImages(randomArrayBuilder(images, 5))}>Refresh</button>
        </div>
    );
}

export default Gallery;