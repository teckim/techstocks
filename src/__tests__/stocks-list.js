import StocksList from '../components/StocksList';
import renderWithProviders from '../utils/test-utils';
import { stocks } from '../data/mock';

describe('StocksList components', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithProviders(<StocksList stocks={stocks} />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
