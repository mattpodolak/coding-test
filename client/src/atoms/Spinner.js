import { Image } from './Image';

export const Spinner = ({ img, imgAlt }) => {
  return (
    <div className="w-28 h-28" style={{ animation: 'spin infinite 2s' }}>
      <Image src={img} altText={imgAlt} />
    </div>
  );
};
