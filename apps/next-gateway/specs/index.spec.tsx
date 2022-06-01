import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import { computedIndex } from '../pages/index'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('computedIndex', () => {
    expect(computedIndex(0)).toBe('001')
    expect(computedIndex(9)).toBe('010')
    expect(computedIndex(20)).toBe('021')
    expect(computedIndex(98)).toBe('099')
    expect(computedIndex(99)).toBe('100')
  })
});

