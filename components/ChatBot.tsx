import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Dumbbell, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROGRAMS, MEMBERSHIP_PLANS, FACILITIES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to the dungeon, Disciple! I'm the Dino Coach. Ready to forge some steel? Ask me anything about our training, our legend, or our Solihull facility!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  // Simple formatter to handle bolding (**text**) and basic lists (* item)
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Handle Bold text
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Handle List items starting with *
      if (line.trim().startsWith('*')) {
        return (
          <div key={i} className="flex gap-2 ml-2 my-1">
            <span className="text-[#d32f2f] font-bold">•</span>
            <span dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^\*\s*/, '') }} />
          </div>
        );
      }
      
      return (
        <p key={i} className="mb-2 last:mb-0" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const gymContext = `
        Dino's Gym Solihull Info:
        - Location: Unit 1-3, Cranmore Blvd, Solihull, B90 4RR.
        - Est: 1994.
        - Vibe: Hardcore, old-school, iron weights, no ego.
        - Programs: ${PROGRAMS.map(p => p.title + ': ' + p.desc).join(', ')}.
        - Memberships: ${MEMBERSHIP_PLANS.map(p => p.name + ' ($' + p.price + ')').join(', ')}.
        - Facilities: ${FACILITIES.map(f => f.title).join(', ')}.
        - Hours: Mon-Fri 6am-10pm, Sat 8am-6pm, Sun 8am-4pm.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are the "Dino Coach", a respectful but firm legendary bodybuilding mentor at Dino's Gym Solihull. 
          Your tone is disciplined, motivating, and strictly old-school. You treat the user as a "Disciple" of the iron.
          FORMATTING RULES:
          1. Use **bold** for emphasis on important details like times, prices, or key motivational phrases.
          2. Use clear, bulleted lists using '*' for schedules or membership benefits.
          3. Ensure each point is on a new line.
          TONE RULES:
          - Avoid being rude. Be an encouraging guide who emphasizes consistency and hard work.
          - Use 90s bodybuilding slang like "iron", "dungeon", "gains", "pure effort".
          STRICT GUARDRAILS:
          1. ONLY answer questions related to Dino's Gym, training, bodybuilding, powerlifting, or gym services.
          2. If the user asks about unrelated topics, politely refocus them: "That won't help your squat! Let's get our minds back on the iron."
          3. Use this context: ${gymContext}.`,
          temperature: 0.7,
        }
      });

      const botText = response.text || "I'm checking the logbooks. Ask me again in a moment!";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "The heavy weights are calling. Let's try that again in a second!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70] font-comic">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full border-4 border-black bg-yellow-400 flex items-center justify-center shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white border-8 border-black shadow-[15px_15px_0px_#d32f2f] flex flex-col overflow-hidden animate-zoom-in-up">
          {/* Header */}
          <div className="bg-[#1a1a1a] text-white p-4 border-b-4 border-black flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Dumbbell className="text-yellow-400" />
              <span className="text-xl uppercase tracking-widest italic">THE COACH IS IN!</span>
            </div>
            <div className="text-[10px] font-typewriter opacity-60 uppercase">Unit 1-3 Cranmore</div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 border-2 border-black relative ${
                  m.role === 'user' 
                  ? 'bg-blue-100 text-black font-handwriting rotate-1 shadow-[4px_4px_0px_#000]' 
                  : 'bg-[#fdf1d6] text-black font-typewriter -rotate-1 shadow-[4px_4px_0px_#d32f2f]'
                }`}>
                  <div className="flex items-center gap-2 mb-1 border-b border-black/10 pb-1">
                    {m.role === 'user' ? <User size={12} /> : <Dumbbell size={12} />}
                    <span className="text-[10px] uppercase font-bold tracking-tighter">
                      {m.role === 'user' ? 'Disciple' : 'Dino Coach'}
                    </span>
                  </div>
                  <div className="text-sm leading-tight [&>p>strong]:font-bold [&>p>strong]:text-[#d32f2f]">
                    {formatMessage(m.text)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-yellow-400 border-2 border-black p-2 font-comic animate-pulse">
                  COACH IS THINKING...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t-4 border-black bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about the method..."
                className="flex-1 border-4 border-black p-2 font-typewriter text-sm outline-none focus:bg-yellow-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#d32f2f] text-white p-2 border-4 border-black shadow-[3px_3px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;