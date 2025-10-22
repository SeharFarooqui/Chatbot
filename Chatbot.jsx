import { useState,useEffect,useRef } from "react";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [allmessages, setAllMessages] = useState(()=>{const SavedMessages=localStorage.getItem('allmessages')
    return SavedMessages?JSON.parse(SavedMessages):[]
  })
  useEffect(()=>{localStorage.setItem('allmessages',JSON.stringify(allmessages))},[allmessages])
  const chatEndRef = useRef(null);
  useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [allmessages]);
  const sendMessage = async () => {
    if (!message.trim()) return;
    setAllMessages((prev) => [...prev, { sender: "user", text: message }]);
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setReply(data.reply);
    setAllMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    setMessage("");
  };

  return (
    <div >
      <h1 className="text-2xl font-bold mb-2 text-center">“Welcome to your AI Chat Assistant — ask anything you’d like to know!”</h1>
   
     

 {/* Chat Messages */}
      <div className="space-y-4 mb-4 overflow-y-auto h-[75vh]">
        {allmessages.map((msg, index) => (
          <div
            key={index}
            className={`flex  items-center gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img className="max-h-10" src="robot.png" alt="bot" />
            )}
            <div
              className={`px-3 first-letter:uppercase py-2 rounded-2xl max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span>{msg.text}</span>
            </div>
            {msg.sender === "user" && (
              <img className="max-h-10" src="user.png" alt="sender" />
            )}
          </div>
        ))}
          <div ref={chatEndRef} />
      </div>
        


   <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center">
  <div className="flex w-full max-w-2xl items-center gap-2">
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e)=>{
        if (e.key==='Enter')
        {sendMessage()}
      }}
      placeholder="Ask me anything..."
      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
    />
    <button
      onClick={sendMessage}
      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition"
    >
      Send
    </button>
  </div>
</div>


    </div>
  );
}

export default Chatbot;
