import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import miscOracleResults from '/src/datatables/misc-oracles'

export default function MiscOracles() {
  const headings = [
    {depth: 2, value: "COMBAT ACTION"},
    {depth: 2, value: "TECHNOBABBLE"},
    {depth: 2, value: "RUMORS"},
    {depth: 2, value: "CARGO"},
  ]
  
  const oracleLogName = "miscOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

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

    /* Oracle LOG */
    const titleElement = inputResult.parentElement.closest('div.oracle-container').previousElementSibling;
    const oraclesLog = document.getElementById('oracles-log');
    const log = "<span class=\"log-entry\"><b>"+titleElement.innerHTML+":</b> "+oracleResult+"</span><br/>";
    oraclesLog.innerHTML += log;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
    windowGlobal.localStorage.setItem(oracleLogName, oraclesLog.innerHTML);

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="MISC ORACLES" headings={headings}>
      <Seo title="Misc Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="combat-action">COMBAT ACTION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-combat-action-result" class="oracle-result"></span>
          <button type="button" id="oracle-combat-action-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <blockquote><p>Use this oracle when you need ideas to visualize beats of combat or to generate descriptive situations in an ongoing battle other than "attack" or "defend".</p></blockquote>

        <br/>

        <h2 id="technobabble">TECHNOBABBLE</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-technobabble-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-technobabble-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="rumors">RUMORS AT THE CANTINA</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-rumors-result" class="oracle-result"></span>
          <button type="button" id="oracle-rumors-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="cargo">CARGO OF DUBIOUS LEGALITY</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-illegalcargo-result" class="oracle-result"></span>
          <button type="button" id="oracle-illegalcargo-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}