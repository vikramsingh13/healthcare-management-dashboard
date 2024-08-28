"use client";

import { useState } from "react";

// zod is a library used for data validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Import UI components for the form
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// Import the custom form field
import CustomFormField from "@/components/CustomFormField";
// Import the SubmitButton component to be used as custom submit button
import SubmitButton from "@/components/SubmitButton";

// Import the UserFormValidation schema for the sign up form validation
import { UserFormValidation } from "@/lib/validation";
// Import the router hook from next/navigation to help with redirection
import { useRouter } from "next/navigation";

// Define enum for the form field types to be used by the CustomFormField component
export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  // useRouter is coming from next/navigation.
  // router will be used for user creation and redirection.
  const router = useRouter();
  // Define state for loading state of the form.
  // This will be used to show a loading spinner for the submit button and such.
  const [isLoading, setIsLoading] = useState(false);
  // Define the form using useForm hook from react-hook-form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    // Use zodResolver to validate the form using the formSchema.
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // createUser function that will return a promise.
  const createUser = async (userData: any) => {
    return new Promise((resolve, reject) => {
      // Simulating an API call to create a user.
      setTimeout(() => {
        resolve(userData);
      }, 2000);
    });
  }

  // Submit handler that will be called when the form is submitted.
  // User will be created using the form values and on success, user will be redirected to the patient registration page.
  const onSubmit = async(values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    console.log(values);

    // Create the user object from the form values
    try {
      // Destructure the form values into the userData object
      const { name, email, phone } = values;
      

      // Create the user using createUser function that handles the API calls
      const user = await createUser({ name, email, phone });
      const userId = "adsfafasfas";
      // Redirect the user to the user profile page
      if (user) {
        // Redirect the user to the patient registration page with the user id
        router.push(`/patients/${userId}/register`);
      }

      // Set the loading state to false after user creation in case the redirection fails
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome!</h1>
          <p className="text-dark-700">Signup to get started with us.</p>
        </section>
        {/* Use the CustomFormField component to render the name input field */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        {/* Use the CustomFormField component to render the email input field */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="example@email.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        {/* Use the CustomFormField component to render the phone input field */}
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placehoolder="555-555-5555"
        />
        <SubmitButton isLoading={isLoading}>Sign Up</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
