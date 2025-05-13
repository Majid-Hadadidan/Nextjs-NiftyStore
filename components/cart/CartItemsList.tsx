import { CartItemWithProduct } from "@/utils/types";
import { Card } from "../ui/card";
import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

function CartItemsList({ cartItem }: { cartItem: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItem.map((cartItem) => {
        const { id, amount } = cartItem;
        const { company, id: productId, name, price, image } = cartItem.product;
        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn company={company} name={name} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
