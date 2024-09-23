import { HeaderPrivate } from '../components/HeaderPrivate/HeaderPrivate'
import * as C from './styles'

export const Home = () => {
    return (
        <div>
            <C.Main>
                <HeaderPrivate />

                <C.HomeSection>
                    <div className="home-info">
                        <h2>Como funciona</h2>
                        <C.HomeInfo>
                            FinanCerto é uma aplicação de gestão financeira projetada para simplificar o controle das suas finanças
                            pessoais e ajudar a alcançar seus objetivos financeiros com facilidade. Através de uma interface intuitiva e
                            uma variedade de recursos avançados, o FinanCerto oferece uma abordagem abrangente para monitorar e otimizar
                            suas finanças.
                        </C.HomeInfo>
                    </div>
                </C.HomeSection>

                <C.Footer>
                    copyright © 2024 Igor Meira. Todos os direitos reservados
                </C.Footer>
            </C.Main>
        </div>
    );
}


