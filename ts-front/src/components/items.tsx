import { formatCurrency } from "../utilities/money";
import { useShoppingCart } from "../context/shoppingcart";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="Card">
        <img src={imgUrl} />
        <div className="CardBody">
          <div className="CardTitle">
            <h3>{name}</h3>
            <div className="CardPrice">{formatCurrency(price)}</div>
          </div>
          <div className="cardQuantity">
            {quantity === 0 ? (
              <button
                className="addItem"
                title="Add Item"
                onClick={() => increaseCartQuantity(id)}
              >
                + Add To Cart
              </button>
            ) : (
              <>
                <div className="QuantityLO">
                  <div className="QuantityButtons">
                    <button
                      onClick={() => decreaseCartQuantity(id)}
                      className="decreaseQnt"
                      title="Decrease Quantity"
                    >
                      -
                    </button>
                    <div className="CartQuantity">
                      <span>{quantity}</span> In Your Cart
                    </div>
                    <button
                      onClick={() => increaseCartQuantity(id)}
                      className="increaseQnt"
                      title="Increase Quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="removeItem"
                  onClick={() => removeFromCart(id)}
                  title="Remove From Cart"
                >
                  Remove From Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
