import { useState, useEffect } from "react";
import GenImage from "./components/GenImage";
import Header from "./components/Header";
import { getWelcomeMessage } from "./apis/provider";

const App = () => {
  // create message
  const [message, setMessage] = useState("");

  useEffect(() => {
    getWelcomeMessage(setMessage);
  }, []);

  return (
    <>
      <div className="columns">
        <div className="column">
          <Header title={message} />
          <GenImage />
        </div>
      </div>
    </>
  );
};

export default App;
