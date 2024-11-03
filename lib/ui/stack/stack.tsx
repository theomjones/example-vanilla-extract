import { RecipeVariants } from "@vanilla-extract/recipes";
import { stack } from "./stack.css";

type StackProps = RecipeVariants<typeof stack> & {
    children: React.ReactNode;
};

export function Stack(props: StackProps) {
    return (
        <div className={stack({
            direction: props.direction,
            gap: props.gap,
            align: props.align,
        })}>
            {props.children}
        </div>
    )
}