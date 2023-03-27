import React from 'react';
import { buttonTypes } from '../../constants/buttonTypes';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

function Button({ children, tag, variant = buttonTypes.primary, ...props }) {
  console.log(buttonTypes);
  return (
    <ButtonStyles as={tag} {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
