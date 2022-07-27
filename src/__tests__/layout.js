import Layout from '../components/Layout';
import renderWithProviders from '../utils/test-utils';

describe('Layout components', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithProviders(<Layout />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
