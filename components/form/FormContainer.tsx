
'use client'
import { actionFunction } from "@/utils/types";
import { useEffect } from "react";
import { toast } from "sonner";
import { useFormState } from 'react-dom';
const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  //useActionState
  const [state, formAction] = useFormState(action, initialState);

  //If the state changes from 'success' to 'error', a toast message will be displayed
  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
