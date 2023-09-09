import React from 'react';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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

  if ( !isNumeric(statValue) ) {
    statValue = "?";
  }
  
  return (
    <span>
      <span class="stat">{name}</span>
      <span class="stat-value" title="this value is defined in the character STATS page.">({statValue})</span>
    </span>
  )
};

export default Stat;