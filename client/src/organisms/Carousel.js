import { useEffect, useState } from 'react';
import { Chevron } from '../icons/Chevron';
import { DoubleChevron } from '../icons/DoubleChevron';
import { PlayPause } from '../icons/PlayPause';
import { Shuffle } from '../icons/Shuffle';

export const Carousel = ({ images, setImages }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [playInterval, setPlayInterval] = useState();

  useEffect(() => {
    // reset carousel index when new images are loaded
    setIndex(0);
  }, [images]);

  const autoPlay = () => {
    setIndex((i) => {
      if (i < images.length - 1) {
        return i + 1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    if (!isNaN(index) && Math.abs(index - prevIndex)) {
      setTimeout(() => setPrevIndex(index), 500);
    }
  }, [index]);

  useEffect(() => {
    if (play) {
      setPlayInterval(setInterval(autoPlay, 5000));
    } else {
      clearInterval(playInterval);
    }
    return () => clearInterval(playInterval);
  }, [play]);

  const handleClick = (direction) => {
    setIndex((i) => {
      if (direction === 'left' && i > 0) {
        return i - 1;
      } else if (direction === 'right' && i < images.length - 1) {
        return i + 1;
      }
    });
  };

  const handleShuffle = () => {
    setImages((images) => {
      const newImages = [...images];
      newImages.sort(() => Math.random() - 0.5);
      return newImages;
    });
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-lg shadow-md">
        <div className="relative">
          <img
            className={
              `top-0 absolute rounded-t-lg z-10 ` +
              (prevIndex > index
                ? 'transition-transform transform scale-0 translate-x-80 duration-400'
                : prevIndex < index
                ? 'transition-transform transform scale-0 -translate-x-80 duration-400'
                : 'opacity-0')
            }
            src={images[prevIndex]}
            alt={`catshark carousel image ${prevIndex + 1}`}
          />
          <img
            className="rounded-t-lg"
            src={images[index]}
            alt={`catshark carousel image ${index + 1}`}
          />
        </div>
        <div className="flex bg-white space-x-2 justify-center border-2 border-t-0 rounded-b-lg border-ownr-gray h-10">
          <DoubleChevron
            direction="left"
            width={2}
            onClick={() => setIndex(0)}
            disabled={index === 0}
          />
          <Chevron
            direction="left"
            width={2}
            onClick={() => handleClick('left')}
            disabled={index === 0}
          />
          <PlayPause
            play={play}
            width={2}
            onClick={() => setPlay((play) => !play)}
          />
          <Shuffle width={2} onClick={handleShuffle} />
          <Chevron
            direction="right"
            width={2}
            onClick={() => handleClick('right')}
            disabled={index === images.length - 1}
          />
          <DoubleChevron
            direction="right"
            width={2}
            onClick={() => setIndex(images.length - 1)}
            disabled={index === images.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
