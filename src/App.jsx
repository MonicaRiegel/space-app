import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

function App() {


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <Container>
        <BarraLateral />
        <Banner />
      </Container>
    </FundoGradiente>
  )
}

export default App
