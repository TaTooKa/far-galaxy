import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import missionOracleResults from '/src/datatables/mission-oracles'

export default function missionOracles() {
  const headings = [
    {depth: 2, value: "MISSIONS"},
    {depth: 2, value: "PLOT HOOKS"},
    {depth: 3, value: "RUMORS ON THE STREET"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      missionOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join(" ");
    } else {
      // Result is built from a single table
      oracleResult = missionOracleResults[desiredElementId][Math.floor(Math.random()*missionOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="MISSION ORACLES" headings={headings}>
      <Seo title="Mission Oracles" />
      <div class="oracles-container">

        <h2 id="missions">MISSIONS</h2>
        <blockquote><p>Usually, runners are contacted by a <a href="/oracles/character-oracles#fixer">Fixer</a> (for jobs of all kinds) or a <i>Mr. Johnson</i> (missions for Megacorps or other big players).</p></blockquote>
        <h3 id="mission-people">TARGET IS: A PERSON</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mission-people-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-mission-people-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="mission-thing">TARGET IS: A THING</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mission-thing-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-mission-thing-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="mission-problem">MISSION PROBLEM (OR WITHHELD INFORMATION)</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mission-problem-result" class="oracle-result"></span>
          <button type="button" id="oracle-mission-problem-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h2 id="plot-hooks-and-twists">PLOT HOOKS AND TWISTS</h2>
        <h3 id="rumors-on-the-street">RUMORS ON THE STREET</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-rumors-street-result" class="oracle-result"></span>
          <button type="button" id="oracle-rumors-street-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle when you need to generate chatter or get a job offer in a different way.</p></blockquote>


 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}