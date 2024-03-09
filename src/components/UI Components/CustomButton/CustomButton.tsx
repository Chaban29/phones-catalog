import React, { FC } from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  children: React.ReactNode;
  to?: string;
  style?: React.CSSProperties;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  to,
  style,
  ...props
}) => {
  return (
    <Button {...props} style={style} variant='outlined' component='a' href={to}>
      {children}
    </Button>
  );
};

export { CustomButton };
