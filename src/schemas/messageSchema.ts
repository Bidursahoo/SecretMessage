import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(6, { message: "Message Should be minimum of 6 characters " })
    .max(500, { message: "Message should be of maximum of 500 character" }),
});
