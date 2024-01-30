import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [show, setShow] = useState("password");
  const [pasword, setPasword] = useState("");
  const [confirmPasword, setConfirmPasword] = useState("");
  const [error, setError] = useState(false);

  function handlechange() {
    show == "password" ? setShow("text") : setShow("password");
  }
  function passwordCode(e) {
    
    
    setConfirmPasword(e.target.value);
  }

  useEffect(() => {
    if(pasword === confirmPasword) {
      setError(false);
      console.log(error);
    } else {
      setError("password and confirm password should be same");
      console.log(error);
    }
  }, [pasword,confirmPasword]);

  return (
    <div className=" flex justify-center mt-4 h-screen">
      <div className=" h-[70%] bg-red-500 w-[40%] flex justify-center m-3">
        <form>
          <h1 className="text-3xl font-bold pb-6 text-white pt-4 text-center ">
            Sign up{" "}
          </h1>
          <input
            type="text"
            placeholder=" First Name"
            className="bg-slate-50  text-black pt-1 pb-1 pr-4 pl-4"
          />
          &nbsp;
          <input
            type="text"
            placeholder="Last Name"
            className="bg-slate-50  text-black pt-1 pb-1 pr-4 pl-4 "
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-slate-50 pt-1 pb-1 pr-4 pl-4 w-full"
          />
          <br />
          <br />
          <div className="flex items-center">
            <input
              type={show}
              placeholder="password "
              value={pasword}
              onChange={(e) => setPasword(e.target.value)}
              className="bg-slate-50 pt-1 pb-1 pr-4 pl-4 w-full"
            />
            <br />
            <br />
            <i
              className="fa-solid fa-eye object-contain ml-2 text-white cursor-pointer w-3 "
              onClick={() => handlechange()}
            ></i>
          </div>{" "}
          <br />
          {error && <p className="text-black"> {error}</p>}
          <input
            type="text"
            placeholder="Confirm Password"
            className="bg-slate-50 pt-1 pb-1 pr-4 pl-4 w-full"
            value={confirmPasword}
            onChange={passwordCode}
          />
          <br />
          <br />
          <input type="checkbox" />
          &nbsp;
          <span className="text-sm text-white">
            I accept the terms of Use and Privacy Policy
          </span>
          <br />
          <button className="border pt-1 rounded-lg pb-1 pl-40 pr-40 place-items-center bg-slate-500 text-white  text-l mt-5">
            Create Account
          </button>
          <p className="pt-6 text-center text-white text-sm ">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer "
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
