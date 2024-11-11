import { formatCurrency } from "../utilities/money";
import storeProducts from "../data/data.json";
import { CartItem } from "./cartItems";
import { useShoppingCart } from "../context/shoppingcart";
import { useEffect } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
};

function openCart(isOpen: boolean) {
  document.body.style.backgroundColor = isOpen
    ? "rgba(100, 100, 100, 0.8)"
    : "";
  //darkslategray
  const mainContent = document.querySelector(".container");
  if (mainContent) {
    mainContent.classList.toggle("dimmed", isOpen);
  }
  const navContent = document.querySelector(".div-con");
  if (navContent) {
    navContent.classList.toggle("dimmed", isOpen);
  }
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { cartItems, closeCart } = useShoppingCart();

  useEffect(() => {
    openCart(isOpen);
    return () => openCart(false);
  }, [isOpen]);
  return (
    <>
      <div
        className={`cart-sidebar ${isOpen ? "open" : ""}`}
        onClick={closeCart}
      >
        <div className="cart-content" onClick={(e) => e.stopPropagation()}>
          <header className="cartHeader">
            <h2>Your Cart</h2>
            <button
              onClick={closeCart}
              className="close-button"
              title="Close Cart"
            >
              X
            </button>
          </header>
          <div className="cart-body">
            {cartItems.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </div>
          <div className="cartTotal">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeProducts.find((p) => p.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
