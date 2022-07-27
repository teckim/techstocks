import { screen } from '@testing-library/react';
import StocksList from '../components/StocksList';
import renderWithProviders from '../utils/test-utils';
import { stocks } from '../data/mock';

describe('StocksList components', () => {
  const { asFragment } = renderWithProviders(<StocksList stocks={stocks} />);
  const firstRender = asFragment();

  it('should contain all the items from the mock data', () => {
    const renderedStocks = screen.getByTestId('stocks-list');

    expect(renderedStocks.children.length).toBe(stocks.length);
  });

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
});
