import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Box } from "./components/BoxContent"
import { Context } from "./components/Content"

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export const Information = () => {
  const [postData, setPostData] = useState<IPost>({} as IPost);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {

      const response = await api.get(
        `/repos/oducoelho/GitHubBlog/issues/${id}`
      );

      setPostData(response.data);
    } finally {}
  }, [postData]);
  console.log(postData)

  useEffect(() => {
    getPostDetails();
  }, []);
  
  return (
    <div>
      <Box postData={postData}/>
      <Context content={postData.body}/>
    </div>
  )
}
