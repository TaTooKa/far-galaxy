import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import factionOracleResults from '/src/datatables/faction-oracles'

export default function factionOracles() {
  const headings = [
    {depth: 2, value: "FACTION TYPE"},
    {depth: 2, value: "FACTION CHARACTERISTICS"},

  ]

  const renderTemplate = (string, obj) => {
    var s = string;
    for(var prop in obj) {
      s = s.replace(new RegExp('{'+ prop +'}','g'), obj[prop]);
    }
    return s;
  }

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

    } else if (inputResult.classList.contains("template") ) {
      // Result is built using templates
      var template = factionOracleResults[desiredElementId].template[Math.floor(Math.random()*factionOracleResults[desiredElementId].template.length)];
      var params = {};

      for (const [key, value] of Object.entries(factionOracleResults[desiredElementId].tables)) {
        params[key] = factionOracleResults[desiredElementId].tables[key][Math.floor(Math.random()*factionOracleResults[desiredElementId].tables[key].length)];
      }
      oracleResult = renderTemplate(template, params);

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

        <h2 id="faction-type">FACTION TYPE</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-dominion">DOMINION</h3>
        <p>A governing power over a sector, planet or other sphere of influence.</p>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-dominion-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-dominion-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="faction-dominion-leadership">⤷ DOMINION LEADERSHIP</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-dominion-leadership-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-dominion-leadership-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-guild">GUILD</h3>
        <p>An organization of specialists over a particular trade.</p>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-guild-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-guild-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-fringegroup">FRINGE GROUP</h3>
        <p>A band of outlaws, outcasts or rogues.</p>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-fringegroup-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-fringegroup-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="faction-characteristics">FACTION CHARACTERISTICS</h2>
        <h3 id="faction-name">FACTION NAME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-name-result" class="oracle-result template"></span>
          <button type="button" id="oracle-faction-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-influence">FACTION INFLUENCE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-influence-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-influence-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-quirk">FACTION QUIRK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-quirk-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-quirk-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-project">FACTION PROJECT</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-project-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-project-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="faction-relationship">FACTION RELATIONSHIP</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-relationship-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-relationship-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <blockquote><p>Use this oracle to get a relationship with another faction or important group.</p></blockquote>

        <h3 id="faction-rumors">FACTION RUMORS</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-faction-rumors-result" class="oracle-result"></span>
          <button type="button" id="oracle-faction-rumors-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>


 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}