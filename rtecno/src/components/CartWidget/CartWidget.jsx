import {BsCartCheck} from "react-icons/bs"
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div>
            <BsCartCheck fontSize={"1.7rem"} color='white'/>
            <Badge bg="danger">0</Badge>
        </div>
    )
}

export default CartWidget 