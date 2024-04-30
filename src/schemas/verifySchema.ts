import { z } from "zod";

export const verificationSchema = z.object({
  code: z.string().min(6, { message: "Code Must be of 6 character minimum" }),
});
