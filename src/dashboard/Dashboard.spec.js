import React from "react";
import renderer from "react-test-renderer"; 
import { render } from "@testing-library/react";
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';


describe("<Dashboard />", () => {
    it('renders at all', () => {
        render(<Dashboard />)
    });
})

describe("Dashboard display and controls tests", () => {
    it('shows first render', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByText('Lock Gate'));
        expect(getByText('Close Gate'));
    });

    it('shows display on first render', () => {
        const { getByText } = render(<Dashboard />);

        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    });
}) 