import { styled } from "styled-components"

const FundoEstilizado = styled.figure`
    background-image: url('src/assets/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    flex-grow: 1;
    display: flex;
    align-items: center;

`

const TituloEsitlizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
    color: #FFFFFF;
`

const Banner = () => {
    return (
        <FundoEstilizado>
            <TituloEsitlizado>A galeria mais completa de fotos do espaço!</TituloEsitlizado>
        </FundoEstilizado>
    )
}

export default Banner
