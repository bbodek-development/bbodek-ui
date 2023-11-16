import { SelectHTMLAttributes } from "react";
import { InputBaseProps } from "../../InputBase/types";

export interface InputSelectProps
extends SelectHTMLAttributes<HTMLSelectElement>,
          Pick<InputBaseProps<"div">, "label" | "rootClassName"> {
            placeholder?: string;
            options: React.ReactNode[]
          }
