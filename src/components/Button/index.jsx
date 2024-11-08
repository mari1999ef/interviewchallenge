import classNames from 'classnames';
import React from 'react';

const Button = ({onClick, className ,children }) => {
  return (
    <button onClick={onClick} className={classNames(className ,"bg-black text-white px-4 py-2.5 h-fit rounded hover:bg-gray-900")}>
      {children}
    </button>
  );
};

export default Button;