import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
  test('simple render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('title-value')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('title-value')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('title-value')).toHaveTextContent('9');
  });
});
