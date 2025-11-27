"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";

type AnalyserContextType = {
  file: File | null;
  setFile: (f: File | null) => void;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  error: string;
  setError: (e: string) => void;
  blobUrl: string | null; // derived!
  metadata: string;
  setMetadata: (url: string) => void;
};

const AnalyserContext = createContext<AnalyserContextType | null>(null);

export function AnalyserProvider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [metadata, setMetadata] = useState("");

  // derive blob url whenever file changes
  const blobUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  const value = {
    file,
    setFile,
    imageUrl,
    setImageUrl,
    error,
    setError,
    blobUrl,
    metadata,
    setMetadata,
  };

  return (
    <AnalyserContext.Provider value={value}>
      {children}
    </AnalyserContext.Provider>
  );
}

export const useAnalyserContext = () => {
  const ctx = useContext(AnalyserContext);
  if (!ctx) throw new Error("useAnalyserContext must be used inside provider");
  return ctx;
};
