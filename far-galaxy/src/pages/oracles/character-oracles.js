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
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    const oracleResult = characterOracleResults[desiredElementId][Math.floor(Math.random()*characterOracleResults[desiredElementId].length)];
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
        <br/>

        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}