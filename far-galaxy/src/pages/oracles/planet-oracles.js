import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import planetOracleResults from '/src/datatables/planet-oracles'

export default function spaceOracles() {
  const headings = [
    {depth: 2, value: "KNOWN PLANETS"},
    {depth: 2, value: "UNKNOWN PLANETS"},
    {depth: 2, value: "PLANETSIDE SETTLEMENTS"},
    {depth: 2, value: "PLANETSIDE LOCATIONS"},

  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      planetOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join("");
    } else {
      // Result is built from a single table
      oracleResult = planetOracleResults[desiredElementId][Math.floor(Math.random()*planetOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="PLANET ORACLES" headings={headings}>
      <Seo title="Planet Oracles" />
      <div class="oracles-container">
        <blockquote><p>Use these oracles for planet generation and things found in a planet.</p></blockquote>

        <h2 id="known-planets">KNOWN PLANET</h2>
        <blockquote><p>Use this oracle to get a known Planet from the <i>Star Wars Universe</i>.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-known-planet-result" class="oracle-result"></span>
          <button type="button" id="oracle-known-planet-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="unknown-planets">UNKNOWN PLANET</h2>
        <blockquote><p>Use these oracles to randomly generate an unknown Planet.</p></blockquote>

        <h3 id="planet-type">PLANET TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-planet-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-planet-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="planet-name">PLANET NAME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-planet-name-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-planet-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="planet-atmosphere">PLANET ATMOSPHERE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-planet-atmosphere-result" class="oracle-result"></span>
          <button type="button" id="oracle-planet-atmosphere-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="planet-life">PLANET LIFE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-planet-life-result" class="oracle-result"></span>
          <button type="button" id="oracle-planet-life-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="planetside-peril">PLANETSIDE PERIL</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-planetside-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-planetside-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        
        <h3 id="planetside-opportunity">PLANETSIDE OPPORTUNITY</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-planetside-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-planetside-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h3 id="planet-features">PLANET FEATURES BY TYPE</h3>
        <blockquote><p>Use the following oracles to generate extra features for a specific type of planet.</p></blockquote>

        <h3 id="vital-world">VITAL WORLD</h3>
        <h4 id="vital-world-biome">BIOME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-vital-world-biome-result" class="oracle-result"></span>
          <button type="button" id="oracle-vital-world-biome-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="vital-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-vital-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-vital-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="vital-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-vital-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-vital-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="ocean-world">OCEAN WORLD</h3>
        <h4 id="ocean-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ocean-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-ocean-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="ocean-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ocean-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-ocean-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="rocky-world">ROCKY WORLD</h3>
        <h4 id="rocky-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-rocky-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-rocky-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="rocky-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-rocky-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-rocky-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="desert-world">DESERT WORLD</h3>
        <h4 id="desert-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-desert-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-desert-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="desert-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-desert-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-desert-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="jungle-world">JUNGLE WORLD</h3>
        <h4 id="jungle-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-jungle-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-jungle-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="jungle-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-jungle-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-jungle-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="ice-world">ICE WORLD</h3>
        <h4 id="ice-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ice-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-ice-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="ice-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ice-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-ice-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="furnace-world">FURNACE WORLD</h3>
        <h4 id="furnace-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-furnace-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-furnace-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="furnace-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-furnace-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-furnace-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="jovian-world">JOVIAN WORLD</h3>
        <h4 id="jovian-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-jovian-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-jovian-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="jovian-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-jovian-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-jovian-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="tainted-world">TAINTED WORLD</h3>
        <h4 id="tainted-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-tainted-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-tainted-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="tainted-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-tainted-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-tainted-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="shattered-world">SHATTERED WORLD</h3>
        <h4 id="shattered-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-shattered-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-shattered-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="shattered-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-shattered-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-shattered-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="grave-world">GRAVE WORLD</h3>
        <h4 id="grave-world-observed">OBSERVED FROM SPACE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-grave-world-observed-result" class="oracle-result"></span>
          <button type="button" id="oracle-grave-world-observed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="grave-world-feature">PLANETSIDE FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-grave-world-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-grave-world-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="planetside-settlements">PLANETSIDE SETTLEMENTS</h2>

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

        <h2 id="planetside-locations">PLANETSIDE LOCATIONS</h2>
        <blockquote><p>Use these oracles when exploring a strange, perilous or uncharted planetside location.<br/>
        You can create a <b>single Challenge</b> to explore the whole location (in which case you can transition into a new area each time you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a>).</p></blockquote>

        <h3 id="location-theme">LOCATION THEME</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-location-theme-result" class="oracle-result"></span>
          <button type="button" id="oracle-location-theme-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="chaotic-location">CHAOTIC LOCATION</h3>
        <p>Reality is corrupted or warped in this place.</p>
        <h4 id="chaotic-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-chaotic-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-chaotic-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="chaotic-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-chaotic-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-chaotic-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="chaotic-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-chaotic-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-chaotic-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="fortified-location">FORTIFIED LOCATION</h3>
        <p>Enemies defend this place against intruders.</p>
        <h4 id="fortified-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-fortified-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-fortified-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="fortified-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-fortified-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-fortified-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="fortified-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-fortified-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-fortified-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="haunted-location">HAUNTED LOCATION</h3>
        <p>Restless spirits are bound to this place.</p>
        <h4 id="haunted-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-haunted-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-haunted-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="haunted-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-haunted-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-haunted-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="haunted-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-haunted-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-haunted-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="infested-location">INFESTED LOCATION</h3>
        <p>Foul creatures have overrun this place.</p>
        <h4 id="infested-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-infested-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-infested-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="infested-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-infested-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-infested-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="infested-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-infested-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-infested-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="inhabited-location">INHABITED LOCATION</h3>
        <p>People have built a community in this place.</p>
        <h4 id="inhabited-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-inhabited-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-inhabited-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="inhabited-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-inhabited-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-inhabited-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="inhabited-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-inhabited-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-inhabited-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        
        <br/>
        <h3 id="mechanical-location">MECHANICAL LOCATION</h3>
        <p>Machines and technology hold sway in this place.</p>
        <h4 id="mechanical-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mechanical-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-mechanical-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="mechanical-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mechanical-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-mechanical-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="mechanical-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-mechanical-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-mechanical-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        
        <br/>
        <h3 id="ruined-location">RUINED LOCATION</h3>
        <p>Time, disaster, or war have ravaged this place.</p>
        <h4 id="ruined-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ruined-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-ruined-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="ruined-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ruined-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-ruined-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="ruined-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ruined-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-ruined-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="sacred-location">SACRED LOCATION</h3>
        <p>Worshipers glorify strange powers in this place.</p>
        <h4 id="sacred-location-feature">FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-sacred-location-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-sacred-location-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="sacred-location-peril">PERIL</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-sacred-location-peril-result" class="oracle-result"></span>
          <button type="button" id="oracle-sacred-location-peril-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="sacred-location-opportunity">OPPORTUNITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-sacred-location-opportunity-result" class="oracle-result"></span>
          <button type="button" id="oracle-sacred-location-opportunity-button" class="randomize-button" onClick={handleOnClick}></button>
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