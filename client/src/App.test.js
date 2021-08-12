import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const headerElement = screen.getByText(
    /Browse, View, Enjoy Pictures of Cats and Sharks/i
  );
  const emptyStateElement = screen.getByText(
    /Select one of the buttons to start browsing a collection of photos./i
  );
  const buttonElement = screen.getByText('cats');
  expect(headerElement).toBeInTheDocument();
  expect(emptyStateElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('renders cat images', async () => {
  fetch.mockResolvedValueOnce({
    json: () => ({
      images: [
        'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
      ],
    }),
  });
  const { getAllByAltText } = render(<App />);
  fireEvent.click(screen.getByText('cats'));
  await waitFor(() =>
    expect(getAllByAltText('catshark carousel image 1')).toHaveLength(2)
  );
});

test('renders spinner', async () => {
  fetch.mockResolvedValueOnce({
    json: () => ({
      images: [
        'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
      ],
    }),
  });
  const { getByAltText } = render(<App />);
  fireEvent.click(screen.getByText('cats'));
  await waitFor(() =>
    expect(getByAltText('purple catshark spinner')).toBeInTheDocument()
  );
});
