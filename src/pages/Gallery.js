import React, {useState, useEffect} from 'react';

import dog1 from '../assets/images/dog1.jpeg';
import dog2 from '../assets/images/dog2.jpeg';
import dog3 from '../assets/images/dog3.jpeg';
import dog4 from '../assets/images/dog4.jpeg';
import dog5 from '../assets/images/dog5.jpeg';
import dog6 from '../assets/images/dog6.jpeg';
import dog7 from '../assets/images/dog7.jpeg';

const GalleryImage = ({image}) => {

    // <Image src={dog1}></Image> doesn't work
    // <img src={dog1}></img>
    // ../assets/images/dog1.jpeg

    return (
        <div className={'gallery-image'}>
            <img src={image}></img>
        </div>
    )
}


const Gallery = () => {

    // const images = [
    //     'src/assets/images/dog1.jpeg',
    //     'src/assets/images/dog2.jpeg',
    // ]

    const images = [
        dog1,
        dog2,
        dog3,
        dog4,
        dog5,
        dog6,
        dog7
    ]

    const [counter, setCounter] = useState(0);
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);

    useEffect(() => {
        setIsLast(counter === images.length - 1);
        setIsFirst(counter === 0)
    }, [counter])

  return (
    <div>
        <h1>Gallery</h1>

        {/* {images.map((img, i) => {
            return <GalleryImage key={i} image={img}/>    
        })} */}

         <GalleryImage key={counter} image={images[counter]}/>  
         <button disabled={isFirst} onClick={() => setCounter(counter - 1)}>Previous</button>
         <button disabled={isLast} onClick={() => setCounter(counter + 1)}>Next</button>

        <div>
            {images.map((img, i) => {
                return <button key={i} className={i === counter ? 'current-gallery-index gallery-index' : 'gallery-index'} onClick={() => setCounter(i)}/>    
            })}
        </div>
         
    </div>
  )
}

export default Gallery