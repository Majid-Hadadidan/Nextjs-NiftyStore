"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { LuTrash2 } from "react-icons/lu";
import { PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { SignInButton } from '@clerk/nextjs';
// import { FaRegHeart, FaHeart } from 'react-icons/fa';

//submitButton
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

//button for admin/prodcuts/page.tsx for edit and delete button
type actionType = "edit" | "delete";

export function IconButton({ actionType }: { actionType: actionType }) {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <PenSquare />;

      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type ${never}`);
    }
  };
  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <Loader2 className=" animate-spin" /> : renderIcon()}
    </Button>
  );
}

//if user don't enter  in site , encounter the modal for login
export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

//favorite
export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className=" p-2 cursor-pointer"
    >
      {pending ? (
        <Loader2 className=" animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

//cart
export const ProductSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button type='button' size='default' className='mt-8'>
        Please Sign In
      </Button>
    </SignInButton>
  );
};
