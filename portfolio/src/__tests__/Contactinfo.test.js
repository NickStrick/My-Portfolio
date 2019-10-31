import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Contactinfo from '../components/ContactInfo/Contactinfo.js';

describe('ContactInfo', () => {
    it('calls handleChange when text is inputed', () => {
        const testInput = 'Nick'

        const component = render(
            <Contactinfo />
        )

        const input = component.getByLabelText('first-name');

        //action
        fireEvent.change(input, { target: { value: testInput } })

        expect(input._valueTracker.getValue()).toBe('Nick')
    })
    it('calls handleChange when text is inputed', () => {
        const testInput = 'Strick'

        const component = render(
            <Contactinfo />
        )

        const input = component.getByLabelText('last-name');

        //action
        fireEvent.change(input, { target: { value: testInput } })

        expect(input._valueTracker.getValue()).toBe('Strick')
    })

    it('calls handleChange when text is inputed', () => {
        const testInput = 'Wow this kid looks sharp!'

        const component = render(
            <Contactinfo />
        )

        const input = component.getByLabelText('contact-msg');

        //action
        fireEvent.change(input, { target: { value: testInput } })

        expect(input._valueTracker.getValue()).toBe('Wow this kid looks sharp!')
    })
})