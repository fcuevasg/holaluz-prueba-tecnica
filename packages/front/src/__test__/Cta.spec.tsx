import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cta from '../components/CTA/Cta';

describe('Cta component', () => {
  it('renders the Cta component correctly', () => {
    const { getByText } = render(<Cta />);
    const headingElement = getByText('Power your rooftop');
    const subheadingElement = getByText('Learn More by searching the CUPS number and get amazing offers!');
    
    expect(headingElement).toBeInTheDocument();
    expect(subheadingElement).toBeInTheDocument();
  });
});