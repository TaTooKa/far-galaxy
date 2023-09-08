import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import factionOracleResults from '/src/datatables/faction-oracles'

export default function factionOracles() {
  const headings = [
    {depth: 2, value: "FACTIONS"},

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
 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}