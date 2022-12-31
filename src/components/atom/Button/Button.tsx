export interface IButtonProps {
    children: any;
    className?: string;
    btnType:
        | "primary"
        | "secondary"
        | "accent"
        | "ghost"
        | "success"
        | "error"
        | "link";
    onClick?: any;
}

let buttonAppearanceType = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost",
    success: "btn-success",
    error: "btn-error",
    link: "btn-link",
};

export const Button = ({
                           children,
                           className = "",
                           btnType = "primary",
                           ...props
                       }: IButtonProps) => {
    let buttonClasses: string[] | string = [];
    if (btnType) buttonClasses.push(buttonAppearanceType[btnType]);
    buttonClasses = buttonClasses.join(" ");
    return (
        <button className={`btn ${buttonClasses}  ${className}`} {...props}>
            {children}
        </button>
    );
};