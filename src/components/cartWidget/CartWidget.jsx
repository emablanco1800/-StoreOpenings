// import {BsCartFill} from "react-icons/bs"
import { BsCart2 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
const CartWidget = ({counter}) => {
    return(
        <>
        <Badge bg="danger">{counter}</Badge>
        <BsCart2  color="pink" fontSize={'1.5rem'}/>
        
        </>
    )
}
export default CartWidget