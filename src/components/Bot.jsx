// import React from "react";
import SimpleForm from "./SimpleForm";
import React, { useState } from "react";

const Bot = () => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };
  return (
    <>
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm></SimpleForm>
        </div>
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div className="flex justify-end ">
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}></button>
          ) : (
            <button className="btn-close" onClick={() => hideChat()}>
              ✖
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Bot;
