import React, { useEffect } from 'react';

function Dialogflowchat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="ChatBot-TurnersCars"
      agent-id="6cccb9e6-3238-4700-816c-96eba98a8fc1"
      language-code="en"
    ></df-messenger>
  );
}

export default Dialogflowchat;