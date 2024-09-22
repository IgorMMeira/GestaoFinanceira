import { Link } from 'react-router-dom';

import 'swiper/swiper-bundle.min.css'
import * as C from './styles'

export const AboutMe = () => {
    return (
        <div>
            <C.Main>
                {/* HEADER */}
                <C.Header>
                    <div className="menu">
                        <C.NavList>
                            <C.StyledLink>
                                <Link to="/dashboard">Dashboard</Link>
                            </C.StyledLink>
                            <C.StyledLink>
                                <Link to="/sobre">Sobre</Link>
                            </C.StyledLink>
                            <C.StyledLink>
                                <Link to="/login">Login</Link>
                            </C.StyledLink>
                        </C.NavList>
                    </div>
                </C.Header>

                {/*HOME*/}

                <C.HomeSection>
                    <div className="home-info">
                        <h2>Olá, sou Igor</h2>
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


