import { formatCurrency } from "../utilities/money";
import { useShoppingCart } from "../context/shoppingcart";
import storeProducts from "../data/data.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = storeProducts.find((p) => p.id === id);
  if (item === undefined) {
    return null;
  }

  return (
    <>
      <div className="storePros">
        <img src={item.imgUrl} />
        <div className="storeCard">
          <div>{item.name}</div>
          <div>Quantity: {quantity >= 1 && <span> {quantity}</span>}</div>
          <div className="price">Price: {formatCurrency(item.price)}</div>
          <div>Item Total: {formatCurrency(item.price * quantity)}</div>
          <div>
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="decreaseQnt"
              title="Decrease Quantity"
            >
              Decrease Quantity
            </button>
          </div>
          <div>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="increaseQnt"
              title="Increase Quantity"
            >
              Increase Quantity
            </button>
          </div>
          <div>
            <button
              title="Remove Item"
              className="removeItem"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
