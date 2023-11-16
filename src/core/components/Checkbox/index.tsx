import clsx from "clsx";
import { forwardRef, useId } from "react";

import { CheckCircle, CheckSquare } from "@phosphor-icons/react/dist/ssr";
import Typography from "../Typography";
import { CHECKBOX_SVG_SIZE, SVG_SIZE } from "./constants";
import { CheckboxProps } from "./types";

const Checkbox = forwardRef((
    {
      label,
      svgSize = SVG_SIZE["SIZE_24"],
      isCircle = false,
    }: CheckboxProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();
  const RectangleCheckbox =
    <CheckSquare size = "100%" weight = "fill" fill = "#DBE1ED"/>;
  const CircleCheckbox =
    <CheckCircle size = "100%" weight = "fill" fill = "#DBE1ED"/>;
  const svg = !isCircle ? RectangleCheckbox : CircleCheckbox;

  return (
    <label htmlFor = {id} className = {clsx("cursor-pointer", label && "flex items-center gap-2.5")}>
      <input ref = {ref} id = {id} type = "checkbox" className = "peer sr-only"/>
      <div className = {`${CHECKBOX_SVG_SIZE[svgSize]} peer-checked:[&>svg>path]:fill-primary-03`}>
        {svg}
      </div>
      {label && <Typography text = {label} />}
    </label>
  );
});

export default Checkbox;