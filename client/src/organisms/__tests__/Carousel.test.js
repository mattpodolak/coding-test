import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import { Carousel } from '../Carousel';

test('renders carousel', () => {
  const setImages = jest.fn();
  const images = [
    'https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg',
    'https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg',
    'https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg',
    'https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg',
  ];
  const { getAllByAltText } = render(
    <Carousel images={images} setImages={setImages} />
  );
  expect(getAllByAltText('catshark carousel image 1')).toHaveLength(2);
});

test('arrow renders next image', () => {
  const setImages = jest.fn();
  const images = [
    'https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg',
    'https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg',
    'https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg',
    'https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg',
  ];
  const { getAllByAltText } = render(
    <Carousel images={images} setImages={setImages} />
  );
  fireEvent.click(screen.getByTitle('Single right'));
  expect(getAllByAltText('catshark carousel image 2')).toHaveLength(1);
});

test('arrow renders next image and then previous image', () => {
  const setImages = jest.fn();
  const images = [
    'https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg',
    'https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg',
    'https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg',
    'https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg',
  ];
  const { getAllByAltText } = render(
    <Carousel images={images} setImages={setImages} />
  );
  fireEvent.click(screen.getByTitle('Single right'));
  expect(getAllByAltText('catshark carousel image 2')).toHaveLength(1);
  fireEvent.click(screen.getByTitle('Single left'));
  expect(getAllByAltText('catshark carousel image 1')).toHaveLength(2);
});
