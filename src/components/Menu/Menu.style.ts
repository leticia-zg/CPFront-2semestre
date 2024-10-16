import { CSSProperties } from 'react';

export const styledMenu: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'fixed', 
    bottom: 0,         
    width: '100%',     
    backgroundColor: 'white', 
    padding: '10px 0', 
};

export const wrapperMenu: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    listStyle: 'none', 
};

export const menuItem: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 4px', 
};

export const linkStyle: CSSProperties = {
    fontSize: '0.8rem',
    color: '#1f1e31',
    textDecoration: 'none', 
};

export const linkHover: CSSProperties = {
    color: '#38aede', 
};
