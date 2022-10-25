import { useContext } from "react"
import { InformationAPIContext } from "../../../../contexts/InformationAPIContext"
import { Box } from "./styled"

export const Context = () => {
  const { issuesDetails } = useContext(InformationAPIContext)

  return (
    <Box>
      <span>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </span>
      <h2>Dynamic typing</h2>
      <span>
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
      </span>
    </Box>
  )
}
