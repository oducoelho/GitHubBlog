import ReactMarkdown from "react-markdown";
import { Box } from "./styled"

interface PostContentProps {
  content: string;
}

export const Context = ({ content }: PostContentProps) => {

  return (
    <Box>
      <span>
        <ReactMarkdown children={content} />
      </span>
    </Box>
  )
}
