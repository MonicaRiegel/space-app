import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
const CorpoContainer = styled.div`
  display: flex;
  gap: 24px;
`
const ApresentacaoContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, SetFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      SetFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria =>{
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Container>
        <Cabecalho />
        <CorpoContainer>
          <BarraLateral />
          <ApresentacaoContainer>
            <Banner />
            <Galeria
              aoFotoSelecionada={foto => SetFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ApresentacaoContainer>
        </CorpoContainer>
      </Container>
      <ModalZoom 
      foto={fotoSelecionada} 
      aoFechar={() =>SetFotoSelecionada(null)}
      aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
