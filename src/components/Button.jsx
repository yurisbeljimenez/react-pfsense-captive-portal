import React from "react";

export const Button = ({
    type,
    children,
    raised,
    unelevated,
    outlined,
    icon,
    leadingIcon,
    trailingIcon,
    style,
    onClick
}) => {
    let classes = "mdc-button";

    if (raised) {
        classes += " mdc-button--raised";
    } else if (unelevated) {
        classes += " mdc-button--unelevated";
    } else if (outlined) {
        classes += " mdc-button--outlined";
    }

    return (
        <button type={type} className={classes} style={style} onClick={onClick}>
            <div className="mdc-button__ripple" />
            {icon && leadingIcon ? (
                <i className="material-icons mdc-button__icon" aria-hidden="true">
                    {icon}
                </i>
            ) : null}
            <span className="mdc-button__label">{children}</span>
            {icon && trailingIcon ? (
                <i className="material-icons mdc-button__icon" aria-hidden="true">
                    {icon}
                </i>
            ) : null}
        </button>
    );
};
