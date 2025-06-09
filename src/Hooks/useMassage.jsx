import { useState } from 'react';

export default function useMessage() {
  const [message, setMessage] = useState(null);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000); // Message stays for 3 seconds
  };

  return { message, showMessage };
}