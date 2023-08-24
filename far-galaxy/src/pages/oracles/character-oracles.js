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
    {depth: 3, value: "FIRST IMPRESSIONS"},
    {depth: 3, value: "PROFESSION / BACKGROUND"},
    {depth: 3, value: "REVEALED ASPECT"},
    {depth: 2, value: "INTIMATE DETAILS"},
    {depth: 3, value: "VICE / ADDICTION"},
    {depth: 3, value: "TATTOO"},
    {depth: 3, value: "SEXUAL ORIENTATION"},
    {depth: 3, value: "GENDER"},
    {depth: 3, value: "FLASHY CYBERWARE"},
    {depth: 2, value: "SPECIFIC CHARACTERS"},
    {depth: 3, value: "CORPORATE ARISTOCRAT"},
    {depth: 3, value: "GANGBANGER"},
    {depth: 3, value: "LAW ENFORCEMENT"},
    {depth: 3, value: "FIXER"},
    {depth: 3, value: "MERC"},
    {depth: 3, value: "HACKER"},
    {depth: 3, value: "STREET WALKER"},
    {depth: 3, value: "CABBIE"},
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
    const profession = document.getElementById('oracle-character-profession-background-result').innerText;
    const impressions = document.getElementById('oracle-character-first-impressions-result').innerText;

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedCorporatePortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Corporate Aristocrat"
    const look = "wealthy"
    const impressions = document.getElementById('oracle-character-corporate-aristocrat-mannerisms-looks-result').innerText;

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedFixerPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const trade = document.getElementById('oracle-character-fixer-profession-result').innerText;
    const profession = "Fixer ("+trade+")";
    const look = "smart"
    const impressions = encodeURIComponent(document.getElementById('oracle-character-fixer-mannerisms-looks-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedMercPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Mercenary";
    const look = "tough"
    const impressions = encodeURIComponent(document.getElementById('oracle-character-merc-mannerisms-looks-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedHackerPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Hacker";
    const look = "wired"
    const impressions = encodeURIComponent(document.getElementById('oracle-character-hacker-mannerisms-looks-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }
  
  function openAIGeneratedProstitutePortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Prostitute";
    const look = "sexy"
    const impressions = encodeURIComponent(document.getElementById('oracle-character-street-walker-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedCabbiePortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Cabbie";
    const look = document.getElementById('oracle-character-cabbie-nationality-result').innerText;
    const impressions = encodeURIComponent(document.getElementById('oracle-character-cabbie-appearance-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }  

  return (
    <Layout title="CHARACTER ORACLES" headings={headings}>
      <Seo title="Character Oracles" />
      <div class="oracles-container">

        <h2 id="general-characters">GENERAL CHARACTERS</h2>
        <blockquote><p>Use these general oracles for any type of character.</p></blockquote>
        <h3 id="name">NAME</h3>
        <h4 id="character-name-male">⤷ MALE-SOUNDING</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-male-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-male-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="character-name-female">⤷ FEMALE-SOUNDING</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-female-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-female-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="character-name-lastname">⤷ LAST-NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-lastname-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-lastname-button" class="randomize-button" onClick={handleOnClick}></button>
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
        <h3 id="first-impressions">FIRST IMPRESSIONS</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-first-impressions-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-first-impressions-button" class="randomize-button" onClick={handleOnClick}></button>
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
        <br/>
        <blockquote><p>Use this oracle (more than once, if necessary) as you get to know a character and discover more of their moods or personality quirks.</p></blockquote>
        <br/>

        <h2 id="intimate-details">INTIMATE DETAILS</h2>
        <blockquote><p>Use these oracles to generate intimate details for your character, or when you develop enough confidence or familiarity with another character in which these facts might get revealed.</p></blockquote>
        <h3 id="vice--addiction">VICE / ADDICTION</h3>
        <h4 id="vice-addiction-type">⤷ TYPE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-vice-addiction-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-vice-addiction-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="vice-addiction-level">⤷ LEVEL OF NEED</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-vice-addiction-level-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-vice-addiction-level-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="tattoo">TATTOO</h3>
        <h4 id="tattoo-design">⤷ DESIGN</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-tattoo-design-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-tattoo-design-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="tattoo-style">⤷ STYLE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-tattoo-style-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-tattoo-style-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="tattoo-location">⤷ LOCATION</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-tattoo-location-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-tattoo-location-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="sexual-orientation">SEXUAL ORIENTATION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-sexual-orientation-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-sexual-orientation-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gender">GENDER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-gender-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-gender-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h2 id="flashy-cyberware">FLASHY CYBERWARE</h2>
        <blockquote><p>If the character sports cyberware, these oracles will give them some aesthetic flavor.</p></blockquote>
        <h4 id="flashy-cyberware-type">⤷ TYPE OF UPGRADES</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-flashy-cyberware-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-flashy-cyberware-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="flashy-cyberware-cybereyes">⤷ CYBEREYES</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-flashy-cyberware-cybereyes-result" class="oracle-result"></span>
          <button type="button" id="oracle-flashy-cyberware-cybereyes-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="flashy-cyberware-cyberarms">⤷ CYBERARMS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-flashy-cyberware-cyberarms-result" class="oracle-result"></span>
          <button type="button" id="oracle-flashy-cyberware-cyberarms-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="flashy-cyberware-cyberlegs">⤷ CYBERLEGS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-flashy-cyberware-cyberlegs-result" class="oracle-result"></span>
          <button type="button" id="oracle-flashy-cyberware-cyberlegs-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="flashy-cyberware-blades">⤷ BLADES (MOLLIES OR LOGANS)</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-flashy-cyberware-blades-result" class="oracle-result"></span>
          <button type="button" id="oracle-flashy-cyberware-blades-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="flashy-cyberware-plugs">⤷ PLUGS (DATA JACK)</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-flashy-cyberware-plugs-result" class="oracle-result"></span>
          <button type="button" id="oracle-flashy-cyberware-plugs-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="specific-characters">SPECIFIC CHARACTERS</h2>
        <blockquote><p>Use these oracles to generate a character of a more specific category.</p></blockquote>

        <h3 id="corporate-aristocrat">CORPORATE ARISTOCRAT</h3>
        <h4 id="corporate-aristocrat-personality-quirk">⤷ PERSONALITY QUIRK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-corporate-aristocrat-personality-quirk-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-corporate-aristocrat-personality-quirk-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="corporate-aristocrat-position-assets">⤷ POSITION AND ASSETS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-corporate-aristocrat-position-assets-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-corporate-aristocrat-position-assets-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="corporate-aristocrat-mannerisms-looks">⤷ MANNERISMS AND LOOKS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-corporate-aristocrat-mannerisms-looks-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-corporate-aristocrat-mannerisms-looks-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="corporate-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedCorporatePortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="gangbanger">GANGBANGER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-gangbanger-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-gangbanger-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        
        <h3 id="law-enforcement">LAW ENFORCEMENT</h3>
        <h4 id="law-enforcement-type">⤷ TYPE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-law-enforcement-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-law-enforcement-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="law-enforcement-activity">⤷ ACTIVITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-law-enforcement-activity-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-law-enforcement-activity-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="law-enforcement-backup">⤷ BACKUP</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-law-enforcement-backup-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-law-enforcement-backup-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h3 id="fixer">FIXER</h3>
        <h4 id="fixer-known-callsign">⤷ KNOWN CALLSIGN</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-fixer-known-callsign-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-fixer-known-callsign-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="fixer-personality-quirk">⤷ PERSONALITY QUIRK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-fixer-personality-quirk-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-fixer-personality-quirk-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="fixer-profession">⤷ MAIN TRADE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-fixer-profession-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-fixer-profession-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="fixer-mannerisms-looks">⤷ MANNERISMS AND LOOKS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-fixer-mannerisms-looks-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-fixer-mannerisms-looks-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="fixer-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedFixerPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="merc">MERC</h3>
        <h4 id="merc-personality-quirk">⤷ PERSONALITY QUIRK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-merc-personality-quirk-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-merc-personality-quirk-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="merc-tools">⤷ TOOLS OF THE TRADE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-merc-tools-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-merc-tools-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="merc-mannerisms-looks">⤷ MANNERISMS AND LOOKS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-merc-mannerisms-looks-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-merc-mannerisms-looks-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="merc-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedMercPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="hacker">HACKER</h3>
        <h4 id="hacker-callsign">⤷ CALLSIGN</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-hacker-callsign-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-hacker-callsign-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="hacker-personality-quirk">⤷ PERSONALITY QUIRK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-hacker-personality-quirk-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-hacker-personality-quirk-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="hacker-obscure-fact">⤷ OBSCURE FACT</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-hacker-obscure-fact-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-hacker-obscure-fact-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="hacker-mannerisms-looks">⤷ MANNERISMS AND LOOKS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-hacker-mannerisms-looks-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-hacker-mannerisms-looks-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="hacker-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedHackerPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="street-walker">STREET WALKER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-street-walker-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-street-walker-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="street-walker-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedProstitutePortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="cabbie">CABBIE</h3>
        <h4 id="cabbie-appearance">⤷ APPEARANCE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-cabbie-appearance-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-cabbie-appearance-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="cabbie-nationality">⤷ NATIONALITY</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-cabbie-nationality-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-cabbie-nationality-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="cabbie-conversation-topic">⤷ CONVERSATION TOPIC</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-cabbie-conversation-topic-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-cabbie-conversation-topic-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <div id="cabbie-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedCabbiePortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}