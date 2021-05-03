import React, { useState, useEffect } from 'react';
import { Chat } from "./index";

type ChatHistory = {
  from: string;
  text: string;
}[];

const Message: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const tempChats = [
      {
        from: "me",
        text: "good morning",
      },
      {
        from: "bob",
        text: "hello",
      },
      {
        from: "tom",
        text: "good night",
      }
    ]
    setChatHistory(tempChats);
  }, []);

  const handleSendClick = () => {
    const newChat = {
      from: "me",
      text: inputText,
    }
    setChatHistory([...chatHistory, newChat]);
    setInputText("");
  }

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-grow">
        <p className="text-xl text">プロジェクト1</p>
        {chatHistory.map((chat, idx) => (
          <Chat chat={chat} key={idx}/>
        ))}
      </div>
      <div className="flex h-10">
        <input
          className="flex-grow px-3 focus:outline-none"
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          value={inputText}
        />
        <button
          className="ml-4 focus:outline-none"
          onClick={handleSendClick}
        >send
        </button>
      </div>
    </div>
  )
}

export default Message;