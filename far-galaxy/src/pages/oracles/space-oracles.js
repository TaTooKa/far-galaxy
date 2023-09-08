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
    {depth: 3, value: "DERELICT ZONES"},
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

        <h3 id="known-starship">KNOWN STARSHIP</h3>
        <blockquote><p>Use this oracle to get a known Starship from the <i>Star Wars Universe</i>.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-known-starship-result" class="oracle-result"></span>
          <button type="button" id="oracle-known-starship-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="unknown-starship">UNKNOWN STARSHIP</h3>
        <blockquote><p>Use these oracles to randomly generate details for a starship.</p></blockquote>
     
        <h4 id="starship-type">STARSHIP TYPE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="starship-name">STARSHIP NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-name-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="starship-manufacturer">STARSHIP MANUFACTURER OR BRAND</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-manufacturer-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-manufacturer-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="starship-initialattitude">INITIAL ATTITUDE OR STATE UPON CONTACT</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-initialattitude-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-initialattitude-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="starship-firstlook">FIRST LOOK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-firstlook-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-firstlook-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="starship-mission">STARSHIP MISSION OR CURRENT ACTIVITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-starship-mission-result" class="oracle-result"></span>
          <button type="button" id="oracle-starship-mission-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="derelicts">DERELICTS</h2>

        <h3 id="derelict-location">LOCATION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-location-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-location-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="derelict-type">TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="derelict-condition">CONDITION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-condition-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-condition-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="derelict-outer-first-look">OUTER FIRST LOOK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-outer-first-look-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-outer-first-look-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="derelict-inner-first-look">INNER FIRST LOOK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-inner-first-look-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-inner-first-look-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h3 id="derelict-zones">DERELICT ZONES</h3>
        <blockquote><p>Use these oracles when exploring a derelict.<br/>
        You can create a <b>single Challenge</b> to explore the whole derelict (in which case you can transition into a new zone each time you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a>), or, if you want a longer exploration adventure, you can create a Challenge <b>for each zone inside it</b> (in which case you transition to a new zone when you completely explored the previous one and then <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL THE CHALLENGE</a>).<br/> 
        In any case, you usually begin with the access zone.</p></blockquote>
        <h3 id="derelict-zone-type">ZONE TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="derelict-zone-access">ACCESS ZONE</h3>
        <h4 id="derelict-zone-access-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-access-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-access-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-access-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-access-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-access-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-access-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-access-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-access-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-access-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-access-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-access-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="derelict-zone-community">COMMUNITY ZONE</h3>
        <h4 id="derelict-zone-community-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-community-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-community-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-community-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-community-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-community-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-community-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-community-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-community-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-community-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-community-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-community-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="derelict-zone-engineering">ENGINEERING ZONE</h3>
        <h4 id="derelict-zone-engineering-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-engineering-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-engineering-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-engineering-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-engineering-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-engineering-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-engineering-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-engineering-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-engineering-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-engineering-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-engineering-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-engineering-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="derelict-zone-living">LIVING ZONE</h3>
        <h4 id="derelict-zone-living-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-living-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-living-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-living-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-living-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-living-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-living-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-living-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-living-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-living-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-living-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-living-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="derelict-zone-medical">MEDICAL ZONE</h3>
        <h4 id="derelict-zone-medical-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-medical-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-medical-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-medical-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-medical-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-medical-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-medical-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-medical-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-medical-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-medical-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-medical-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-medical-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="derelict-zone-operations">OPERATIONS ZONE</h3>
        <h4 id="derelict-zone-operations-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-operations-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-operations-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-operations-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-operations-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-operations-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-operations-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-operations-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-operations-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-operations-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-operations-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-operations-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        
        <br/>
        <h3 id="derelict-zone-production">PRODUCTION ZONE</h3>
        <h4 id="derelict-zone-production-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-production-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-production-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-production-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-production-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-production-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-production-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-production-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-production-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-production-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-production-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-production-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        
        <br/>
        <h3 id="derelict-zone-research">RESEARCH ZONE</h3>
        <h4 id="derelict-zone-research-area">⤷ AREA</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-research-area-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-research-area-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-research-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-research-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-research-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-research-peril">⤷ PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-research-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-research-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="derelict-zone-research-opportunity">⤷ OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-derelict-zone-research-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-derelict-zone-research-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
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