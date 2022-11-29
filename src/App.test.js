import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import GameGrid from './Components/GameGrid';
import GridItem from './Components/GridItem';

test('render the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tik tak toe/i);
  expect(linkElement).toBeInTheDocument();
});

test('render the app container', async() => {
  render(<GameGrid />);
  const appContainer = await screen.findByTestId('test-app-container')
  expect(appContainer).toBeInTheDocument();
})

test('render individual grid item', async() => {
  render(<GridItem />);
  const gridItem = await screen.findByTestId('grid-item')
  expect(gridItem).toBeInTheDocument();
})


test('item is selected by user', () => {
  const onSelectedItem = jest.fn();

  const { getByTestId } = render(
    <GridItem onSelectedItem={onSelectedItem} />
  );

  fireEvent.click(getByTestId('grid-item-button'));

  expect(onSelectedItem).toHaveBeenCalled();
})