import { Checkbox } from "./Checkbox";
import { fireEvent, render } from "@testing-library/react";

test("Selecting checkbox should change value to true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/unchecked/); // here it is not
    // returning the text but it is returning the label that is associated with
    // the text
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
});


/*

In this context, checkbox is not just the return of a
regex operation; it is the actual checkbox input element
in the DOM. When you call getByLabelText, you're using
the regex to locate the label, and then the Testing Library
finds the associated input element (the checkbox).
The fireEvent function operates on this element, simulating
the interaction a user would have when they click the checkbox.

*/