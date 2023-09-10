import carticon from "./assets/carticon.svg";

const CartWidget = () => {
    return (
        <div>
            <img src={carticon} alt="Cart" height="20px" width="20px"/>
            0
        </div>
    )
}

export default CartWidget;