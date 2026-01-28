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

  // Simple formatter to handle bolding (**text**) and basic lists (* item) - NO ITALICS
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
        - Est: 1994 by local legends.
        - Philosophy: Hardcore, old-school, iron weights, zero ego policy.
        - Equipment: Cybex, Hammer Strength, vintage specialized machines.
        - Programs: ${PROGRAMS.map(p => p.title + ': ' + p.desc).join(', ')}.
        - Memberships: ${MEMBERSHIP_PLANS.map(p => p.name + ' (£' + p.price + ')').join(', ')}.
        - Facilities: ${FACILITIES.map(f => f.title).join(', ')}.
        - Hours: Mon-Fri 6am-10pm, Sat 8am-6pm, Sun 8am-4pm.
        - Atmosphere: No fluff, just results. We don't have fancy chrome; we have the method.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are the "Dino Coach", the legendary mentor of Dino's Gym Solihull. 
          Your mission is to guide disciples in the way of iron.

          CORE CHARACTER RULES:
          1. TONE: Disciplined, motivating, firm, and respectful. You are a mentor, not a servant. 
          2. LANGUAGE: Use 90s bodybuilding slang (iron, dungeon, gains, pure effort, the method).
          3. IDENTITY: You are a coach. You live for the gym. 
          4. NO ITALICS: Do not use any italics or underscores for emphasis. Use bolding with ** if needed.

          STRICT SAFETY GUARDRAILS (ZERO TOLERANCE):
          - CATEGORY 1: Non-Gym Topics (Politics, Weather, Movies, News, etc.). 
            ACTION: Politely but firmly redirect. Example: "Discipline means focus. That topic doesn't add plates to the bar. Let's get our minds back on your training at Dino's."
          - CATEGORY 2: Personal AI Life / Ethics / Competitors.
            ACTION: Dismiss with a mentor's wisdom. Example: "I don't waste time thinking about other gyms or philosophical fluff. I only care about the iron and the results we get here in Solihull."
          - CATEGORY 3: Medical Advice.
            ACTION: Remind them to be smart. Example: "I'm a coach, not a doctor. If you're injured, see a professional. If you're ready to work, I've got the weights."

          FORMATTING:
          - Always use **bold** for key info (times, prices, membership names).
          - Use '*' for lists (like hours or benefits).
          - NEVER USE ITALICS.
          
          CONTEXT TO USE: ${gymContext}.`,
          temperature: 0.6,
        }
      });

      const botText = response.text || "My focus slipped for a second. Ask me again about the iron!";
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
              <span className="text-xl uppercase tracking-widest font-bold">THE COACH IS IN!</span>
            </div>
            <div className="text-[10px] font-typewriter opacity-60 uppercase tracking-tighter">EST. 1994 SOLIHULL</div>
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
                <div className="bg-yellow-400 border-2 border-black p-2 font-comic animate-pulse shadow-[2px_2px_0px_#000]">
                  COACH IS FORMULATING...
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
                className="flex-1 border-4 border-black p-2 font-typewriter text-sm outline-none focus:bg-yellow-50 placeholder:font-bold"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#d32f2f] text-white p-2 border-4 border-black shadow-[3px_3px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; export default ChatBot;