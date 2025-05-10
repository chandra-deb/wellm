// src/pages/chatSession/chatSession.tsx
import { View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import Chatbox from "../../components/Chatbox/Chatbox"; // Assuming Chatbox is generic enough
import "./chatSession.scss";

const ChatSessionPage = () => {
  const router = useRouter();
  const [sessionTitle, setSessionTitle] = useState("Chat");
  const [initialPrompt, setInitialPrompt] = useState("");

  useEffect(() => {
    const params = router.params;
    let title = "New Chat";
    let prompt = "";

    if (params.sessionId) {
      // TODO: Load existing session by sessionId
      title = `Session ${params.sessionId}`;
      console.log("Loading session:", params.sessionId);
    } else if (params.template) {
      // Handle different templates
      switch (params.template) {
        case "brainstorm":
          title = "Brainstorm Ideas";
          prompt = "Let's brainstorm some ideas about..."; // Example prompt
          break;
        case "poem":
          title = "Write a Poem";
          prompt = "Write a short poem about..."; // Example prompt
          break;
        default:
          title = "New Chat";
      }
      console.log("Starting new chat with template:", params.template);
    }
    setSessionTitle(title);
    setInitialPrompt(prompt);

    // Update navigation bar title dynamically
    Taro.setNavigationBarTitle({ title });
  }, [router.params]);

  return (
    <View className="chat-session-page">
      {/* You might want a specific header or context display here based on the session/template */}
      {/* <Text>Mode: {sessionTitle}</Text> */}
      {/* If initialPrompt is set, you could pass it to Chatbox or display it */}
      <Chatbox
        // You'll need to adapt Chatbox to handle initial prompts,
        // and manage messages based on sessionId or a new session.
        // For now, it's a placeholder.
        key={router.params.sessionId || router.params.template || "new"} // Force re-mount for new sessions
      />
    </View>
  );
};

export default ChatSessionPage;
