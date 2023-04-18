import { createStyles, TextInput } from "@mantine/core";

const InputField = ({
  value,
  placeholder,
  leftIcon,
  required,
  type = "text",
  label,
  pb,
  component,
  mask,
  borderWhite,
  maxLength,
  onChange,
  form,
  size = "md",
  validateName,
  backgroundColor = "transparent",
  radius = "5px",
  width,
  borderBottom,
  rightSection,
  validate,
  sideText,
  disabled,
  ...props
}) => {
  const useStyles = createStyles((theme, { borderWhite }) => ({
    input: {
      backgroundColor: backgroundColor,
      border: borderWhite
        ? "1px solid rgb(255, 255, 255, 0.2)"
        : "1px solid rgb(0, 0, 0, 0.1)",
      borderBottom: borderBottom,
      color: "black",
    },
    label: {
      // fontSize:'16px'
    },
    description: {
      color: "red",
    },
    icon: {
      "&:hover": {},
    },
  }));

  const { classes, cx } = useStyles({ borderWhite });

  return (
    <TextInput
      disabled={disabled}
      component={component}
      value={value}
      rightSection={rightSection}
      description={sideText}
      //  required={required}
      maxLength={maxLength}
      mask={mask}
      w={width}
      radius={radius}
      withAsterisk={required ? true : false}
      label={label}
      pb={pb}
      type={type}
      size={size}
      onChange={onChange}
      {...form?.getInputProps(validateName)}
      icon={
        leftIcon ? (
          <img
            src={
              new URL(`../../../assets/Icons/${leftIcon}.svg`, import.meta.url)
                .href
            }
          />
        ) : (
          ""
        )
      }
      classNames={{
        input: classes.input,
        visibilityToggle: classes.icon,
        label: classes.label,
        description: classes.description,
      }}
      placeholder={placeholder}
      {...props}
    />
  );
};
export default InputField;
