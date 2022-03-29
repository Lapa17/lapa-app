import React from "react";
import {create, ReactTestInstance} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'hey'} updateStatus={()=>'as'} />);
        const instance:any = component.getInstance();
            expect(instance.state.status).toBe('hey');

    });
    test("span should be displayed", () => {
        const component = create(<ProfileStatus status={'hey'} updateStatus={()=>'as'} />);
        const root:any = component.root;
        const span = root.findByType('span')
        expect(span).not.toBeNull();

    });
    test("input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'hey'} updateStatus={()=>'as'} />);
        const root:any = component.root;

        expect(()=> {
            const input = root.findByType('input')
        }).toThrow();

    });
    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status={'hey'} updateStatus={()=>'as'} />);
        const root:any = component.root;
        const span = root.findByType('span')
        expect(span.children[0]).toBe('hey');

    });
    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status={'hey'} updateStatus={()=>'as'} />);
        const root:any = component.root;
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input).not.toBeNull();
        expect(input.props.value).toBe('hey')
    });
    test("callback should ", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'hey'} updateStatus={mockCallback} />);
        const instance:any = component.getInstance();
        instance.offEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback.mock.calls[0][0]).toBe('hey');

    });

});