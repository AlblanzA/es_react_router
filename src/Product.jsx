import { useParams } from "react-router-dom";

export function Product(){
    const {id} = useParams()

return (
    <div>
        <h3>Product</h3>
        <Link to="/products">Back</Link>
    </div>
)
}