import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function CartPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) {
    return <SectionTitle text="Empty cart" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="grid gap-4 lg:grid-cols-12 mt-8">
        <div className="lg:col-span-8">
          <CartItemsList cartItem={cartItems} />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
export default CartPage;
