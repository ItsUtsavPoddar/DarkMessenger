import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setselectedChat] = useState();
  const [chats, setchats] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <UserContext.Provider
      value={{ user, setUser, selectedChat, setselectedChat, chats, setchats }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(UserContext);
};

export default ChatProvider;
