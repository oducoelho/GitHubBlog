import { Data, Informations, PorfileContainer } from "./styled"

import { GithubLogo, Buildings, Users, Share } from 'phosphor-react'
import { useContext } from "react"
import { InformationAPIContext } from "../../../../contexts/InformationAPIContext"

export const Profile = () => {
  const { informations } = useContext(InformationAPIContext)
  
  return (
    <PorfileContainer>
        <img src={informations.avatar_url} alt="" />
        <Data>
          <h1>{informations.name} <a target='_blank' href="https://github.com/oducoelho">GITHUB<Share size={18} /></a></h1>
          <h3>{informations.bio}</h3>
          <Informations>
            <span>
              <GithubLogo size={25} />
              {informations.login}
              </span>
            <span>
              <Buildings size={25} />
              {informations.company}
              </span>
            <span>
              <Users size={25} />
              {informations.followers} Seguidores
            </span>
          </Informations>
        </Data>
      </PorfileContainer>
  )
}
