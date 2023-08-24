import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import cityOracleResults from '/src/datatables/city-oracles'

export default function cityOracles() {
  const headings = [
    {depth: 2, value: "SENSES"},
    {depth: 3, value: "SMELL"},
    {depth: 3, value: "SOUND"},
    {depth: 3, value: "SIGHT"},
    {depth: 2, value: "BUILDINGS"},
    {depth: 3, value: "BUILDING TYPE"},
    {depth: 3, value: "BUILDING FEATURE"},
    {depth: 3, value: "BUILDING INTERIOR"},
    {depth: 2, value: "CITY DETAILS"},
    {depth: 3, value: "UPCYCLED STUFF"},
    {depth: 3, value: "LEGACY INFRASTRUCTURE"},
    {depth: 3, value: "NIGHTLIFE"},
    {depth: 3, value: "SCREEN CONTENT"},
    {depth: 3, value: "ADVERTAINMENT"},
    {depth: 2, value: "VEHICLES"},
    {depth: 3, value: "TERRESTRIAL VEHICLE"},
    {depth: 3, value: "AERIAL VEHICLE"},
    {depth: 3, value: "AQUATIC VEHICLE"},
    {depth: 2, value: "OMINOUS OCCURRENCES"},
    {depth: 3, value: "STRANGE SICKNESS"},
    {depth: 3, value: "LOCAL CONFLICT"},
    {depth: 3, value: "ATYPICAL WEATHER"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      cityOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join(" ");
    } else {
      // Result is built from a single table
      oracleResult = cityOracleResults[desiredElementId][Math.floor(Math.random()*cityOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }
  
  function openAIGeneratedExterior(e) {
    e.preventDefault();
    const type = document.getElementById('oracle-building-type-result').innerText;
    const feature = document.getElementById('oracle-building-feature-result').innerText;
    const architecture = document.getElementById('oracle-building-architecture-result').innerText;

    const url = "https://perchance.org/cyberpunk-city-exterior?type="+type+"&feature="+feature+"&architecture="+architecture;
    window.open(url, '_blank');
  }
  
  function openAIGeneratedInterior(e) {
    e.preventDefault();
    const type = document.getElementById('oracle-building-type-result').innerText;
    const style = document.getElementById('oracle-building-interior-style-result').innerText;
    const state = document.getElementById('oracle-building-interior-state-result').innerText;
    const feature = document.getElementById('oracle-building-interior-feature-result').innerText;

    const url = "https://perchance.org/cyberpunk-city-interior?type="+type+"&style="+style+"&state="+state+"&feature="+feature;
    window.open(url, '_blank');
  }

  function openAIGeneratedNightclub(e) {
    e.preventDefault();
    const type = document.getElementById('oracle-bar-club-vibe-result').innerText + " nightclub";
    const style = "modern";
    const state = "security: "+ encodeURIComponent(document.getElementById('oracle-bar-club-security-result').innerText);
    const feature = "patrons and bystanders. "+encodeURIComponent(document.getElementById('oracle-bar-club-status-result').innerText);

    const url = "https://perchance.org/cyberpunk-city-interior?type="+type+"&style="+style+"&state="+state+"&feature="+feature;
    window.open(url, '_blank');
  }

  return (
    <Layout title="CITY ORACLES" headings={headings}>
      <Seo title="City Oracles" />
      <div class="oracles-container">

        <h2 id="senses">SENSES</h2>
        <blockquote><p>Use these oracles for first impressions or sensory details.</p></blockquote>
        <h3 id="smell">SMELL</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-smell-result" class="oracle-result"></span>
          <button type="button" id="oracle-smell-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="sound">SOUND</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-sound-result" class="oracle-result"></span>
          <button type="button" id="oracle-sound-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="sight">SIGHT</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-sight-result" class="oracle-result"></span>
          <button type="button" id="oracle-sight-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="buildings">BUILDINGS</h2>
        <blockquote><p>Use these oracles to generate a building with varying levels of detail.</p></blockquote>
        <h3 id="building-feature">BUILDING TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="building-feature">BUILDING FEATURE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="building-architecture">BUILDING ARCHITECTURAL STLYE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-architecture-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-architecture-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="city-exterior-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedExterior}>⤷ Get AI generated exterior image for these results</a></span>
        </div>
        <br/>
        <h3 id="building-interior">BUILDING INTERIOR</h3>
        <h4 id="building-interior-style">⤷ INTERIOR STYLE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-interior-style-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-interior-style-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="building-interior-state">⤷ INTERIOR STATE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-interior-state-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-interior-state-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="building-interior-feature">⤷ INTERIOR FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-interior-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-interior-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="building-interior-secret">⤷ INTERIOR SECRET</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-building-interior-secret-result" class="oracle-result"></span>
          <button type="button" id="oracle-building-interior-secret-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="city-interior-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedInterior}>⤷ Get AI generated interior image for these results</a></span>
        </div>
        <br/>
        <br/>

        <h2 id="city-details">CITY DETAILS</h2>
        <blockquote><p>Use these oracles to generate nuanced descriptions for more specific contexts.</p></blockquote>
        <h3 id="upcycled-stuff">UPCYCLED STUFF</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-upcycled-stuff-result" class="oracle-result"></span>
          <button type="button" id="oracle-upcycled-stuff-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="legacy-infrastructure">LEGACY INFRASTRUCTURE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-legacy-infrastructure-result" class="oracle-result"></span>
          <button type="button" id="oracle-legacy-infrastructure-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="nightlife">NIGHTLIFE</h3>
        <h4 id="bar-club-name">⤷ BAR / CLUB NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-bar-club-name-result" class="oracle-result"></span>
          <button type="button" id="oracle-bar-club-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="bar-club-status">⤷ BAR / CLUB STATUS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-bar-club-status-result" class="oracle-result"></span>
          <button type="button" id="oracle-bar-club-status-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="bar-club-security">⤷ BAR / CLUB SECURITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-bar-club-security-result" class="oracle-result"></span>
          <button type="button" id="oracle-bar-club-security-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="bar-club-vibe">⤷ BAR / CLUB VIBE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-bar-club-vibe-result" class="oracle-result"></span>
          <button type="button" id="oracle-bar-club-vibe-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="nightclub-image-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedNightclub}>⤷ Get AI generated nightclub image for these results</a></span>
        </div>
        <br/>
        <h3 id="nightclub-encounters">NIGHTCLUB ENCOUNTER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-nightclub-encounter-result" class="oracle-result"></span>
          <button type="button" id="oracle-nightclub-encounter-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle when on a nightclub and you want to generate a complication, plot hook, or both.</p></blockquote>
        <br/>

        <h3 id="screen-content">SCREEN CONTENT</h3>
        <blockquote><p>Use the following oracles to generate what's on the always-present screens, holos and AR displays everywhere.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-screen-content-result" class="oracle-result"></span>
          <button type="button" id="oracle-screen-content-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="advertainment">ADVERTAINMENT</h3>
        <h4 id="advertainment-brand">⤷ BRAND</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-advertainment-brand-result" class="oracle-result"></span>
          <button type="button" id="oracle-advertainment-brand-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="advertainment-product-name">⤷ PRODUCT NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-advertainment-product-name-result" class="oracle-result"></span>
          <button type="button" id="oracle-advertainment-product-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="advertainment-product-line">⤷ PRODUCT LINE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-advertainment-product-line-result" class="oracle-result"></span>
          <button type="button" id="oracle-advertainment-product-line-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="advertainment-marketing-style">⤷ MARKETING STYLE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-advertainment-marketing-style-result" class="oracle-result"></span>
          <button type="button" id="oracle-advertainment-marketing-style-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>

        <h2 id="vehicles">VEHICLES</h2>
        <blockquote><p>Use these oracles to generate vehicles with varying levels of detail.</p></blockquote>
        <h3 id="terrestrial-vehicle">TERRESTRIAL VEHICLE</h3>
        <h4 id="terrestrial-vehicle-type">⤷ GENERAL TYPE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-terrestrial-vehicle-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-terrestrial-vehicle-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="terrestrial-vehicle-car">⤷ CAR BRAND, TYPE AND PAINTJOB</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-terrestrial-vehicle-car-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-terrestrial-vehicle-car-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="terrestrial-vehicle-activity">⤷ ACTIVITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-terrestrial-vehicle-activity-result" class="oracle-result"></span>
          <button type="button" id="oracle-terrestrial-vehicle-activity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="terrestrial-vehicle-feature">⤷ FEATURE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-terrestrial-vehicle-feature-result" class="oracle-result"></span>
          <button type="button" id="oracle-terrestrial-vehicle-feature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="terrestrial-vehicle-condition">⤷ CONDITION</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-terrestrial-vehicle-condition-result" class="oracle-result"></span>
          <button type="button" id="oracle-terrestrial-vehicle-condition-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="aerial-vehicle">AERIAL VEHICLE</h3>
        <h4 id="aerial-vehicle-type">⤷ TYPE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-aerial-vehicle-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-aerial-vehicle-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="aerial-vehicle-activity">⤷ ACTIVITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-aerial-vehicle-activity-result" class="oracle-result"></span>
          <button type="button" id="oracle-aerial-vehicle-activity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="aquatic-vehicle">AQUATIC VEHICLE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-aquatic-vehicle-result" class="oracle-result"></span>
          <button type="button" id="oracle-aquatic-vehicle-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="ominous-occurrences">OMINOUS OCCURRENCES</h2>
        <blockquote><p>Use these oracles to generate things that are background color now, but might mean trouble later.</p></blockquote>
        <h3 id="strange-sickness">STRANGE SICKNESS</h3>
        <h4 id="strange-sickness-symptoms">⤷ SYMPTOMS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-strange-sickness-symptoms-result" class="oracle-result"></span>
          <button type="button" id="oracle-strange-sickness-symptoms-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="strange-sickness-cause">⤷ CAUSE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-strange-sickness-cause-result" class="oracle-result"></span>
          <button type="button" id="oracle-strange-sickness-cause-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="local-conflict">LOCAL CONFLICT</h3>
        <h4 id="conflict-group">⤷ CONFLICT GROUP</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-conflict-group-result" class="oracle-result"></span>
          <button type="button" id="oracle-conflict-group-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="conflict-source">⤷ CONFLICT SOURCE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-conflict-source-result" class="oracle-result"></span>
          <button type="button" id="oracle-conflict-source-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="conflict-adversary-group">⤷ ADVERSARY GROUP</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-conflict-adversary-group-result" class="oracle-result"></span>
          <button type="button" id="oracle-conflict-adversary-group-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        
        <h3 id="atypical-weather">ATYPICAL WEATHER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-atypical-weather-result" class="oracle-result"></span>
          <button type="button" id="oracle-atypical-weather-button" class="randomize-button" onClick={handleOnClick}></button>
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