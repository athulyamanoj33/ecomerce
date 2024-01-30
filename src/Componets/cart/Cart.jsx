import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { productId } = useParams();
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
      console.log(res.data);
      
    });
  }, [productId]);
  return (
    <div className="bg-gray-300 h-screen">
      <h1 className="text-center pt-5 pb-4 text-5xl font-bold">Shopper Cart</h1>
      <div className=" flex justify-center pt-4">
        <h1>{productId}</h1>

        <table className="border-separate border-spacing-10 border border-slate-600 bg-white ">
          <tr className="text-2xl">
            <th>Product</th>
            <th>Cost</th>
            <th>discount</th>
            <th>Options</th>
          </tr>
          <tr className="text-xl">
            <td>product</td>
            <td>100</td>
            <td>20%</td>
            <td>delete</td>
          </tr>

          <tr className="text-xl">
            <td></td>
            <td></td>
            <td></td>
            <td>
              <h1
                className="uppercase text-base pt-2 pb-2 pr-5 pl-5 border bg-orange-400  rounded-lg font-bold cursor-pointer"
                onClick={() => navigate("/buynow")}
              >
                Place Order
              </h1>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Cart;
