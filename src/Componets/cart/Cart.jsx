import { useEffect, useState } from "react";


function Cart() {
  const [cart, setcart] = useState(0);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("carts"));

    setData(getData);
  }, []);

  console.log(data);
 const handleRemove=(id)=>{
  const arr=data.filter((item)=>item.id!==id)
  setData(arr)
 }
  
  
 
  return (
    <div className="bg-gray-300 h-screen">
      <h1 className="text-center pt-5 pb-4 text-5xl font-bold">Cart</h1>
      <div className=" flex justify-center pt-4">
        <table className="border-separate border-spacing-10 border border-slate-600 bg-white ">
          <tr className="text-2xl">
            <th>Product</th>
            <th>Cost</th>
            <th>discount</th>
            <th>Quantity</th>
            <th>Options</th>
          </tr>
          {data.map((data, i) => {
            return (
              <tr key={i} className="text-xl">
               
                <td><img className="h-8 " src={data.thumbnail} alt="" />{data.title}</td>
                <td>{data.price}</td>
                <td>{data.discountPercentage}</td>
                <td>
                  <div className="flex gap-1">
                  <button className="border p-1" onClick={() => setcart(cart - 1)}>
                      -
                    </button>
                    <h1>{cart}</h1>
                    <button className="border p-1" onClick={() => setcart(cart + 1)}>
                      +
                    </button>
                  </div>
                </td>
                <td  onClick={() =>handleRemove(data.id) }
                     >delete</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Cart;
