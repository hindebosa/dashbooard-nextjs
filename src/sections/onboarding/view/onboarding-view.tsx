"use client";

import MultiStep from "@/app/components/multi-step/multi-step";
import PersonalInformation from "../components/onboarding-form/personal-information";
import { Form } from "@/app/components/form-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingSchema } from "../schema";
import { useForm } from "react-hook-form";
import ExperienceHistory from "../components/onboarding-form/experience-history";
import Education from "../components/onboarding-form/education";

const OnboardingView = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",

    phoneNumber: "",

    currentSalary: "",
    preferredSalary: "",
  };

  const methods = useForm({
    resolver: zodResolver(OnboardingSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = () => {};
  return (
    <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <MultiStep
        stepsHeadings={[
          "Personal Information",
          "Experience History",
          "Education",
          "Confirmation",
        ]}
        stepsContent={[
          <PersonalInformation />,
          <ExperienceHistory />,
          <Education />,
        ]}
        onSubmit={() => console.log("")}
      />
    </Form>
  );
};

export default OnboardingView;
