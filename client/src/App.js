import { useState } from 'react';
import { Button } from './atoms/Button';
import { Navbar } from './organisms/Navbar';
import { EmptyState } from './organisms/EmptyState';
import { Loading } from './organisms/Loading';
import { Carousel } from './organisms/Carousel';

// TODO: load this from API
const buttonOptions = ['cats', 'sharks'];

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [active, setActive] = useState([]);
  const [error, setError] = useState();

  const buttonClick = async (button) => {
    setLoading(true);

    var newArr = [...active];
    if (active.includes(button)) {
      // remove button value from active array
      const index = newArr.indexOf(button);
      newArr.splice(index, 1);
      setActive(newArr);
    } else {
      newArr.push(button);
      setActive(newArr);
    }

    // TODO: make api request
    try {
      const res = await fetch(`/api/images/url?types=${newArr.join(',')}`);
      const body = await res.json();
      setError();
      setImages(body['images']);
    } catch (err) {
      console.error(err);
      setError(err);
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar
        logo="catsharklogo-white.png"
        logoAlt="white catshark logo"
        text="catshark"
      />
      <div className="flex flex-col mx-2 space-y-4">
        <div className="flex justify-center">
          <div className="flex flex-col text-center space-y-8 text-ownr-black">
            <h1 className="max-w-3xl text-4xl font-serif font-bold self-center">
              Browse, View, Enjoy Pictures of Cats and Sharks
            </h1>
            <p className="max-w-xl self-center text-lg">
              Enjoy your spare time browsing our curated selection of the best
              cat and shark photos from across the internet.
            </p>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : images.length === 0 ? (
          <EmptyState
            imageSrc="catsharkcustom.png"
            imageAltText="purple catshark"
            text="Select one of the buttons to start browsing a collection of photos."
          />
        ) : (
          <Carousel images={images} />
        )}
        {error && (
          <div>
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        )}

        <div className="flex space-x-2 justify-center">
          {buttonOptions.map((button) => {
            return (
              <Button
                buttonText={button}
                onClick={(e) => buttonClick(button)}
                active={active.includes(button)}
                key={button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
