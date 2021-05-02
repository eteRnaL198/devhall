import React, { useState, useEffect } from 'react'

type ChatHistory = string[];


const Message: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const tempChats = [
      "good morning",
      "hello",
      "good night",
    ]
    setChatHistory(tempChats);
  }, []);

  const handleSendClick = () => {
    setChatHistory([...chatHistory, inputText]);
    setInputText("");
  }

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-grow">
        <p className="text-xl text">プロジェクト1</p>
        {chatHistory.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      <div className="flex h-10">
        <input
          className="flex-grow px-3"
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          value={inputText}
        />
        <button
          className="ml-4"
          onClick={handleSendClick}
        >send
        </button>
      </div>
    </div>
  )
}

export default Message;