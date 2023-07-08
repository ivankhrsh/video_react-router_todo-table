import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string,
  text: string
}

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item', { 'is-active': isActive })}
    style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
  >
    {text}
  </NavLink>
);
