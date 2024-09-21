import { useReducer } from "react";

export function Checkbox() {
    const [checked, setChecked] = useReducer(
        (prev) => !prev,
        false
    );

    return (
        <>
            <label htmlFor="checked">
                {checked ? "checked" : "unchecked"}
            </label>
            <input
                id="checked"
                type="checkbox"
                checked={checked}
                onChange={setChecked}
            />
        </>
    );
}
