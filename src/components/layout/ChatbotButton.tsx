import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ChatbotButton() {
  return (
    <button
      className="fixed bottom-20 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple shadow-glow lg:bottom-6"
      aria-label="Open support chatbot"
    >
      <span className="absolute -inset-1 rounded-full border border-neon-cyan/40 animate-ring-pulse" />
      <motion.span
        className="relative text-slate-950"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="h-5 w-5" />
      </motion.span>
    </button>
  );
}
