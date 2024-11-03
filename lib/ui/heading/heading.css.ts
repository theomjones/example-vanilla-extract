import {styleVariants} from "@vanilla-extract/css";
import {contract} from "@lib/theme/main.css.ts";


export const heading = styleVariants({
    h1: {
        ...contract.fontSizes.heading1,
        fontWeight: "bold",
    },
    h2: {
        ...contract.fontSizes.heading2,
        fontWeight: "bold",
    },
    h3: {
        ...contract.fontSizes.heading3,
        fontWeight: "bold",
    },
    h4: {
        ...contract.fontSizes.heading4,
        fontWeight: "medium",
    },
    h5: {
        ...contract.fontSizes.heading5,
        fontWeight: "medium",
    },
    h6: {
        ...contract.fontSizes.heading6,
        fontWeight: "medium",
    },
})
