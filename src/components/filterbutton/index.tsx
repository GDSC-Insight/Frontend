import React, { useState } from 'react';
import './style.css';

interface filterProps {
    text: string;
    activite: boolean;
    onClick: () => void;
}


export default function FilterButton( {text, activite, onClick} : filterProps) {

  return (
    <div id='filterButton-warpper' onClick={onClick}>
        { activite && <div className='filteroutLine-false'>
            <div className='filtertext-false'>{text}</div>
        </div>}
        { !activite && <div className='filteroutLine-true'>
            <div className='filtertext-true'>{text}</div>
        </div>}
    </div>
  )
}
