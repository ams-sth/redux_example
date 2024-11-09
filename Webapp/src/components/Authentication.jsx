import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearError, registerUser } from "../redux/slices/AuthenticationSlice";

const Authentication = () => {
  const dispatch = useDispatch();
  const { image, status, error } = useSelector((state) => state.authentication);

  const [registerState, isRegisterState] = useState(false);

  const [isActive, setIsActive] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFocus = (inputName) => {
    setIsActive(inputName);
  };

  const handleBlur = () => {
    setIsActive("");
  };

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      return alert("Passwords do not match");
    }
    try {
      await dispatch(registerUser({ username, password, email })).unwrap();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="container h-screen flex flex-col justify-center">
      <div className={`shadow-lg flex`}>
        <div className={`w-1/2`}>
          <img src={image} alt="Login Page.jpg" />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-1/2 flex flex-col gap-[1rem] p-[1rem] justify-center`}
        >
          <input
            className={`${
              isActive === "email" ? "border-b border-b-blue-500" : "border-b"
            } py-[0.5rem] outline-none transition-all duration-300 order-2`}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("")}
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={`${
              isActive === "password"
                ? "border-b border-b-blue-500"
                : "border-b"
            } py-[0.5rem] transition-all duration-300 outline-none order-3`}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur()}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {registerState ? (
            <>
              <input
                className={`${
                  isActive === "username"
                    ? "border-b border-b-blue-500"
                    : "border-b"
                } py-[0.5rem] transition-all duration-300 outline-none order-1`}
                onFocus={() => handleFocus("username")}
                onBlur={() => handleBlur()}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={`${
                  isActive === "confirm-password"
                    ? "border-b border-b-blue-500"
                    : "border-b"
                } py-[0.5rem] transition-all duration-300 outline-none order-4`}
                onFocus={() => handleFocus("confirm-password")}
                onBlur={() => handleBlur()}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`bg-blue-500 hover:bg-blue-600
                   rounded-xl px-[2rem] py-[0.5rem] text-white mx-auto order-5`}
              >
                {status === "loading" ? "Registering..." : "Register"}
              </button>
              <NavLink
                onClick={() => isRegisterState(false)}
                className={`mx-auto text-blue-500 hover:text-blue-600 transition-all duration-300 order-6`}
              >
                Already Registered ?
              </NavLink>
            </>
          ) : (
            <>
              <button
                className={`bg-blue-500 hover:bg-blue-600 rounded-xl px-[2rem] py-[0.5rem] text-white mx-auto order-4`}
              >
                Login
              </button>
              <NavLink
                onClick={() => isRegisterState(true)}
                className={`mx-auto text-blue-500 hover:text-blue-600 transition-all duration-300 order-5`}
              >
                Create new account
              </NavLink>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
export default Authentication;
