import { company } from '../data/mock';
import StockCard from '../components/StockCard';
import renderWithProviders from '../utils/test-utils';

describe('StockCard components', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithProviders(<StockCard stock={company} />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
