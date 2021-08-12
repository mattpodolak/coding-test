import { Image } from '../atoms/Image';

export const EmptyState = ({ imageSrc, imageAltText, text }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="max-w-sm opacity-50 self-center">
        <Image src={imageSrc} altText={imageAltText} />
      </div>
      <div className="self-center max-w-sm">
        <h2 className="text-ownr-black font-medium text-2xl">{text}</h2>
      </div>
    </div>
  );
};
