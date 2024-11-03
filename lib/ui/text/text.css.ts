import {sprinkles} from "@lib/theme/sprinkles.css.ts";
import {recipe} from "@vanilla-extract/recipes";


export const text = recipe(({
    defaultVariants: {
        size: 'regular',
    },
    variants: {
        size: {
            regular: sprinkles({
                fontSize: 'body',
            }),
        }
    },
}))

