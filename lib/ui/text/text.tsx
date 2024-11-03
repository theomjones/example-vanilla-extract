import React from "react";
import {text} from './text.css'
import {RecipeVariants} from "@vanilla-extract/recipes";

export type TextProps = {
    children: React.ReactNode[];
} & RecipeVariants<typeof text>;

export const Text = (props: TextProps) => {
    return React.createElement(
        text(props),
        props.children
    );
}