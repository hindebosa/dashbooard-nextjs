import RHFTextField from "@/app/components/hook-forms/RHFTextField";
import { Button, Stack } from "@mui/material";

export const RenderForm = () => {
  return (
    <Stack spacing={2}>
      <RHFTextField name="email" type="email" label="Email" />
      <RHFTextField
        name="email"
        type="password"
        label="Password"
        sx={{
          width: 400,
        }}
      />
      <RHFTextField
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        sx={{
          width: 400,
        }}
        inputProps={{}}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ borderRadius: 10 }}
      >
        Submit
      </Button>
    </Stack>
  );
};
