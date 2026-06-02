import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),

  email: z.string().email("Please enter a valid email"),

  phone: z.string().optional(),
  businessName: z.string().optional(),
  industry: z.string().optional(),
  website: z.string().optional(),
  services: z.array(z.string()),

  message: z.string().min(4, "Tell us birefly about what you want"),
});

export type Consultation = z.infer<typeof consultationSchema>;
