import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatApp() {
  const [messages, setMessages] = useState(["Hello! How can I help you?"]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, newMessage.trim()]);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <div className="flex-1 overflow-auto h-64 p-2 border-b">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 my-1 bg-gray-200 rounded-lg">{msg}</div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex items-center gap-2 p-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
