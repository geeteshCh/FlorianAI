"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { useEffect, useState, useRef } from "react";
import { FaMicrophone, FaHome, FaStopCircle } from "react-icons/fa";
import Link from 'next/link';
import Messages from "./Messages";
import { motion, AnimatePresence } from 'framer-motion';

  // We’ll use this key to force a new <Messages> instance:

  
export default function Controls() {
  const { connect, disconnect, readyState, lastUserMessage, lastVoiceMessage, isPlaying, isMuted} = useVoice();
    const [messagesKey, setMessagesKey] = useState(0);
    function toggleMic() {

    if (readyState === VoiceReadyState.OPEN) {

      // Microphone currently on, so turn it off

      disconnect();

      // Force-remount <Messages> so it resets

      setMessagesKey(prev => prev + 1);

    } else {

      // Mic is currently off, so turn it on

      connect().catch(() => {});

    }

  }

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col justify-between">
        {/* Top Section: Home Button */}
        <div className="mb-6 flex justify-center">
          <Link href="/">
            <button className="flex items-center space-x-3 text-lg font-bold px-4 py-2">
              <FaHome className="text-3xl" />
              <span>Home</span>
            </button>
          </Link>
        </div>

        {/* Bottom Section: Microphone Button and AI Talking Indicator */}
        <div className="flex flex-col items-center">

          <AnimatePresence>
            {isPlaying && (
              <motion.p
                className="text-white mt-2 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                🗣️ AI is interacting...
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex justify-center items-center space-x-4">
            <motion.button
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              onClick={toggleMic}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {readyState === VoiceReadyState.OPEN ? (
                  <motion.div
                    key="stop"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaStopCircle className="text-red-600 text-2xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="mic"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMicrophone className="text-blue-600 text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          
          {readyState === VoiceReadyState.OPEN ? (
            <div>Microphone is active</div>
          ) : (
            <div>You are on Mute.</div>
          )}
          
        </div>
      </div>
          
      {/* Messages Section */}
      <Messages key={messagesKey} />
    </div>
  );
}