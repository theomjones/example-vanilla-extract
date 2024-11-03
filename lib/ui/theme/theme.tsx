export type ThemeProps = {
    theme: string;
    children: React.ReactNode;
}

export const Theme = (props: ThemeProps) => {
    return (
        <div className={props.theme}>
            {props.children}
        </div>
    )
}