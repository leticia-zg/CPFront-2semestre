import { BiHome, BiUserCircle, BiSearch, BiHeart } from "react-icons/bi";
import {
    styledMenu,
    wrapperMenu,
    menuItem,
    linkStyle,
} from './Menu.style'; // Importe os estilos

import Link from "next/link";

export const Menu = () => {
    return (
        <nav style={styledMenu}>
            <ul style={wrapperMenu}>
                <li style={menuItem}>
                    <BiHome size="1.5rem" color="#38aede" />
                    <Link href="/" style={linkStyle}>
                        Home
                    </Link>
                </li>
                <li style={menuItem}>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link href="/search" style={linkStyle}>
                        Busca
                    </Link>
                </li>
                <li style={menuItem}>
                    <BiHeart size="1.5rem" color="#38aede" />
                    <Link href="/favorites" style={linkStyle}>
                        Favoritos
                    </Link>
                </li>
                <li style={menuItem}>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <Link href="/profile" style={linkStyle}>
                        Perfil
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
