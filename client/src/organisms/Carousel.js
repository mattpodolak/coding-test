import { useEffect, useState } from 'react';
import { Image } from '../atoms/Image';
import { Chevron } from '../atoms/Chevron';

export const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // reset carousel index when new images are loaded
    console.log('images updated');
    setIndex(0);
  }, [images]);

  const handleClick = (direction) => {
    setIndex((i) => {
      if (direction == 'left' && i > 0) {
        return i - 1;
      } else if (direction == 'right' && i < images.length - 1) {
        return i + 1;
      }
    });
  };

  return (
    <div className="flex justify-center">
      <div className="text-ownr-gray self-center cursor-pointer">
        {index > 0 && (
          <Chevron
            direction="left"
            size={20}
            width={3}
            onClick={() => handleClick('left')}
          />
        )}
      </div>
      <div className="max-w-lg">
        <Image src={images[index]} />
      </div>
      <div className="text-ownr-gray self-center cursor-pointer">
        {index < images.length - 1 && (
          <Chevron
            direction="right"
            size={20}
            width={3}
            onClick={() => handleClick('right')}
          />
        )}
      </div>
    </div>
  );
};
