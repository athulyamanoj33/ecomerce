import { useNavigate } from "react-router-dom";

function Buynow() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center pt-10 w-full ">
      <div className="border m-2 pt-4 pb-4 pl-10  w-[50%] flex justify-between">
        <div>
          <h1 className="uppercase  text-gray-600  font-bold">LOGIN</h1>
          <p>+91987655432</p>{" "}
        </div>
        <div>
          <button
            onClick={() => navigate("/signup")}
            className="border mr-16 p-2 mt-1 uppercase font-medium  text-blue-600"
          >
            {" "}
            CHANGE
          </button>
        </div>
      </div>

      <div className="border  w-[50%] h-72">
        
        <div className=" ">
           
          <h1 className="uppercase p-3 bg-blue-600 pl-10 font-bold">
            Delivery address
          </h1>
          
         
          
        </div>
        
      <div className="flex ml-5">
          <input type="checkbox" className="mr-2 mt-4" />
          <p className=" pt-4 font-semibold">
            Athulya N &#160;{" "}
            <span className="border p-1 text-gray-600  bg-gray-300 text-sm ">
              home
            </span>{" "}
            &#160; 987654321
          </p>
          <button className=" text-blue-600 ml-96 mt-3 uppercase font-medium ">
            Edit
          </button>
        </div>
        <div className="overflow-hidden transition-all duration-500 ">
        <p className="ml-10 mb-3 pt-4">
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim{" "}
        </p></div>

        <button className="border  ml-80 mt-2  uppercase bg-orange-500 font-bold p-2 mb-2">
          Deliiver here
        </button>
      </div>

      <div className="border m-2 pt-4 pb-4  pl-10  w-[50%]">
        <h1 className="uppercase  text-gray-600  font-bold">Orders Summary</h1>
      </div>
      <div className="border  m-2 pt-4 pb-4  pl-10  w-[50%]">
        <h1 className="uppercase  text-gray-600  font-bold">Payment options</h1>
      </div>
    </div>
  );
}

export default Buynow;
