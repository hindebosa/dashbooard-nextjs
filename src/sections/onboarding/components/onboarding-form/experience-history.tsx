import RHFRichText from "@/app/components/hook-forms/RHFRichText";
import RHFTextField from "@/app/components/hook-forms/RHFTextField";
import { Box, Button, Typography } from "@mui/material";
import PaperContainer from "../paper-container";

const ExperienceHistory = () => {
  return (
    <PaperContainer>
      <div>
        <RHFTextField
          name="positionTitle"
          type="text"
          label="Position Title"
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
      <div>
        {/* <DatePicker label="Basic date picker" />
        <DatePicker label="Basic date picker" /> */}
      </div>
      <div>
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Experience Description
          </Typography>
          <RHFRichText name="experience" />
        </Box>
      </div>
      <Button>Add </Button>
    </PaperContainer>
  );
};

export default ExperienceHistory;
