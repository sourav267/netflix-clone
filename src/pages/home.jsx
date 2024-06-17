import { FaqsConatiner } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
    return (<>
        <JumbotronContainer></JumbotronContainer>
        <FaqsConatiner></FaqsConatiner>
        <FooterContainer></FooterContainer>
    </>
    )
}
