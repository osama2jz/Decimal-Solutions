import { Button as Btn, useMantineTheme } from "@mantine/core";
import React from "react";

function Button({
  color = "primary",
  label,
  radius,
  variant,
  size,
  onClick,
  type,
  iconWidth = "20px",
  submit,
  border,
  validate,
  children,
  form,
  disabled,
  loading,
  width,
  leftIcon,
  ml,
  flex,
  ...props
}) {
  const theme = useMantineTheme();
  return (
    <Btn
      ml={ml}
      loading={loading}
      disabled={disabled}
      w={width}
      variant={color === "primary" ? "filled" : "outline"}
      style={{ border: border }}
      radius={radius}
      size={size}
      leftIcon={
        leftIcon ? (
          <img
            src={
              new URL(`../../../assets/${leftIcon}.svg`, import.meta.url)
                .href
            }
            alt="icon"
            width={iconWidth}
          />
        ) : (
          ""
        )
      }
      type={type}
      onClick={onClick}
      onSubmit={submit}
      {...form?.getInputProps(validate)}
      {...props}
      styles={{
        root: {
          flex: flex,
        },
      }}
    >
      {label}
    </Btn>
  );
}

export default Button;
