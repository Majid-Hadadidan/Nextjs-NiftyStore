import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { fetchCartItems } from "@/utils/actions";

async function CartButton() {
  const numItemInCart = await fetchCartItems()
  return (
    <Button
      size="icon"
      variant="secondary"
      className="flex relative justify-center items-center"
      asChild
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className=" bg-primary text-white h-6 w-6 border absolute -top-3 -right-3 flex items-center justify-center rounded-full text-xs">
          {numItemInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
