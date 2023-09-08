import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import miscOracleResults from '/src/datatables/misc-oracles'

export default function missionOracles() {
  const headings = [
    {depth: 2, value: "COMBAT ACTION"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      miscOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join(" ");
    } else {
      // Result is built from a single table
      oracleResult = miscOracleResults[desiredElementId][Math.floor(Math.random()*miscOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="MISC ORACLES" headings={headings}>
      <Seo title="Misc Oracles" />
      <div class="oracles-container">

        <h2 id="combat-action">COMBAT ACTION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-combat-action-result" class="oracle-result"></span>
          <button type="button" id="oracle-combat-action-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle when you need ideas to visualize beats of combat or to generate descriptive situations in an ongoing battle other than "attack" or "defend".</p></blockquote>
        <br/>

  

        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}