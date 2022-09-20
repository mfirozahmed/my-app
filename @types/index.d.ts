interface DataType {
    id: string;
    name?: string;
    value: string | number;
    label?: string;
    description?: string;
    disabled?: boolean;
    hint?: string;
    children?: React.ReactNode;
}

interface OtherPropsType {
    containerStyle?: "block" | "inline";
    size?: "sm" | "md" | "lg" | "xl";
    boxBorderStyle?: "default" | "none" | "rounded";
    boxColor?: "default" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    alignment?: "default" | "right" | "top" | "bottom";
    pattern?: "default" | "button";

    componentClass?: string;
    questionLabelClass?: string;
    containerClass?: string;
    itemClass?: string;
    inputClass?: string;
    buttonClass?: string;
    labelClass?: string;
    hintClass?: string;
    hintIconClass?: string;
    hintTextClass?: string;
    descriptionClass?: string;

    question?: string;
    questionHint?: string;
    hintIcon?: React.ReactNode;
}