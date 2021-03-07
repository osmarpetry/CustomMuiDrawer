import { screen, render } from '@testing-library/react';
import CustomDrawer from '../index';

describe('<CustomDrawer />', () => {
  test('should be open with the custom width on desktop variant', () => {
     render(<CustomDrawer width='297px' />, );

    expect(screen.getByTestId('drawer')).toHaveStyleRule('width', '297px', {
      media: '(min-width:600px)',
    });
  });
});
