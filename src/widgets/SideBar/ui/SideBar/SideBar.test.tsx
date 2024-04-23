import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import SideBar from './SideBar';

describe('SideBar', () => {
  test('simple render', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<SideBar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
