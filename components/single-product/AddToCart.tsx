"use client";
import { useState } from "react";
import SelectProductAmount, { Mode } from "./SelectProductAmount";
import { useAuth } from "@clerk/nextjs";
import FormContainer from "../form/FormContainer";
import { ProductSignInButton, SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="add to card" className="mt-8"/>
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
      
    </div>
  );
}
export default AddToCart;
