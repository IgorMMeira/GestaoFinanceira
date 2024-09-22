import { Link } from 'react-router-dom';
import * as C from './styles'

export const HeaderPrivate = () => {

    return (
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
                        <Link to="/home">Home</Link>
                    </C.StyledLink>
                    <C.StyledLink>
                        <Link to="/login">Login</Link>
                    </C.StyledLink>
                </C.NavList>
            </div>
        </C.Header>
    )


}
