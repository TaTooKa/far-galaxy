import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import miscOracleResults from '/src/datatables/misc-oracles'

export default function missionOracles() {
  const headings = [
    {depth: 2, value: "COMBAT ACTION"},
    {depth: 2, value: "NEWS FEED"},
    {depth: 2, value: "AR DISPLAY"},
    {depth: 3, value: "TYPE"},
    {depth: 3, value: "AESTHETIC"},
    {depth: 3, value: "STYLE"},
    {depth: 2, value: "BUG IN THE SYSTEM"},
    {depth: 2, value: "MUSIC GENRE / SUBCULTURE STYLE"},
    {depth: 2, value: "SOCIAL MEDIA POST CONTENT"},
    {depth: 2, value: "HOT NEW WEEKLY FAD"},
    {depth: 2, value: "VID SHOW"},

  ]

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

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  return (
    <Layout title="MISC ORACLES" headings={headings}>
      <Seo title="Misc Oracles" />
      <div class="oracles-container">

        <h2 id="combat-action">COMBAT ACTION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-combat-action-result" class="oracle-result"></span>
          <button type="button" id="oracle-combat-action-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle when you need ideas to visualize beats of combat or to generate descriptive situations in an ongoing battle other than "attack" or "defend".</p></blockquote>
        <br/>

        <h2 id="news-feed">NEWS FEED</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-news-feed-result" class="oracle-result"></span>
          <button type="button" id="oracle-news-feed-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="ar-display">AR DISPLAY</h2>
        <h3 id="type">TYPE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ar-display-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-ar-display-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="aesthetic">AESTHETIC</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ar-display-aesthetic-result" class="oracle-result"></span>
          <button type="button" id="oracle-ar-display-aesthetic-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="style">STYLE</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-ar-display-style-result" class="oracle-result"></span>
          <button type="button" id="oracle-ar-display-style-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="bug-in-the-system">BUG IN THE SYSTEM</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-bug-in-the-system-result" class="oracle-result"></span>
          <button type="button" id="oracle-bug-in-the-system-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle to generate errors or mishaps in a malfunctioning system or device, or when a netrunner makes a mistake in a hacking attempt.</p></blockquote>
        <br/>

        <h2 id="music-genre--subculture-style">MUSIC GENRE / SUBCULTURE STYLE</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-music-subculture-result" class="oracle-result"></span>
          <button type="button" id="oracle-music-subculture-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="social-media-post-content">SOCIAL MEDIA POST CONTENT</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-social-media-result" class="oracle-result"></span>
          <button type="button" id="oracle-social-media-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="hot-new-weekly-fad">HOT NEW WEEKLY FAD</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-hot-new-fad-result" class="oracle-result"></span>
          <button type="button" id="oracle-hot-new-fad-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h2 id="vid-show">VID SHOW</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-vid-show-result" class="oracle-result"></span>
          <button type="button" id="oracle-vid-show-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>


        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}