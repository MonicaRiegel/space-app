import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

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
  align-items: center;
  gap: 24px;
`
const ApresentacaoContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Container>
        <Cabecalho />
        <CorpoContainer>
          <BarraLateral />
          <ApresentacaoContainer>
            <Banner />
            <Galeria />
          </ApresentacaoContainer>
        </CorpoContainer>
      </Container>
    </FundoGradiente>
  )
}

export default App
