import React, { useState } from "react";
import { BsChatSquareTextFill } from "react-icons/bs";
import ChatAIModal from "./ChatAIModal";

const ChatAI = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="fixed right-8 bottom-10 z-[999]">
      <div
        className="py-[10px] bg-red-500 px-5 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-red-400 hover:duration-200 hover:transition "
        onClick={openChat}
      >
        <BsChatSquareTextFill />
        <p className="ml-2 font-semibold">Chat Bot</p>
      </div>

      <ChatAIModal isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default ChatAI;
