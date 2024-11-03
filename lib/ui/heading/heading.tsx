import React from "react";
import {heading} from './heading.css'

export type HeadingProps = {
    children: React.ReactNode;
    variant: keyof typeof heading;
}

export const Heading = (props: HeadingProps) => {
    return React.createElement(
        props.variant,
        {className: heading[props.variant]},
        props.children
    );
}