import { z } from 'zod';

export const createStudentSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    city: z.string().optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
  }),
});

export const updateStudentSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    email: z.string().email("Invalid email").optional(),
    city: z.string().optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
  }),
});
