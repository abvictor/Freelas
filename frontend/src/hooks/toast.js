import React, { useContext, createContext, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import ToastContainer from "../components/ToastContainer";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(async ({ type, title, description }) => {
    const id = uuid();
    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((oldMessages) =>
      oldMessages.filter((oldMessage) => oldMessage.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }

  return context;
}
