import React, { useCallback, useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = React.useState("Login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [img, setImg] = React.useState(false);
  const [isDataSubmitted, setIsDataSubmitted] = React.useState(false);
  const { setShowRecruiterLogin, showRecruiterLogin } = useContext(AppContext);

  const omSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
    }
  };

  const loginPromptRef = useRef(null);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (showRecruiterLogin) {
      lockScroll();
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        loginPromptRef.current &&
        !loginPromptRef.current.contains(e.target)
      ) {
        setShowRecruiterLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowRecruiterLogin, loginPromptRef]);

  return (
    <div className="overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-10  select-none backdrop-blur-sm bg-black/40 flex justify-center items-center 
       "
      >
        <form
          onSubmit={omSubmitHandler}
          ref={loginPromptRef}
          className="relative bg-white  text-slate-600 rounded-xl p-8"
        >
          <h1 className="text-center text-2xl font-medium  text-neutral-800">
            Recruiter {state}
          </h1>
          <p className="text-sm text-center pt-1 pb-2">
            Welcome!! Please {state} to continue
          </p>
          {state === "Sign Up" && isDataSubmitted ? (
            <>
              <div className="flex items-center gap-4 mt-5">
                <label htmlFor="image">
                  <img
                    className="w-16 rounded-full cursor-pointer"
                    src={img ? URL.createObjectURL(img) : assets.upload_area}
                    alt=""
                  />
                  <input
                    onChange={(e) => setImg(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                  />
                </label>
                <p>
                  Upload Company <br />
                  Logo
                </p>
              </div>
            </>
          ) : (
            <>
              {state !== "Login" && (
                <div className="border px-4 py-2 flex items-center gap-2 rounded-xl mt-3 select-none ">
                  <img src={assets.person_icon} alt="" />
                  <input
                    className="outline-none text-sm"
                    type="text"
                    placeholder="Company Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="border px-4 py-2 flex items-center gap-2 rounded-xl mt-4">
                <img src={assets.email_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  type="email"
                  placeholder="Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="border px-4 py-2 flex items-center gap-2 rounded-xl mt-4 ">
                <img src={assets.lock_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          {state === "Login" && (
            <p className="text-sm text-blue-500 cursor-pointer mt-4">
              Forgot Password
            </p>
          )}

          <button
            type="submit"
            className="bg-zinc-400 text-white rounded-lg px-6 py-1.5 mt-5 block mx-auto "
          >
            {state === "Login"
              ? "login"
              : isDataSubmitted
              ? "create account"
              : "next"}
          </button>
          {state === "Login" ? (
            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setState("Login")}
              >
                LogIn
              </span>
            </p>
          )}
          <img
            onClick={() => setShowRecruiterLogin(false)}
            className=" absolute right-3 top-3 p-2 cursor-pointer 
            hover:scale-110 hover:rotate-90 transition-all duration-500  ease-in-out"
            src={assets.cross_icon}
            alt=""
          />
        </form>
      </div>
    </div>
  );
};

export default RecruiterLogin;
