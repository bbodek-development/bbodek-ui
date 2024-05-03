import { HTMLAttributes } from "react";

import { SectionProps } from "@/core/components/Section/types";
import { ModalBaseProps } from "../../ModalBase/types";

export interface ModalPopUpProps extends Pick<SectionProps<"section">, "hasRounded">, Pick<ModalBaseProps, "target" | "isOpen" | "onClose">, HTMLAttributes<HTMLElement> {}
