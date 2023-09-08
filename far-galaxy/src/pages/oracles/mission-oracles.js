import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import missionOracleResults from '/src/datatables/mission-oracles'

export default function missionOracles() {
  const headings = [
    {depth: 2, value: "MISSIONS"},
    {depth: 3, value: "MISSION TYPE"},
    {depth: 3, value: "MISSION OBJECTIVE"},
    {depth: 3, value: "MISSION CLIENT"},
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

        <h3 id="mission-type">MISSION TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mission-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-mission-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="mission-objective">MISSION OBJECTIVE OR TARGET</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mission-objective-result" class="oracle-result"></span>
          <button type="button" id="oracle-mission-objective-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="mission-client">MISSION CLIENT OR SPONSOR</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mission-client-result" class="oracle-result"></span>
          <button type="button" id="oracle-mission-client-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}