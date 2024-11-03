
import { contract } from "@lib/theme/main.css";
import { sprinkles } from "@lib/theme/sprinkles.css";
import { recipe } from "@vanilla-extract/recipes";

export const stack = recipe({
    base: sprinkles({
        display: 'flex',
    }),
    variants: {
        align: {
            start: {
                alignItems: 'flex-start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'flex-end',
            },
        },
        gap: {
            normal: {
                gap: contract.space.md,
            },
        },
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
        },
    },
})