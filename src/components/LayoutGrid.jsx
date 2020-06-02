import React from "react";

export const Grid = ({ children, maxWidth }) => {
    const styles = {
        maxWidth: `${maxWidth}px`
    };
    return (
        <div style={styles} className="mdc-layout-grid">
            {children}
        </div>
    );
};
export const Row = ({ children }) => {
    return <div className="mdc-layout-grid__inner">{children}</div>;
};
export const Cell = ({ children, phone, tablet, desktop, flex }) => {
    let classes = "mdc-layout-grid__cell",
        styles = {},
        iterables = { phone, tablet, desktop };

    flex
        ? (styles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center"
        })
        : (styles = {});

    for (const property in iterables) {
        classes += ` mdc-layout-grid__cell--span-${
            iterables[property]
            }-${property}`;
    }

    return (
        <div style={styles} className={classes}>
            {children}
        </div>
    );
};
