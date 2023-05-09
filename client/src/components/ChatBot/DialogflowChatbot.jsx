import React, { useEffect } from "react";

const DialogflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      chat-icon="https://content.tgstatic.co.nz/webassets/globalassets/search-wizard/search-wizard-tina-default.png"
      intent="WELCOME"
      chat-title="Tina"
      agent-id="6cccb9e6-3238-4700-816c-96eba98a8fc1"
      language-code="en"
    ></df-messenger>
  );
};

export default DialogflowChatbot;