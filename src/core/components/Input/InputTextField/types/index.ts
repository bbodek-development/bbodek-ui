import { InputBaseProps } from "../../InputBase/types";
import { UseInputProps } from "../../hooks/useInput";

export interface InputTextFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
           Pick<InputBaseProps<"div">, "rootClassName" | "label" | "labelColor" | "borderColor" | "error">,
           Pick<UseInputProps, "regCallback"> {}
