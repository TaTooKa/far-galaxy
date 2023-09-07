import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import spaceOracleResults from '/src/datatables/space-oracles'

export default function spaceOracles() {
  const headings = [
    {depth: 2, value: "SPACE ENCOUNTERS"},
    {depth: 2, value: "STAR SECTORS"},
    {depth: 2, value: "SPACE SETTLEMENTS"},
    {depth: 2, value: "SPACEBORNE HAPPENSTANCES"},
    {depth: 2, value: "STARSHIPS"},
    {depth: 2, value: "DERELICTS"},
    {depth: 2, value: "SPACE CREATURES"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      spaceOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join(" ");
    } else {
      // Result is built from a single table
      oracleResult = spaceOracleResults[desiredElementId][Math.floor(Math.random()*spaceOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="SPACE ORACLES" headings={headings}>
      <Seo title="Space Oracles" />
      <div class="oracles-container">

        <h2 id="space-encounters">SPACE ENCOUNTERS</h2>
        <blockquote><p>Use these oracles for things found in Space, or happenstances aboard a Spaceship while spaceborne.</p></blockquote>
        <h3 id="space-sightinng">SPACE SIGHTING</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-space-sighting-result" class="oracle-result"></span>
          <button type="button" id="oracle-space-sighting-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="star">STAR</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-star-result" class="oracle-result"></span>
          <button type="button" id="oracle-star-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="celestial-phenomena">OTHER CELESTIAL PHENOMENA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-celestial-phenomena-result" class="oracle-result"></span>
          <button type="button" id="oracle-celestial-phenomena-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="debris-field">DEBRIS FIELD</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-debris-field-result" class="oracle-result"></span>
          <button type="button" id="oracle-debris-field-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="star-sectors">STAR SECTORS</h2>

        <h3 id="known-sector">KNOWN STAR SECTOR</h3>
        <blockquote><p>Use this oracle to get a known Star Sector from the <i>Star Wars Universe</i>.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-known-sector-result" class="oracle-result"></span>
          <button type="button" id="oracle-known-sector-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="unknown-sector">UNKNOWN STAR SECTOR</h3>
        <blockquote><p>Use this oracle to get a randomly generated Star Sector.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-unknown-sector-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-unknown-sector-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="space-settlements">SPACE SETTLEMENTS</h2>

        <h3 id="settlement-location">SETTLEMENT LOCATION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-location-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-location-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="settlement-name">SETTLEMENT NAME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-name-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="settlement-firstlook">FIRST LOOK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-firstlook-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-firstlook-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="settlement-initialattitude">INITIAL ATTITUDE UPON CONTACT</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-initialattitude-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-initialattitude-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="settlement-authority">AUTHORITY AND LAW</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-authority-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-authority-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="settlement-projects">TRADE AND PROJECTS</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-projects-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-projects-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="settlement-trouble">TROUBLE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-settlement-trouble-result" class="oracle-result"></span>
          <button type="button" id="oracle-settlement-trouble-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="spaceborne-happenstances">SPACEBORNE HAPPENSTANCES</h2>

        <h3 id="spaceborne-peril">SPACEBORNE PERIL</h3>
        <blockquote><p>Use this oracle to generate trouble or setback while on a spaceship.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-spaceborne-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-spaceborne-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
                
        <h3 id="spaceborne-opportunity">SPACEBORNE OPPORTUNITY</h3>
        <blockquote><p>Use this oracle to generate a lucky break or unexpected advantage while on a spaceship.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-spaceborne-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-spaceborne-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="starships">STARSHIPS</h2>

        <h3 id="fleet-type">FLEET TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-fleet-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-fleet-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <blockquote><p>Use this oracle if you encounter a fleet and want to reveal its nature.</p></blockquote>

        <h3 id="starship-type">STARSHIP TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="starship-name">STARSHIP NAME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-name-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="starship-initialattitude">INITIAL ATTITUDE OR STATE UPON CONTACT</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-initialattitude-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-initialattitude-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="starship-firstlook">FIRST LOOK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-firstlook-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-firstlook-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="starship-mission">STARSHIP MISSION OR CURRENT ACTIVITY</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-mission-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-mission-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="derelicts">DERELICTS</h2>

        <br/>

        <h2 id="space-creatures">SPACE CREATURES</h2>

        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}