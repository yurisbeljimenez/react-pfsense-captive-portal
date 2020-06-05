import React, { useEffect, useRef } from "react";
import { MDCTextField } from '@material/textfield';

export const TextField = ({ children, label, style, filled, outlined }) => {
    let classes = "mdc-text-field"

    if (filled) {
        classes += " mdc-text-field--filled"
    }
    if (outlined) {
        classes += " mdc-text-field--outlined"

    }

    const element = useRef()
    const component = useRef()

    useEffect(() => {
        component.current = new MDCTextField(element.current);
    }, [])

    return (
        <label ref={ref => element.current = ref} className={classes} style={style}>
            {children}
            {filled ? <><span className="mdc-text-field__ripple"></span>
                <span className="mdc-floating-label" id="my-label-id">{label}</span>
                <span className="mdc-line-ripple"></span></> : null}
            {outlined ? <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                    <span className="mdc-floating-label" id="my-label-id">{label}</span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
            </span> : null}
        </label>
    )
}

export const Input = ({ name, id, type, style, required, disabled, value, onChange }) => {
    return <input value={value} onChange={onChange} className="mdc-text-field__input" type={type} aria-labelledby="my-label-id" style={style} name={name} id={id} required={required} disabled={disabled} />
}