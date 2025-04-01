import { Box, Paper } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const PaperContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Paper elevation={2} sx={{ padding: 2 }}>
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}>
        {children}
      </Box>
    </Paper>
  );
};

export default PaperContainer;
