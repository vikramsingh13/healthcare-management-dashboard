"use client";

// zod is a library used for data validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Import UI components for the form
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

// Import the custom form field
import CustomFormField from "@/components/CustomFormField";

// Define enum for the form field types to be used by the CustomFormField component
export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

// Define the form schema using zod library
const formSchema = z.object({
  // We want to validate the username field and make sure it is at least 3 characters long
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long.",
  }),
});

const PatientForm = () => {
  // Define the form using useForm hook from react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    // Use zodResolver to validate the form using the formSchema
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome!</h1>
          <p className="text-dark-700">Signup to get started with us.</p>
        </section>
        <CustomFormField
          fieldType = {FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"

        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
