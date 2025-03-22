"use client";
import { useVoice } from "@humeai/voice-react";
import { useState, useEffect, useRef } from "react";

export default function Messages() {
  const { messages } = useVoice();
  const messagesRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="w-[80vw] h-[80vh] flex flex-col bg-gradient-to-br from-white-50 to-white-100 rounded-lg overflow-hidden">
        {/* Message Panel */}
        <div
          ref={messagesRef}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          {messages.map((msg, index) => {
            if (!msg || !msg.message || !msg.message.content) return null;
  
            const isUserMessage = msg.type === "user_message";
            const messageClass = isUserMessage
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg self-end"
              : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg self-start";
            const icon = isUserMessage ? "👤" : "🤖";
  
            return (
              <div key={index} className={`flex ${isUserMessage ? "justify-end" : "justify-start"}`}>
                {/* Icon for AI, comes before the message */}
                {!isUserMessage && (
                  <div className="w-12 h-12 mr-3 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg">
                    <span className="text-xl">{icon}</span>
                  </div>
                )}
  
                {/* Message Content Box */}
                <div className={`max-w-[70%] p-4 ${messageClass} shadow-lg rounded-lg`}>
                  <p className="text-sm">{msg.message.content}</p>
                </div>
  
                {/* Icon for User, comes after the message */}
                {isUserMessage && (
                  <div className="w-12 h-12 ml-3 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg">
                    <span className="text-xl">{icon}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
  

       {/* Custom Scrollbar Styles */}
       <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #6b7280;
          border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #4b5563;
        }
        ::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
      `}</style>
    </div>
    </div>
  );
};

