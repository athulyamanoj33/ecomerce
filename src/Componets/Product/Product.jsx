import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";

function Product() {
  const [single, setSingle] = useState(null);
  const [focusImage, setFocusImage] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
      console.log(res.data);
      setSingle(res.data);
      setLoad(false);
    });
  }, [productId]);

  return  load? <Loading/>:(
    <div className="flex gap-8 p-10 w-full">
      <div className=" flex flex-col gap-3 h-full w-[20%]">
        {single?.images?.map((image, i) => {
          return (
            <img
              className="w-full h-20 object-contain"
              key={i}
              src={image}
              onMouseOver={() => setFocusImage(image)}
              alt=""
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center   w-[50%]">
        <img
          className="object-center w-full "
          src={focusImage ? focusImage : single?.images[0]}
          alt=""
        />
       
      </div>
      <div className="w-[30%] ">
        <h1 className="text-4xl font-bold mb-1">{single?.title}</h1>
        <h1 className="font-bold text-2xl text-slate-800 mb-1">
          {single?.brand}{" "}
        </h1>
        <p className="w-60 text-base">
          {single?.description} the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised with the release of Letraset
          sheets containing Lorem Ipsum passages{" "}
        </p>
        <div className="flex gap-4 items-end mt-3">
          <h1 className="text-4xl font-extrabold ">${single?.price}</h1>
          <h1 className="text-green-600 text-3xl font-extrabold ">
            {single?.discountPercentage}% off
          </h1>
        </div>
        <div className="flex gap-4 items-end mt-6">
          <h1
            className="uppercase text-base border p-4 bg-yellow-400 font-bold rounded-lg cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            add to cart
          </h1>
          <h1
            className="uppercase text-base p-4 border bg-orange-400  rounded-lg font-bold cursor-pointer"
            onClick={() => navigate("/buynow")}
          >
            buy now
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Product;
