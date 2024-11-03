import {blue, gray, green, orange, red} from '@radix-ui/colors';

export const colors = {
    blue,
    green,
    orange,
    gray,
    red,
}

export const radii = {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
}

export const baseFontSizeTokens = {
    // Base font size tokens for different typographic levels
    "1": {fontSize: "12px", letterSpacing: "0.0025em", lineHeight: "16px"},
    "2": {fontSize: "14px", letterSpacing: "0em", lineHeight: "20px"},
    "3": {fontSize: "16px", letterSpacing: "0em", lineHeight: "24px"},
    "4": {fontSize: "18px", letterSpacing: "-0.0025em", lineHeight: "26px"},
    "5": {fontSize: "20px", letterSpacing: "-0.005em", lineHeight: "28px"},
    "6": {fontSize: "24px", letterSpacing: "-0.00625em", lineHeight: "30px"},
    "7": {fontSize: "28px", letterSpacing: "-0.0075em", lineHeight: "36px"},
    "8": {fontSize: "35px", letterSpacing: "-0.01em", lineHeight: "40px"},
    "9": {fontSize: "60px", letterSpacing: "-0.025em", lineHeight: "60px"}
};

export const fontWeights = {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700"
}

export const fonts = {
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
    headings: `-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
    code: `'Menlo', 'Consolas (Custom)', 'Bitstream Vera Sans Mono', monospace, 'Apple Color Emoji', 'Segoe UI Emoji'`,
    emphasis: `'Times New Roman', 'Times', serif`,
    quote: `'Times New Roman', 'Times', serif`
}

export const semanticFontSizeTokens = {
    // Semantic tokens for various text elements

    // Main body text for regular content
    body: baseFontSizeTokens["3"],

    // Small text for captions or footnotes
    caption: baseFontSizeTokens["1"],

    paragraph: baseFontSizeTokens["4"],

    // Headings of different levels for structured typography
    heading1: baseFontSizeTokens['9'],
    heading2: baseFontSizeTokens['8'],
    heading3: baseFontSizeTokens['7'],
    heading4: baseFontSizeTokens['6'],
    heading5: baseFontSizeTokens['5'],
    heading6: baseFontSizeTokens['4'],

    // Button text, typically sized for clickable elements
    buttonText: baseFontSizeTokens['2'],

    // Small UI text for labels or meta information
    label: baseFontSizeTokens['1']
};

export const space = {
    // Extra-small spacing for subtle adjustments or very small gaps
    xs: "4px",

    // Small spacing for compact elements, minor padding/margin
    sm: "8px",

    // Medium-small spacing, useful within components
    ms: "12px",

    // Medium spacing for general padding and margins
    md: "16px",

    // Medium-large spacing for comfortable layout or grouping elements
    ml: "24px",

    // Large spacing for separating major sections or components
    lg: "32px",

    // Extra-large spacing for generous space between sections
    xl: "40px",

    // Huge spacing, typically for large layout gaps
    xxl: "48px",

    // Massive spacing for full section separation
    xxxl: "64px"
};

export const shadows = {
    // Small, subtle shadow for fine details or very light elevation
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",

    // Small shadow for slightly elevated elements like buttons or inputs
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",

    // Medium shadow for cards or other container components
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",

    // Large shadow for prominent elevation, such as modal or header sections
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",

    // Extra-large shadow for strong elevation effects, good for dropdowns or floating elements
    xl: "0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04)",

    // Double extra-large shadow for highest elevation, suitable for large modals or drawer elements
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)"
};