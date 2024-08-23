"use client";

// Import UI components needed for the custom form field
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Import Control type from react-hook-form to be used by the CustomFormFieldProps
import { Control } from "react-hook-form";

// Import FormFieldType enum to be used by the CustomFormFieldProps
import { FormFieldType } from "@/components/forms/PatientForm";

// Define the props for the CustomFormField component
interface CustomFormFieldProps {
  fieldType: FormFieldType;
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormate?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  // renderSkeleton prop to render skeleton loader function that takes a field of type any as an argument and returns a React node
  // We will typically use this show a loading state or similar states if needed
  renderSkeleton?: (field: any) => React.ReactNode;
}

// RenderField component that takes a field of type any as an argument and returns a React node of appropriate input field type
const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  return <Input type="text" placeholder="Full Name" />;
};

// CustomFormField component
const CustomFormField = (props: CustomFormFieldProps) => {
  // Destructure the props object for easier access
  const { fieldType, control, name, label, ...rest } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          {/* Render the correct input field type based on the fieldType */}
          <RenderField field={field} props={props} />

          {/* Render the error message if there is an error */}
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
