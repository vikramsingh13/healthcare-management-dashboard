// zod is a library used for data validation for our forms.
import { z } from "zod";

// Define the form schema using zod library.
const UserFormValidation = z.object({
  // We want to validate the name field and make sure it is at least 3 characters long.
  name: z
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .max(50, "Username must be at most 50 characters long."),
  // We want to validate the email field and make sure it is a valid email address, e.g. example@email.com.
  email: z.string().email("Please enter a valid email address."),
  // We want to validate the phone field and make sure it is a valid phone number, e.g. +1234567890.
  // Niue country code is +683 and the length of the phone number is 4 ( or 7 including the country code).
  // So, the regex makes sure the phone number is at least 7 characters long and at most 15 characters long.
  phone: z
    .string()
    .refine((phone) => /^\+\d{7,15}$/.test(phone), "Invalid phone number"),
});

export { UserFormValidation };
