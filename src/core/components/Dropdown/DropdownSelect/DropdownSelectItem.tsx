import clsx from "clsx";
import { forwardRef } from "react";

import DropdownBase from "../DropdownBase";
import { DropdownSelectItemProps } from "./types";

const DropdownSelectItem = forwardRef((
    {
      className,
      children,
      checked,
      ...props
    }: DropdownSelectItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => {

  return (
    <DropdownBase.Item
      ref = {ref}
      className = {clsx("text-gray-08 text-body-01-regular hover:font-bold", checked && "font-bold", className)}
      {...props}
    >
      {children}
    </DropdownBase.Item>
  );
});

export default DropdownSelectItem;
