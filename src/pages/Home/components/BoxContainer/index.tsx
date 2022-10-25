import { useContext } from "react"
import { InformationAPIContext } from "../../../../contexts/InformationAPIContext"
import { relativeDateFormatter } from "../../../../utils/formatter"
import { Box, Container, Content, Title } from "./styled"

export const BoxContent = () => {
  const { issues } = useContext(InformationAPIContext)
  
  return (
    <Container to={`/informations/${issues.number}`}>
      {issues.map((issues) => {
        const formattedDate = relativeDateFormatter(issues.created_at);
        return (
          <Box>
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

/*<Container to={`/informations/${issues.number}`}>
      {issues.map((issues) => {
        const formattedDate = relativeDateFormatter(issues.created_at);
        return (
            <Content>
              <Title>
                <strong>{issues.title}</strong>
                <span>{formattedDate}</span>
              </Title>
              <h4>
                {issues.body}
              </h4>
            </Content>
        )
      })}
    </Container>*/