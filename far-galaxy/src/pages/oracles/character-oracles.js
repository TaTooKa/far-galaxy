import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import characterOracleResults from '/src/datatables/character-oracles'

export default function characterOracles() {
  const headings = [
    {depth: 2, value: "GENERAL CHARACTERS"},
    {depth: 3, value: "NAME"},
    {depth: 3, value: "LOOK"},
    {depth: 3, value: "DISPOSITION"},
    {depth: 3, value: "CLOTHING"},
    {depth: 3, value: "GENDER"},
    {depth: 3, value: "PROFESSION / BACKGROUND"},
    {depth: 3, value: "REVEALED ASPECT"},
    {depth: 3, value: "CHARACTER GOAL"},
    {depth: 2, value: "SPECIES"},
    {depth: 2, value: "CREATURES"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      characterOracleResults[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join("");
    } else {
      // Result is built from a single table
      oracleResult = characterOracleResults[desiredElementId][Math.floor(Math.random()*characterOracleResults[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  function openAIGeneratedPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const look = document.getElementById('oracle-character-look-result').innerText;
    const disposition = document.getElementById('oracle-character-disposition-result').innerText;
    const profession = document.getElementById('oracle-character-profession-background-result').innerText;
    const clothing = document.getElementById('oracle-character-clothing-result').innerText;

    const url = "https://perchance.org/starwars-portrait?gender="+gender+"&look="+look+"&disposition="+disposition+"&profession="+profession+"&clothing="+clothing;
    window.open(url, '_blank');
  }


  return (
    <Layout title="CHARACTER ORACLES" headings={headings}>
      <Seo title="Character Oracles" />
      <div class="oracles-container">

        <h2 id="general-characters">GENERAL CHARACTERS</h2>
        <blockquote><p>Use these general oracles for any type of character.</p></blockquote>
        <h3 id="name">NAME</h3>
        <h4 id="character-name-lastname">⤷ FIRST-NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="character-name-lastname">⤷ LAST-NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-lastname-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-lastname-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="character-name-callsign">⤷ CALLSIGN</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-callsign-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-callsign-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="look">LOOK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-look-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-look-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="disposition">DISPOSITION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-disposition-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-disposition-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="clothing">CLOTHING</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-clothing-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-clothing-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gender">GENDER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-gender-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-gender-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="profession--background">PROFESSION / BACKGROUND</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-profession-background-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-profession-background-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>
        <h3 id="revealed-aspect">REVEALED ASPECT</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-revealed-aspect-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-revealed-aspect-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <blockquote><p>Use this oracle (more than once, if necessary) as you get to know a character and discover more of their moods or personality quirks.</p></blockquote>

        <h3 id="character-goal">CHARACTER GOAL</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-goal-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-goal-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h2 id="species">SPECIES</h2>

        <h3 id="known-species">KNOWN SPECIES</h3>
        <blockquote><p>Use this oracle to get a known Species from the <i>Star Wars Universe</i>.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-known-species-result" class="oracle-result"></span>
          <button type="button" id="oracle-known-species-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h3 id="unknown-species">UNKNOWN SPECIES</h3>
        <blockquote><p>Use these oracles to get a randomly generated Species.</p></blockquote>

        <h4 id="species-name">NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-species-name-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-species-name-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        
        <h4 id="species-traits">TRAITS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-species-traits-result" class="oracle-result combined"></span>
          <button type="button" id="oracle-species-traits-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <br/>
        <h2 id="creatures">CREATURES</h2>

        <h3 id="known-creatures">KNOWN CREATURES</h3>
        <blockquote><p>Use this oracle to get a known Creature from the <i>Star Wars Universe</i>.</p></blockquote>
        <div class="oracle-container">
          <span role="textbox" id="oracle-known-creature-result" class="oracle-result"></span>
          <button type="button" id="oracle-known-creature-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="unknown-creatures">UNKNOWN CREATURES</h3>
        <blockquote><p>Use these oracles to get a randomly generated Creature.</p></blockquote>

        <h4 id="creature-environment">ENVIRONMENT OR HABITAT</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-creature-environment-result" class="oracle-result"></span>
          <button type="button" id="oracle-creature-environment-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="creature-scale">CREATURE SCALE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-creature-scale-result" class="oracle-result"></span>
          <button type="button" id="oracle-creature-scale-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="creature-basicform">CREATURE BASIC FORM</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-creature-basicform-result" class="oracle-result"></span>
          <button type="button" id="oracle-creature-basicform-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="creature-firstlook">CREATURE FIRST LOOK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-creature-firstlook-result" class="oracle-result"></span>
          <button type="button" id="oracle-creature-firstlook-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="creature-behavior">ENCOUNTERED BEHAVIOR</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-creature-behavior-result" class="oracle-result"></span>
          <button type="button" id="oracle-creature-behavior-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h4 id="creature-revealedaspect">CREATURE REVEALED ASPECT</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-creature-revealedaspect-result" class="oracle-result"></span>
          <button type="button" id="oracle-creature-revealedaspect-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <blockquote><p>Use this oracle (more than once, if necessary) as you interact with the creature and discover more of its features and quirks.</p></blockquote>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}