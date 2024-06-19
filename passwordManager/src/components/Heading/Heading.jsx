import React, { useEffect } from 'react';
import style from './Heading.module.css';

const Heading = () => {

  return (
    <div>
      <h3 className={style.heading}>&lt;Secure <span>Nest</span>/&gt;</h3>
    </div>
  );
};

export default Heading;
