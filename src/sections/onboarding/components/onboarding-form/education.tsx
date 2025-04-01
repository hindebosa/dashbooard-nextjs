import RHFTextField from "@/app/components/hook-forms/RHFTextField";
import { Box } from "@mui/material";
import PaperContainer from "../paper-container";

const Education = () => {
  return (
    <PaperContainer>
      <div>
        <RHFTextField
          name="nameOfInstitution"
          type="text"
          label="Name Of Institution"
          fullWidth
          size="small"
        />
        <RHFTextField
          name="companyName"
          type="text"
          label="Company Name"
          placeholder="Middle Name (optional)"
          fullWidth
          size="small"
        />
      </div>
    </PaperContainer>
  );
};

export default Education;
