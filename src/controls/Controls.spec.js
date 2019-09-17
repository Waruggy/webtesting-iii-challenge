import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls'

describe("<Controls />", () => {
    it('renders at all', () => {
        render(<Controls />)
    });
})

describe("Control button", () => {
    const controlsDefault = render(<Controls />)
    it('renders buttons for unlocked', () => {
        const closeSpy = jest.fn()
        const lockSpy = jest.fn()

        const { getByText } = render (<Controls closed={false} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>)
        const closeBut = getByText(/close gate/i)
        const lockBut = getByText(/lock gate/i)

        expect(closeBut.disabled).toBeFalsy()
        expect(lockBut.disabled).toBeTruthy()

        fireEvent.click(closeBut)
        expect(closeSpy).toBeCalled()

        fireEvent.click(lockBut)
        expect(lockSpy).not.toBeCalled()
    });
    it('renders buttons for unlocked', () => {
        const closeSpy = jest.fn()
        const lockSpy = jest.fn()

        const { getByText } = render (<Controls closed={true} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>)
        const closeBut = getByText(/open gate/i)
        const lockBut = getByText(/lock gate/i)

        expect(closeBut.disabled).toBeFalsy()
        expect(lockBut.disabled).toBeFalsy()

        fireEvent.click(closeBut)
        expect(closeSpy).toBeCalled()

        fireEvent.click(lockBut)
        expect(lockSpy).toBeCalled()
    });
    it('renders the right buttons for locked / closed', () => {
        const closeSpy = jest.fn()
        const lockSpy = jest.fn()

        const { getByText } = render (<Controls closed={true} locked={true} toggleClosed={closeSpy} toggleLocked={lockSpy}/>)
        const closeBut = getByText(/open gate/i)
        const lockBut = getByText(/unlock gate/i)

        expect(closeBut.disabled).toBeTruthy()
        expect(lockBut.disabled).toBeFalsy()

        fireEvent.click(closeBut)
        expect(closeSpy).not.toBeCalled()

        fireEvent.click(lockBut)
        expect(lockSpy).toBeCalled()
    });
}) 