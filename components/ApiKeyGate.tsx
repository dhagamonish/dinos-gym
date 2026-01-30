import React, { useState, useEffect } from 'react';

interface ApiKeyGateProps {
  children: React.ReactNode;
}

const ApiKeyGate: React.FC<ApiKeyGateProps> = ({ children }) => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      // @ts-ignore
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    };
    checkKey();
  }, []);

  const handleOpenSelectKey = async () => {
    // @ts-ignore
    await window.aistudio.openSelectKey();
    // Per instructions: Assume success after triggering the dialog to mitigate race conditions
    setHasKey(true);
  };

  if (hasKey === null) return null;

  if (!hasKey) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f0e6d2] p-6 font-comic">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {/* Removed rotate */}
        <div className="max-w-md w-full border-8 border-black bg-white p-8 shadow-[20px_20px_0px_#d32f2f] text-center">
          <h1 className="text-5xl text-[#d32f2f] mb-6 uppercase leading-none">Access the Dungeon!</h1>
          <p className="font-typewriter text-lg mb-8 leading-tight">
            To view the legendary high-definition imagery of Dino's Gym, you must select an API key from a paid GCP project.
          </p>
          <button
            onClick={handleOpenSelectKey}
            className="w-full bg-black text-white py-6 text-3xl shadow-[8px_8px_0px_#26a69a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all mb-4"
          >
            SELECT API KEY
          </button>
          <p className="text-xs font-typewriter opacity-60">
            Note: You must have a billing account configured. <br/>
            <a 
              href="https://ai.google.dev/gemini-api/docs/billing" 
              target="_blank" 
              className="underline hover:text-[#d32f2f]"
            >
              Learn more about billing here.
            </a>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ApiKeyGate;