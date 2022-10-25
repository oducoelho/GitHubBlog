import { BoxContent } from "./components/BoxContainer"
import { Form } from "./components/Form"
import { Profile } from "./components/ProfileContainer"
import { HomeContainer } from "./styled"

export const Home = () => {  
  return (
    <HomeContainer>
      <Profile />
      <Form />
      <BoxContent />      
    </HomeContainer>
  )
}

