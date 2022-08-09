import { Spinner } from '../atoms/Spinner';

export const Loading = () => {
  return (
    <div className="flex flex-col space-y-3 justify-center py-20">
      <div className="self-center">
        <Spinner
          img="catsharklogo-purple.png"
          imgAlt="purple catshark spinner"
        />
      </div>
      <h2 className="self-center text-2xl font-medium text-ownr-black">
        Loading
      </h2>
    </div>
  );
};
