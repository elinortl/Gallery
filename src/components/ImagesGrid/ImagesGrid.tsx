import { Icon } from '@blueprintjs/core';
import { ImageGridProps } from '../../Model/Interfaces';
import './ImagesGrid.css';


// ImageGrid component rendres number of Images in a given array 
const ImageGrid = ({rowDisplay, displayImages }: ImageGridProps) => {
    return (
        <div className={rowDisplay ? 'container' : 'colContainer'}>
            {
                displayImages?.map((item) =>
                    <div key={item.description} className={rowDisplay ? 'imageWrapper' : 'imageWrapperCol'}>
                        <img data-testid="image-item" className="item" src={item.url} alt="random" />
                        <div className="description" >{item.description}</div>
                        <div className='likes'><Icon className="heart" icon={"heart"} />{item.likes}</div>
                    </div>
                    )
            }
        </div>
    );
}

export default ImageGrid;