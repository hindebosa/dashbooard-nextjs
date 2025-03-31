import { Box, Paper, Typography } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

const SignUpContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
      }}
    >
      <Paper sx={{ p: 2, m: 2, bgcolor: "background.paper" }}>
        <Typography variant="h6" align="center" gutterBottom> WELCOME TO RENT-CAR</Typography>
        <Typography variant="subtitle1" align="center" gutterBottom> Sign up</Typography>
        {children}
      </Paper>
    </Box>
  );
};

export default SignUpContainer;
