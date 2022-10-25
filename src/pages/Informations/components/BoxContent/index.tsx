import { HomeContainer, BoxContent, Data, Informations, Links } from "./styled"
import { CaretLeft, Share, GithubLogo, Calendar, ChatDots } from 'phosphor-react'
import { useContext } from "react"
import { InformationAPIContext } from "../../../../contexts/InformationAPIContext"

export const Box = () => {
  const { issuesDetails } = useContext(InformationAPIContext)
  return (
    <HomeContainer>
      <BoxContent>
        <Links>
          <a href="/"><CaretLeft size={18} />VOLTAR</a>
          <a href={issuesDetails.html_url} target='_blank'>VER NO GITHUB<Share size={18}/></a>
        </Links>
        <Data>
          <h1>{issuesDetails.title}</h1>
          <Informations>
              <span>
                <GithubLogo size={25} />
                {issuesDetails.login}
                </span>
              <span>
                <Calendar size={25} />
                {issuesDetails.created_at}
                </span>
              <span>
                <ChatDots size={25} />
                {issuesDetails.comments}
              </span>
            </Informations>
        </Data>
      </BoxContent>
    </HomeContainer>
  )
}
