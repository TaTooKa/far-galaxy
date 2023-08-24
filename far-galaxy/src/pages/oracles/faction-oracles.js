import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import factionOracleResults from '/src/datatables/faction-oracles'

export default function factionOracles() {
  const headings = [
    {depth: 2, value: "MEGACORPS"},
    {depth: 2, value: "STREET GANGS"},

  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      factionOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join(" ");
    } else {
      // Result is built from a single table
      oracleResult = factionOracleResults[desiredElementId][Math.floor(Math.random()*factionOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="FACTION ORACLES" headings={headings}>
      <Seo title="Faction Oracles" />
      <div class="oracles-container">

        <h2 id="megacorps">MEGACORPS</h2>
        <h3 id="megacorp-name">MEGACORP NAME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-megacorp-name-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-megacorp-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="megacorp-maneuvers">BOARDROOM MANEUVERS</h3>
        <blockquote><p>Use this oracle for whatever the corp might be planning or currently doing.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-megacorp-maneuvers-result" class="oracle-result"></span>
          <button type="button" id="oracle-megacorp-maneuvers-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="megacorp-assets">DENIABLE ASSETS</h3>
        <blockquote><p>Use this oracle for resources or unconventional tools a corporate aristocrat can bring to the table to get the job done.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-megacorp-assets-result" class="oracle-result"></span>
          <button type="button" id="oracle-megacorp-assets-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>


        <h2 id="street-gangs">STREET GANGS</h2>
        <h3 id="gang-name">GANG NAME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-gang-name-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-gang-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gang-description">GANG DESCRIPTION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-gang-description-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-gang-description-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gang-main-trade">GANG MAIN TRADE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-gang-main-trade-result" class="oracle-result"></span>
          <button type="button" id="oracle-gang-main-trade-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gang-current-activity">GANG CURRENT ACTIVITY</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-gang-current-activity-result" class="oracle-result"></span>
          <button type="button" id="oracle-gang-current-activity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gang-rumors-hooks">GANG RUMORS AND HOOKS</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-gang-rumors-hooks-result" class="oracle-result"></span>
          <button type="button" id="oracle-gang-rumors-hooks-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}