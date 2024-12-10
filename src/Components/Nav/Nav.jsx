import { NavStyled } from "../../Styled/Nav.styled";

export const Nav = () => {
    return (
        <NavStyled>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </NavStyled>
    );
};