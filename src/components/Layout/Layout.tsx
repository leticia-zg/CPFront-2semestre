import React from 'react';
import { Menu } from '../Menu/Menu';
import layoutStyle from './Layout.style';

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={layoutStyle}>
            <main>{children}</main>
            <Menu />
        </div>
    );
};
