import RHFTextField from "@/app/components/hook-forms/RHFTextField";
import PaperContainer from "../paper-container";

const PersonalInformation = () => {
  return (
    <PaperContainer>
      <div>
        <RHFTextField
          name="firstName"
          type="text"
          label="First Name"
          fullWidth
          size="small"
        />
        <RHFTextField
          name="middleName"
          type="text"
          label="Middle Name"
          placeholder="Middle Name (optional)"
          fullWidth
          size="small"
        />
      </div>
      <div>
        <RHFTextField
          name="lastName"
          type="text"
          label="Last Name"
          fullWidth
          size="small"
        />
        <RHFTextField
          name="phoneNumber"
          type="text"
          label="Phone Number"
          fullWidth
          size="small"
        />
      </div>
      <div>
        <RHFTextField
          name="preferredSalary"
          type="text"
          label="Preferred Salary"
          fullWidth
          size="small"
        />
        <RHFTextField
          name="preferredSalary"
          type="text"
          label="Preferred Salary"
          fullWidth
          size="small"
        />
      </div>
    </PaperContainer>
  );
};

export default PersonalInformation;
