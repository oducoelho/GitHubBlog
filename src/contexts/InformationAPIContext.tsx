import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";

interface InformationAPI {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
}

interface issuesAPI {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
}
interface issuesDetailsAPI {
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
  issuesDetails: issuesDetailsAPI[]
  getPost: (query?: string) => Promise<void>
}

interface InformationsProvaiderProps {
  children: ReactNode
}

export const InformationAPIContext = createContext({} as InformationAPIContextType)

export const InformationsProvaider = ({ children }:InformationsProvaiderProps) => {
  const [informations, setInformations] = useState<InformationAPI[]>([]) 
  const [issues, setIssues] = useState<issuesAPI[]>([])
  const [issuesDetails, setIssuesDetails] = useState<issuesDetailsAPI[]>([])


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

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/oducoelho/GitHubBlog/issues/${id}`
      );

      setIssuesDetails(response.data);
    }
    finally{}
  }, [issuesDetails])

  useEffect(() => {
    loadInformations()
    getPost()
    getPostDetails()
  }, [])

  return (
    <InformationAPIContext.Provider value={{ informations, issues, getPost, issuesDetails }}>
      {children}
    </InformationAPIContext.Provider>
  )
}