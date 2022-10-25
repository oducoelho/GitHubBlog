import { Content, FormArea, FormContainer } from "./styled"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react"
import { InformationAPIContext } from "../../../../contexts/InformationAPIContext"

const searchFormSchema =  z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>



export const Form = () => {
  const { getPost, issues } = useContext(InformationAPIContext)
  
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchPosts = async (data: SearchFormInput) => {
    await getPost(data.query);
    
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <Content>
        <h3>Publicações</h3>
        <span>{issues.length} publicações</span>
      </Content>
      <FormArea>
        <input 
          type="text" 
          placeholder="Buscar conteúdo"
          {...register('query')}  
        />
      </FormArea>
    </FormContainer>
  )
}