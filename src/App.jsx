import { FaqsConatiner } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

function App() {
  return (<>
    <JumbotronContainer></JumbotronContainer>
    <FaqsConatiner></FaqsConatiner>
    <FooterContainer></FooterContainer>
  </>)
}

export default App
