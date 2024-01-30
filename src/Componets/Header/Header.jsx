import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  return (
    <div className="bg-blue-500 p-4 flex justify-between  sticky top-0">
      <div>
        <h1
          className="text-3xl p-3 font-extrabold uppercase cursor-pointer "
          onClick={() => navigate("/")}
        >
          Shopper
        </h1>
      </div>
      <div>
        <input
          type="search"
          className="border-2 mt-2 border-gray-300 bg-white h-10 px-5 pr-16 w-96 rounded-lg text-sm focus:outline-none"
          name="search"
          placeholder="Search your favorite products"
        />

        <i className="fa fa-search text-gray-600 z-20 hover:text-gray-500  p-3  "></i>
      </div>

      <div>
        {user ? (
          <button
            className="border p-3 font-bold bg-white text-black"
            onClick={() => navigate("/logout")}
          >
            Logout
          </button>
        ) : (
          <button
            className="border pt-1 pb-1 mt-3 pr-7 pl-7 mr-3 font-bold bg-white text-blue-600"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
       
        <button className="text-white font-bold pr-4 pl-3 border pt-1 pb-1 " onClick={()=>navigate("/cart")}>
          
        <i className="fa-solid fa-cart-shopping object-contain h-5 w-5 text-white"></i></button>
        
      

      
        
       
         
         
         
      </div>
      
      
      
     
    </div>
  );
}

export default Header;
