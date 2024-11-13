import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const ProjectTwentyOne = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="rounded-md bg-secondaryLight p-6">
      {authContext.isLoggedIn ? (
        <div className="flex w-60 flex-col gap-3">
          {" "}
          <h1 className="text-3xl font-bold text-primary">
            Welcome {authContext.username}
          </h1>{" "}
          <p className="text-txt">We missed you ❤️</p>
          <button
            onClick={() => authContext.setIsLoggedIn(false)}
            className="h-10 rounded-md bg-primary text-background hover:bg-primaryDark"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex w-60 flex-col gap-3">
          <h1 className="text-3xl font-bold text-primary">
            {authContext.isRegister ? "Register" : "Login"}
          </h1>
          <input
            type="text"
            placeholder=" username"
            className="h-10 rounded-sm pl-2"
            value={authContext.username}
            onChange={(e) => authContext.setUsername(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder=" password"
            className="h-10 rounded-sm pl-2"
            value={authContext.password}
            onChange={(e) => authContext.setPassword(e.currentTarget.value)}
          />
          <button
            onClick={
              authContext.isRegister
                ? authContext.handleRegister
                : authContext.handleLogin
            }
            className="h-10 rounded-md bg-primary text-background hover:bg-primaryDark"
          >
            {authContext.isRegister ? "Register" : "Login"}
          </button>
          {authContext.isRegister ? (
            <p className="text-txt">
              Already have an account? Just{" "}
              <span
                onClick={() =>
                  authContext.setIsRegister(!authContext.isRegister)
                }
                className="cursor-pointer text-primary underline hover:text-primaryDark"
              >
                Log in
              </span>
            </p>
          ) : (
            <p className="text-txt">
              If you don't have an account yet{" "}
              <span
                onClick={() =>
                  authContext.setIsRegister(!authContext.isRegister)
                }
                className="cursor-pointer text-primary underline hover:text-primaryDark"
              >
                Register
              </span>{" "}
              now!
            </p>
          )}
        </div>
      )}
    </div>
  );
};
