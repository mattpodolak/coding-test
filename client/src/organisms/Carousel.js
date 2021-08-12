import { useEffect, useState } from 'react';
import { Image } from '../atoms/Image';
import { Chevron } from '../icons/Chevron';
import { DoubleChevron } from '../icons/DoubleChevron';
import { PlayPause } from '../icons/PlayPause';
import { Shuffle } from '../icons/Shuffle';

export const Carousel = ({ images, setImages }) => {
  const [index, setIndex] = useState(0);
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
    if (play) {
      setPlayInterval(setInterval(autoPlay, 3000));
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
      <div className="max-w-lg">
        <div style={{ transition: 'ease-in-out left 500ms' }}>
          <Image src={images[index]} />
        </div>
        <div className="flex space-x-2 justify-center border-2 border-t-0 rounded-b-lg border-ownr-gray h-10">
          <DoubleChevron
            direction="left"
            size={8}
            width={2}
            onClick={() => setIndex(0)}
            disabled={index === 0}
          />
          <Chevron
            direction="left"
            size={8}
            width={2}
            onClick={() => handleClick('left')}
            disabled={index === 0}
          />
          <PlayPause
            play={play}
            size={8}
            width={2}
            onClick={() => setPlay((play) => !play)}
          />
          <Shuffle size={8} width={2} onClick={handleShuffle} />
          <Chevron
            direction="right"
            size={8}
            width={2}
            onClick={() => handleClick('right')}
            disabled={index === images.length - 1}
          />
          <DoubleChevron
            direction="right"
            size={8}
            width={2}
            onClick={() => setIndex(images.length - 1)}
            disabled={index === images.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
