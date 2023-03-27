import { Icon } from "@iconify/react";
import "../../App.css"

function CartWidget() {
    return (
        <div className="cart-widget carrito">
            <Icon icon="material-symbols:shopping-cart" />
            <span className="cart-count numeroCarrito">1</span>
        </div>
    );
}

export default CartWidget;