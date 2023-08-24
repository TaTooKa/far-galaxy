import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import coreOracleResults from '/src/datatables/core-oracles'

export default function CoreOracles() {
  const headings = [
    {depth: 2, value: "ACTION"},
    {depth: 2, value: "THEME"},
    {depth: 2, value: "DESCRIPTOR"},
    {depth: 2, value: "FOCUS"},
    {depth: 2, value: "STORY COMPLICATION"},
    {depth: 2, value: "STORY CLUE"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    const oracleResult = coreOracleResults[desiredElementId][Math.floor(Math.random()*coreOracleResults[desiredElementId].length)];
    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="CORE ORACLES" headings={headings}>
      <Seo title="Core Oracles" />
      <div class="oracles-container">
        <h2 id="action">ACTION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-action-result" class="oracle-result"></span>
          <button type="button" id="oracle-action-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="theme">THEME</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-theme-result" class="oracle-result"></span>
          <button type="button" id="oracle-theme-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use ACTION + THEME to get a result of something that's happening, the desire or objective of someone, the need or purpose of a challenge, etc.</p></blockquote>
        <br/>

        <h2 id="descriptor">DESCRIPTOR</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-descriptor-result" class="oracle-result"></span>
          <button type="button" id="oracle-descriptor-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="focus">FOCUS</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-focus-result" class="oracle-result"></span>
          <button type="button" id="oracle-focus-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use DESCRIPTOR + FOCUS to get a result of a particular thing or happenstance, a finding, a revealed entity or phenomenon, etc.</p></blockquote>

        <br/>
        <h2 id="story-complication">STORY COMPLICATION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-story-complication-result" class="oracle-result"></span>
          <button type="button" id="oracle-story-complication-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle when you suffer a negative consequence and you are not sure what to come up with or need some inspiration.</p></blockquote>
        <h2 id="story-clue">STORY CLUE</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-story-clue-result" class="oracle-result"></span>
          <button type="button" id="oracle-story-clue-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle when you find a clue or lead and want to get inspiration on its nature.</p></blockquote>

        <br/>
        <br/>

      </div>
    </Layout>
  );
}