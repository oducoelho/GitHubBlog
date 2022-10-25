import { useContext } from "react"
import { InformationAPIContext } from "../../../../contexts/InformationAPIContext"
import { relativeDateFormatter } from "../../../../utils/formatter"
import { Box, Container, Content, Title } from "./styled"

export const BoxContent = () => {
  const { issues } = useContext(InformationAPIContext)
    
  return (
    <Container>
      {issues.map((issues) => {
        const formattedDate = relativeDateFormatter(issues.created_at);
        return (
          <Box  to={`/informations/${issues.number}`}>
            <Content>
              <Title>
                <strong>{issues.title}</strong>
                <span>{formattedDate}</span>
              </Title>
              <h4>
                {issues.body}
              </h4>
            </Content>
          </Box>
        )
      })}
    </Container>
  )
}
