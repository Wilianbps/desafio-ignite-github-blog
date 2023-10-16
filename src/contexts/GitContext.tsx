import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface User {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  company: string;
  followers: string;
}

export interface Issues {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface GitContextType {
  user: User;
  issues: Issues[];
  setIssues: (Issues: []) => void;
}

interface GitProviderProps {
  children: ReactNode;
}

export const GitContext = createContext({} as GitContextType);

export function GitProvider({ children }: GitProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issues[]>([]);

  async function fetchUserGit() {
    const response = await api.get("users/wilianbps");
    setUser(response.data);
  }

  useEffect(() => {
    fetchUserGit();
  }, []);

  return (
    <GitContext.Provider value={{ user, issues, setIssues }}>
      {children}
    </GitContext.Provider>
  );
}
