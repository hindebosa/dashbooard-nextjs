"use client";
import { Form } from "@/app/components/form-provider";
import { RenderForm } from "./components/render-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import SignUpContainer from "./components/sign-up-container";

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Email must be a valid email address!" }),
  password: zod
    .string()
    .min(1, { message: "Password is required!" })
    .min(6, { message: "Password must be at least 6 characters!" }),
});

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

const SignUpView = () => {
  const defaultValues = { email: "", password: "" };

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <SignUpContainer>
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {RenderForm()}
      </Form>
    </SignUpContainer>
  );
};

export default SignUpView;
