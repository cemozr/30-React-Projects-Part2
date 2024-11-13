import { createContext, ReactNode, useState } from "react";

type User = {
  id: number;
  username: string;
  password: string;
};

type UserList = User[];
type AuthContextProviderProps = {
  children: ReactNode;
};
type AuthContext = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  userList: UserList;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: () => void;
  handleRegister: () => void;
};

const AuthContext = createContext<AuthContext>({
  username: "",
  password: "",
  userList: [],
  isLoggedIn: false,
  isRegister: false,
  setIsRegister: () => {},
  setIsLoggedIn: () => {},
  setUsername: () => {},
  setPassword: () => {},
  handleLogin: () => {},
  handleRegister: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userList, setUserList] = useState<UserList>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleLogin = () => {
    const currentUser = userList.find(
      (user) => user.username === username && user.password === password,
    );
    setUsername("");
    setPassword("");
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      alert("login failed");
    }
    // userList.map((user) => {
    //   if (user.username === username) {
    //     setIsLoggedIn(true);
    //   }
    //   if (!user) {
    //     return alert("User couldn't find");
    //   } else {
    //     return alert("error");
    //   }
    // });
  };
  const handleRegister = () => {
    setUserList([...userList, { id: Date.now(), username, password }]);
    setIsRegister(false);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        password,
        setUsername,
        setPassword,
        setIsRegister,
        userList,
        isLoggedIn,
        setIsLoggedIn,
        isRegister,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
