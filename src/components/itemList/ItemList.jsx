import Item from "../item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
    return(
        <div className="product-list-container">
            {productos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}
export default ItemList