import {contract} from "@lib/theme/main.css";
import {sprinkles} from "@lib/theme/sprinkles.css";
import {recipe} from "@vanilla-extract/recipes";

export const button = recipe({
    base: [sprinkles({
        paddingX: 'md',
        paddingY: 'sm',
    }), {
        ...contract.fontSizes.buttonText,
        transition: "all 0.2s",
        cursor: "pointer",
        appearance: "none",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: contract.radii.full,
        fontFamily: contract.font.body,
        fontWeight: contract.fontWeights.medium,
        ':hover': {
            opacity: 0.9,
            transform: "translateY(-1px)",
        },
    }],
    variants: {
        intent: {
            primary: sprinkles({
                background: 'brand',
                color: 'brandLight'
            }),
            secondary: sprinkles({
                background: 'secondary',
                color: 'secondaryLight'
            }),
            destructive: {
                borderColor: contract.colors.destructive,
                color: contract.colors.destructive,
                background: contract.colors.surface,
            },
        },
    }
})