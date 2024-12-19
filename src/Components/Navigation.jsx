// src/components/Navigation.js
import React from 'react';
import {icons} from '../constants/icons';

const Navigation = () => {
  return (
    <nav>
      {icons.map(({ id, name, icon: Icon }) => (
        <div key={id} style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
          <Icon size={20}  className='text-red-600 '/>
          <span style={{ marginLeft: 8 }}>{name}</span>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
