import {createTheme, createThemeContract, globalStyle} from "@vanilla-extract/css";

import {
    colors,
    fonts,
    fontWeights,
    radii,
    semanticFontSizeTokens,
    shadows,
    space
} from "./tokens.css";

export const contract = createThemeContract({
    fonts: {
        ...fonts,
    },
    fontWeights: {
        ...fontWeights,
    },
    colors: {
        brand: "",
        brandLight: "",
        secondary: "",
        secondaryLight: "",
        surface: "",
        destructive: "",
    },
    shadows: {
        ...shadows,
    },
    radii,
    fontSizes: {
        ...semanticFontSizeTokens,
    },
    space: {
        ...space,
    },
    font: {
        headings: "",
        body: "",
    },
})

export const sans = createTheme(contract, {
    colors: {
        brand: colors.blue.blue10,
        brandLight: colors.blue.blue1,
        secondary: colors.gray.gray10,
        secondaryLight: colors.gray.gray1,
        surface: "white",
        destructive: colors.red.red10,
    },
    fontWeights,
    fonts,
    space,
    shadows,
    fontSizes: semanticFontSizeTokens,
    radii,
    font: {
        body: "sans-serif",
        headings: "sans-serif",
    },
})

export const mono = createTheme(contract, {
    space,
    shadows,
    fonts: {
        headings: fonts.code,
        code: fonts.code,
        emphasis: fonts.emphasis,
        quote: fonts.quote,
        body: fonts.code,
    },
    colors: {
        brand: colors.green.green10,
        brandLight: colors.green.green1,
        secondary: colors.gray.gray10,
        secondaryLight: colors.gray.gray1,
        surface: "white",
        destructive: colors.red.red10,
    },
    fontWeights,
    fontSizes: semanticFontSizeTokens,
    radii,
    font: {
        body: "monospace",
        headings: "sans-serif",
    },
})

export type ThemeKey = 'mono' | 'sans';

globalStyle('html, body', {
    margin: 0,
    fontFamily: contract.fonts.body,
})

globalStyle('code, pre', {
    fontFamily: contract.fonts.code,
})

globalStyle('blockquote', {
    fontFamily: contract.fonts.quote,
})

globalStyle('em', {
    fontFamily: contract.fonts.emphasis,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
    fontFamily: contract.fonts.headings,
})