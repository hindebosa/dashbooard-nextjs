import MUIRichTextEditor from "mui-rte";
import { Controller, useFormContext } from "react-hook-form";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import { createTheme, TextFieldProps } from "@mui/material";
import { FC } from "react";
import { ThemeProvider } from "@mui/styles";
type Props = TextFieldProps & {
  name: string;
};

const RHFRichText: FC<Props> = ({ name, type, helperText, ...other }) => {
  const { control } = useFormContext();

  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ThemeProvider theme={myTheme}>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",

              backgroundColor: "#fff",
              height: "200px",
            }}
          >
            <MUIRichTextEditor
              label="Type something here..."
              field={field}
              type={type}
              fullWidth
              style={{
                width: "100%",
                border: "1px solid #000",
                backgroundColor: "#000",
                borderRadius: "5px",
                padding: "10px",
              }}
              error={!!error}
              helperText={helperText}
              {...other}
            />
          </div>
        </ThemeProvider>
      )}
    />
  );
};

export default RHFRichText;
