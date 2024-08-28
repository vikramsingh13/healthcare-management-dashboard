// Import the UI components needed for the SubmitButton component
import { Button } from "@/components/ui/button";

// Import the Image component from next/image
import Image from "next/image";

// SubmitButtonProps interface to define the props for the SubmitButton component.
interface SubmitButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

//
const SubmitButton = (props: SubmitButtonProps) => {
  const { isLoading, className, children } = props;
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4 ">
          <Image 
            src="/assets/icons/loader.svg"
            alt="Button Loader Image"
            height={24}
            width={24}
            className="animate-spin"
          />
        </div>
      ) : 
        children
      }
    </Button>
  );
};

export default SubmitButton;
