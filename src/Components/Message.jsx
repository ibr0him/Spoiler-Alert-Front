import { useEffect, useState } from 'react';

const Message = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [internalMessage, setInternalMessage] = useState(null);

  useEffect(() => {
    if (message) {
      setInternalMessage(message);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setInternalMessage(null), 500);
    }
  }, [message]);

  if (!internalMessage) return null;

  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50
      bg-white rounded-full flex justify-center items-center w-fit h-[50px] 
      px-8 py-4 shadow-lg transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-[100px] opacity-100' : 'translate-y-[-100%] opacity-0'}`}
    >
      <span className="text-[20px] font-bold text-black">{internalMessage}</span>
    </div>
  );
};

export default Message;