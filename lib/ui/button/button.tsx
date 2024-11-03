import { type RecipeVariants } from "@vanilla-extract/recipes";
import { button } from "./button.css";

type VariantProps = RecipeVariants<typeof button>;

export type ButtonProps = VariantProps & {
    label: string;
    onPress?: () => void
}

export function Button(props: ButtonProps) {
    return (
        <button className={button({ intent: props.intent })} onClick={props.onPress}>
            {props.label}
        </button>
    )
}