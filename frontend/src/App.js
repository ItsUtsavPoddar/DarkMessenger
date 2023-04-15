import "./App.css";
//import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <Router>
        <ChatProvider>
          <ChakraProvider>
            <Routes>
              <Route exact path={`/`} element={<Homepage />} />
              <Route exact path={`/chats`} element={<Chatpage />} />
            </Routes>
          </ChakraProvider>
        </ChatProvider>
      </Router>
    </div>
  );
}

export default App;
