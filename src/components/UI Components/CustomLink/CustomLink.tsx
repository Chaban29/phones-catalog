import { FC, ReactNode } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

interface ICustomLinkProps {
  children: ReactNode;
  to: string;
  className: string,
}

const CustomLink: FC<ICustomLinkProps> = ({
  children,
  to,
  ...props
}: ICustomLinkProps): JSX.Element => {
  const match = useMatch(to);
  return (
    <NavLink
      to={to}
      {...props}
      style={{
        color: match ? '#323739' : '#89939a',
      }}
    >
      {children}
    </NavLink>
  );
};

export { CustomLink };
