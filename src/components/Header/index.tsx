import header from '../../assets/Header.svg'
import { HeaderContainer } from './styled'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={header} alt="" />
    </HeaderContainer>
  )
}
