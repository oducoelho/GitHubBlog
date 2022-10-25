import { HomeContainer, BoxContent, Data, Informations, Links } from "./styled"
import { CaretLeft, Share, GithubLogo, Calendar, ChatDots } from 'phosphor-react'
import { IPost } from "../.."
import { relativeDateFormatter } from "../../../../utils/formatter"

interface PostHeaderProps {
  postData: IPost
}


export const Box = ({ postData }: PostHeaderProps) => {
  const formattedDate = relativeDateFormatter(postData.created_at);
  return (
    <HomeContainer>
      <BoxContent>
        <Links>
          <a href="/"><CaretLeft size={18} />VOLTAR</a>
          <a href={postData.html_url} target='_blank'>VER NO GITHUB<Share size={18}/></a>
        </Links>
        <Data>
          <h1>{postData.title}</h1>
          <Informations>
              <span>
                <GithubLogo size={25} />
                {/*postData.user.login*/}
                oducoelho
                </span>
              <span>
                <Calendar size={25} />
                {formattedDate}
                </span>
              <span>
                <ChatDots size={25} />
                {postData.comments} Comentários
              </span>
            </Informations>
        </Data>
      </BoxContent>
    </HomeContainer>
  )
}
