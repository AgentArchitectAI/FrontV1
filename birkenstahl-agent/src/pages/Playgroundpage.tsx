import { useState } from "react";
import Header2 from "../components/Header2";

type Message = {
  sender: "user" | "agent";
  text: string;
};

const PlaygroundPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");





  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
        ...messages,
        { sender: "user" as const, text: input }
      ];
      
    setMessages(newMessages);
    setInput("");
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-[#202222] text-white">
      <Header2 />

      <main className="max-w-5xl mx-auto px-6 py-10">
            

        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-semibold text-[#c7c7c7]">Historial de Conversación</h2>
          <div className="space-y-6">
            {messages.length === 0 ? (
              <p className="text-[#777] italic">Aún no hay mensajes.</p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-md text-sm whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-black text-white text-right"
                        : "bg-[#2a2a2a] text-[#dddddd]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#c7c7c7] mb-2">Entrada de Texto</h3>
          <textarea
            className="w-full bg-[#2a2a2a] border border-[#3e3e3e] rounded-xl px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#78786d]"
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>

          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={handleClear}
              className="px-4 py-2 border border-[#78786d] text-[#78786d] rounded-lg hover:bg-[#3a3a3a] transition"
            >
              Limpiar Chat
            </button>
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-[#78786d] text-white rounded-lg hover:bg-[#5e5e5e] transition"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlaygroundPage;