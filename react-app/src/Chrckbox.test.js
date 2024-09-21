import { Checkbox } from "./Checkbox";
import { fireEvent, render } from "@testing-library/react";

test("Selecting checkbox should change value to true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/unchecked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
});
