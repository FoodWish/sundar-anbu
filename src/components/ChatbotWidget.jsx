import { useEffect } from "react";

const RAGBOT_BASE_URL = "http://8.231.118.245";
const RAGBOT_API_KEY = "a2ad388bccf7b613cb091230545f6aec40975eef9956ba1c2b00f8c8bb4d2c40";

function ChatbotWidget() {
  useEffect(() => {
    window.RAGBOT_CONFIG = {
      apiUrl: `${RAGBOT_BASE_URL}/api/ask/`,
      apiKey: RAGBOT_API_KEY,
    };

    const script = document.createElement("script");
    script.src = `${RAGBOT_BASE_URL}/static/chatbot/widget.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.RAGBOT_CONFIG;
    };
  }, []);

  return null;
}

export default ChatbotWidget;
