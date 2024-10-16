import { CSSProperties } from 'react';

export const styledMenu: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'fixed', // Fixa o menu na parte inferior da página
    bottom: 0,         // Alinha o menu na parte inferior
    width: '100%',     // Largura total da tela
    backgroundColor: 'white', // Adicione um fundo, se necessário
    padding: '10px 0', // Adiciona um pouco de padding
};

export const wrapperMenu: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    listStyle: 'none', // Remove os marcadores
};

export const menuItem: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 4px', // Reduz a margem entre os itens
};

export const linkStyle: CSSProperties = {
    fontSize: '0.8rem',
    color: '#1f1e31',
    textDecoration: 'none', // Remove underline
};

export const linkHover: CSSProperties = {
    color: '#38aede', // Cor ao passar o mouse
};
