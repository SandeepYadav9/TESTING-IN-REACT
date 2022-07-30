import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Arrange Data
  render(<App />);
  //Act

  //Assert
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
