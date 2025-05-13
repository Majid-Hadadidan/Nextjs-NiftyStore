"use client";

import { useState } from "react";
import SelectProductAmount, {
  Mode,
} from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";
import { toast } from "sonner";

function ThirdColumn({ id, quantity }: { id: string; quantity: number }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLaoding] = useState(false);

  async function handleAmountChange(value: number) {
    setIsLaoding(true);
    toast("calculating.....");
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(amount);
    toast(result.message);
    setIsLaoding(false);
  }

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4 w-full" text="remove" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
