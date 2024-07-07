import { styled } from 'styled-components'
import tags from './tags.json'

const TagsConteainer = styled.div`
    display: flex;
    gap: 48px; 
`
const TituloTag = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const BotaoTags = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
const Botao = styled.button`
    background: rgba(217, 217, 217, 0.3);
    color: #FFFFFF;
    font-size: 24px;
    padding: 8px 10px ;
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        border-color: #C98CF1;
    }

`

const Tags = () => {
    return (
        <TagsConteainer>
            <TituloTag>Busque por tags:</TituloTag>
            <BotaoTags>
                {tags.map(tag => <Botao key={tag.id}>{tag.titulo}</Botao>)}
            </BotaoTags>
        </TagsConteainer>
    )
}

export default Tags