import { HeaderPrivate } from '../components/HeaderPrivate/HeaderPrivate';
import 'swiper/swiper-bundle.min.css'
import * as C from './styles'


export const AboutMe = () => {
    return (
        <div>
            <C.Main>
                <HeaderPrivate />

                <C.HomeSection>
                    <div className="home-info">
                        <h2>Olá, sou Igor</h2>
                        <C.HomeInfo>
                            Fui eu
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


