import { SVG_SIZE } from "../constants";

export type SvgSizeType = typeof SVG_SIZE[keyof typeof SVG_SIZE];

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  svgSize?: SvgSizeType;
  isCircle?: boolean;
}
