import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = TextFieldProps & {
  name: string;
  size?: "small" | "medium";
};

const RHFTextField = ({
  name,
  type,
  helperText,
  size = "small",
  ...other
}: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          fullWidth
          size={size}
          value={type === "number" && field.value === 0 ? "" : field.value}
          error={!!error}
          helperText={error?.message || helperText}
          inputProps={{
            autoComplete: "off",
          }}
          {...other}
        />
      )}
    />
  );
};

export default RHFTextField;
