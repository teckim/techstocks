import Appbar from '../components/Appbar';
import renderWithProviders from '../utils/test-utils';

describe('Appbar components', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithProviders(<Appbar />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
