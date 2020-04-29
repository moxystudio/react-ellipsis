import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Ellipsis from '../src/Ellipsis';

const defaultProps = {
    children: 'Testing text, testing text.',
    className: 'className',
};

const renderWithProps = (props = {}) => render(<Ellipsis { ...defaultProps } { ...props } />);

describe('Ellipsis Component', () => {
    it('should render correctly', () => {
        const { asFragment } = renderWithProps();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly when there is a resize', () => {
        const { asFragment } = renderWithProps();

        fireEvent(window, new Event('resize'));

        expect(asFragment()).toMatchSnapshot();
    });
});
