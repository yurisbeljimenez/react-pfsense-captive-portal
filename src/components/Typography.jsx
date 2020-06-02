import React from "react";

export const Headline1 = ({ children }) => (
    <h1 className="mdc-typography--headline1">{children}</h1>
);
export const Headline2 = ({ children }) => (
    <h2 className="mdc-typography--headline2">{children}</h2>
);
export const Headline3 = ({ children }) => (
    <h3 className="mdc-typography--headline3">{children}</h3>
);
export const Headline4 = ({ children }) => (
    <h4 className="mdc-typography--headline4">{children}</h4>
);
export const Headline5 = ({ children }) => (
    <h5 className="mdc-typography--headline5">{children}</h5>
);
export const Headline6 = ({ children }) => (
    <h6 className="mdc-typography--headline6">{children}</h6>
);
export const Subtitle1 = ({ children }) => (
    <h6 className="mdc-typography--subtitle1">{children}</h6>
);
export const Subtitle2 = ({ children }) => (
    <h6 className="mdc-typography--subtitle2">{children}</h6>
);
export const Body1 = ({ children }) => (
    <p className="mdc-typography--body1">{children}</p>
);
export const Body2 = ({ children }) => (
    <p className="mdc-typography--body2">{children}</p>
);
export const Button = ({ children }) => (
    <div>
        <p className="mdc-typography--button">{children}</p>
    </div>
);
export const Caption = ({ children }) => (
    <div>
        <p className="mdc-typography--caption">{children}</p>
    </div>
);
export const Overline = ({ children }) => (
    <div>
        <p className="mdc-typography--overline">{children}</p>
    </div>
);
