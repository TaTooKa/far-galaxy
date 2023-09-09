import React from 'react';

const Stat = ({name}) => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
  const savedCharacter = JSON.parse(savedCharacterStr)

  var statValue = 1;

  switch (name) {
    case 'SMARTS':
      statValue = savedCharacter.smarts;
      break;
    case 'MIGHT':
      statValue = savedCharacter.might;
      break;
    case 'SWIFT':
      statValue = savedCharacter.swift;
      break;
    case 'ZEAL':
      statValue = savedCharacter.zeal;
      break;
    case 'GUILE':
      statValue = savedCharacter.guile;
      break;
  }
  
  return (
    <span>
      <span class="stat">{name}</span>
      <span class="stat-value">({statValue})</span>
    </span>
  )
};

export default Stat;