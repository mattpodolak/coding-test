import { useEffect, useState } from 'react';
import { Image } from '../atoms/Image';
import { Chevron } from '../icons/Chevron';
import { PlayPause } from '../icons/PlayPause';
import { Shuffle } from '../icons/Shuffle';

export const Carousel = ({ images, setImages }) => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

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

  const handleShuffle = () => {
    setImages((images) => images.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-lg">
        <Image src={images[index]} />
        <div className="flex space-x-2 justify-center border-2 border-t-0 rounded-b-lg border-ownr-gray h-10">
          <Chevron
            direction="left"
            size={8}
            width={2}
            onClick={() => handleClick('left')}
            disabled={index === 0}
          />
          <div className="text-ownr-gray self-center cursor-pointer">
            <PlayPause
              play={play}
              size={8}
              width={2}
              onClick={() => setPlay((play) => !play)}
            />
          </div>
          <div className="text-ownr-gray self-center cursor-pointer">
            <Shuffle size={8} width={2} onClick={handleShuffle} />
          </div>
          {index < images.length - 1 ? (
            <div className="text-ownr-gray self-center cursor-pointer">
              <Chevron
                direction="right"
                size={8}
                width={2}
                onClick={() => handleClick('right')}
              />
            </div>
          ) : (
            <div className="text-gray-300 self-center">
              <Chevron direction="right" size={8} width={2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
