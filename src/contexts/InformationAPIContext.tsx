import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface InformationAPI {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  avatar_url: string;
}

interface issuesAPI {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
}

interface InformationAPIContextType {
  informations: InformationAPI[]
  issues: issuesAPI[]
  getPost: (query?: string) => Promise<void>
}

interface InformationsProvaiderProps {
  children: ReactNode
}

export const InformationAPIContext = createContext({} as InformationAPIContextType)

export const InformationsProvaider = ({ children }:InformationsProvaiderProps) => {
  const [informations, setInformations] = useState<InformationAPI[]>([]) 
  const [issues, setIssues] = useState<issuesAPI[]>([])


  const loadInformations = async () => {
    try {
      const response = await api.get('/users/oducoelho')

      setInformations(response.data);
    }
    finally {}
  } 

  const getPost = useCallback(async (query: string = '') => {
    
    try {  
      const response = await api.get(
        `/search/issues?q=${query}%20repo:oducoelho/GitHubBlog`
      );

      setIssues(response.data.items);
    }
    finally {}
  }, [issues]);

  useEffect(() => {
    loadInformations()
    getPost()
  }, [])

  return (
    <InformationAPIContext.Provider value={{ informations, issues, getPost }}>
      {children}
    </InformationAPIContext.Provider>
  )
}