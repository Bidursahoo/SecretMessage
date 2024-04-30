import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "Minimum of 2 Characters required for username")
  .max(25, "Maximum of 25 character is required for username")
  .regex(/^[a-zA-Z0-9]*$/, "No Special characters are allowed");
export const emailValidation = z
  .string()
  .email({ message: "Please enter a valid email address" });

export const passwordValidation = z
  .string()
  .min(8, "Minimum of 8 characters required for password");

export const signUpSchema = z.object({
  username: userNameValidation,
  email: emailValidation,
  password: passwordValidation,
});
