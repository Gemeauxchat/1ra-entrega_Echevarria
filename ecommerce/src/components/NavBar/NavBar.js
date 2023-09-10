import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="">
            <h3 className="text-success-emphasis">Tienda de bebidas</h3>
            <div>
                <button type="button" class="btn btn-primary">Gaseosas</button>
                <button type="button" class="btn btn-primary">Vinos</button>
                <button type="button" class="btn btn-primary">Espirituosas</button>
            </div>
            <CartWidget/>
        </nav>
    )
      
}

export default NavBar;