import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window;
  var activeTraits = windowGlobal ? windowGlobal.localStorage.getItem("activeTraits") : "";

  const [inputs, setInputs] = useState(() => {
    const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
    const savedCharacter = JSON.parse(savedCharacterStr)
    return savedCharacter || {
      name: "",
      xpCurrent: "0",
      xpTotal: "0",
      state: "inControl",
      grit: "5",
      will: "5",
      gear: "5",
      explorationProgress: "1",
      companionshipProgress: "1",
      obligationProgress: "1",
    }
  })

  const handleChange = (event) => {
    if ( event.target.type == "number" ) {
      const name = event.target.name;
      //const value = Math.max(event.target.min, Math.min(event.target.max, Number(event.target.value)));
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } else {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    if ( event.target.name == "obligation" ) {
      const name = "obligationDescription"
      const value = event.target.alt;
      var descriptionEl = document.getElementById('obligationDescription');
      descriptionEl.innerHTML = value;
      setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    // Traits 
    var traitsContainerEl = document.getElementById('traits-container');
    if (!activeTraits) {
      activeTraits = "NONE YET. Pick 3 in the <a href=\"/character-traits\">TRAITS PAGE</a>.";
    }
    traitsContainerEl.innerHTML = "Your current <a href=\"/character-traits\">TRAITS</a>:<br/>"+activeTraits;

    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("character", JSON.stringify(inputs))
    }
  }

  return (
    <Layout title="CHARACTER STATS">
      <Seo title="Character Stats" />
      <form class="character-stats">

        <div class="left-side">

          <div class="first-row">
            <div class="left-col">
              <label>NAME / ALIAS <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/></label>
            </div>
            <div class="right-col">
                <span class="xp-title">XP </span><span class="curtot">current / total</span>
                <div class="input-container">
                  <input type="number" id="xpCurrent" name="xpCurrent" value={inputs.xpCurrent || ""} onChange={handleChange} />
                  <input type="number" id="xpTotal" name="xpTotal" value={inputs.xpTotal || ""} onChange={handleChange} />
                </div>
            </div>
          </div>

          <div class="state-container">
            <div class="input-container">
              <input id="inControlInput" type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.state==="inControl"}/><label for="inControlInput"> IN CONTROL</label>
              <input id="inABadSpotInput" type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.state==="inABadSpot"}/><label for="inABadSpotInput"> IN A BAD SPOT</label>
            </div>
          </div>

          <div class="stats-container">
            <div class="stat-container">
              <div class="left-col">
                <label class="stat">SMARTS <input type="number" name="smarts" value={inputs.smarts || ""} onChange={handleChange} min="1" max="99" /></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">cunning and knowledge</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">MIGHT <input type="number" name="might" value={inputs.might || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">strength and endurance</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">SWIFT <input type="number" name="swift" value={inputs.swift || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">speed and precision</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">ZEAL <input type="number" name="zeal" value={inputs.zeal || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">personality and empathy</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">GUILE <input type="number" name="guile" value={inputs.guile || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">deception and stealth</span>
              </div>
            </div>
          </div>

          <div class="stat-bar" id="grit-stat-bar">
            <span class="title">GRIT</span>
            <input type="radio" name="grit" id="grit0" value={inputs.grit0 || "0"} onChange={handleChange} checked={inputs.grit==="0"}/><label for="grit0">0</label>
            <input type="radio" name="grit" id="grit1" value={inputs.grit1 || "1"} onChange={handleChange} checked={inputs.grit==="1"}/><label for="grit1">1</label>
            <input type="radio" name="grit" id="grit2" value={inputs.grit2 || "2"} onChange={handleChange} checked={inputs.grit==="2"}/><label for="grit2">2</label>
            <input type="radio" name="grit" id="grit3" value={inputs.grit3 || "3"} onChange={handleChange} checked={inputs.grit==="3"}/><label for="grit3">3</label>
            <input type="radio" name="grit" id="grit4" value={inputs.grit4 || "4"} onChange={handleChange} checked={inputs.grit==="4"}/><label for="grit4">4</label>
            <input type="radio" name="grit" id="grit5" value={inputs.grit5 || "5"} onChange={handleChange} checked={inputs.grit==="5"}/><label for="grit5">5</label>
          </div>

          <div class="stat-bar" id="will-stat-bar">
            <span class="title">WILL</span>
            <input type="radio" name="will" id="will0" value={inputs.will0 || "0"} onChange={handleChange} checked={inputs.will==="0"}/><label for="will0">0</label>
            <input type="radio" name="will" id="will1" value={inputs.will1 || "1"} onChange={handleChange} checked={inputs.will==="1"}/><label for="will1">1</label>
            <input type="radio" name="will" id="will2" value={inputs.will2 || "2"} onChange={handleChange} checked={inputs.will==="2"}/><label for="will2">2</label>
            <input type="radio" name="will" id="will3" value={inputs.will3 || "3"} onChange={handleChange} checked={inputs.will==="3"}/><label for="will3">3</label>
            <input type="radio" name="will" id="will4" value={inputs.will4 || "4"} onChange={handleChange} checked={inputs.will==="4"}/><label for="will4">4</label>
            <input type="radio" name="will" id="will5" value={inputs.will5 || "5"} onChange={handleChange} checked={inputs.will==="5"}/><label for="will5">5</label>
          </div>

          <div class="stat-bar" id="gear-stat-bar">
            <span class="title">GEAR</span>
            <input type="radio" name="gear" id="gear0" value={inputs.gear0 || "0"} onChange={handleChange} checked={inputs.gear==="0"}/><label for="gear0">0</label>
            <input type="radio" name="gear" id="gear1" value={inputs.gear1 || "1"} onChange={handleChange} checked={inputs.gear==="1"}/><label for="gear1">1</label>
            <input type="radio" name="gear" id="gear2" value={inputs.gear2 || "2"} onChange={handleChange} checked={inputs.gear==="2"}/><label for="gear2">2</label>
            <input type="radio" name="gear" id="gear3" value={inputs.gear3 || "3"} onChange={handleChange} checked={inputs.gear==="3"}/><label for="gear3">3</label>
            <input type="radio" name="gear" id="gear4" value={inputs.gear4 || "4"} onChange={handleChange} checked={inputs.gear==="4"}/><label for="gear4">4</label>
            <input type="radio" name="gear" id="gear5" value={inputs.gear5 || "5"} onChange={handleChange} checked={inputs.gear==="5"}/><label for="gear5">5</label>
          </div>
        </div>

        <div id="traits-container"></div>

        <div class="right-side">

          <div class="character-arc-container">
            <div class="character-arc-header">
              <span class="character-arc-title">CHARACTER ARC</span>
            </div>
            <div class="exploration-container arc-container">
              <span class="exploration-title arc-subtitle">EXPLORATION</span>
              <label class="exploration-progress arc-progress">PROGRESS <input type="number" name="explorationProgress" value={inputs.explorationProgress || ""} onChange={handleChange} min="1" max="99"/></label>
            </div>
            <div class="companionship-container arc-container">
              <span class="companionship-title arc-subtitle">COMPANIONSHIP</span>
              <label class="companionship-progress arc-progress">PROGRESS <input type="number" name="companionshipProgress" value={inputs.companionshipProgress || ""} onChange={handleChange} min="1" max="99"/></label>

              <div class="companionship-notes-container">
                <label class="companionship_notes">COMPANIONS AND CONTACTS NOTES<textarea name="companionshipNotes" value={inputs.companionshipNotes || ""} onChange={handleChange} /></label>
              </div>
            </div>
            <div class="obligation-container arc-container">
              <span class="obligation-title arc-subtitle">OBLIGATION</span>
              <label class="obligation-progress arc-progress">PROGRESS <input type="number" name="obligationProgress" value={inputs.obligationProgress || ""} onChange={handleChange} min="1" max="99"/></label>

              <div class="obligation-options">
                <span class="obligation-subtitle">Choose One:</span>
                <div class="columns">
                  <div class="col left-col">
                    <input id="obligationInput1" type="radio" name="obligation" value={inputs.obligation1 || "Addiction"} onChange={handleChange} checked={inputs.obligation==="Addiction"} alt="You are addicted to something (stims, spice, deathsticks, gambling, law-breaking, priceless antiques, etc)."/><label for="obligationInput1"> Addiction</label>
                    <input id="obligationInput2" type="radio" name="obligation" value={inputs.obligation2 || "Betrayal"} onChange={handleChange} checked={inputs.obligation==="Betrayal"} alt="You are the betrayed or the betrayer. Target seeks answers, compensation or revenge."/><label for="obligationInput2"> Betrayal</label>
                    <input id="obligationInput3" type="radio" name="obligation" value={inputs.obligation3 || "Blackmail"} onChange={handleChange} checked={inputs.obligation==="Blackmail"} alt="Someone has knowledge/proof of your dirty secrets. They demand money/favors."/><label for="obligationInput3"> Blackmail</label>
                    <input id="obligationInput4" type="radio" name="obligation" value={inputs.obligation4 || "Bounty"} onChange={handleChange} checked={inputs.obligation==="Bounty"} alt="You have a price to someone. Legal warrant or criminal contract."/><label for="obligationInput4"> Bounty</label>
                    <input id="obligationInput5" type="radio" name="obligation" value={inputs.obligation5 || "Criminal"} onChange={handleChange} checked={inputs.obligation==="Criminal"} alt="You are accused of a crime. You are on the run, burying evidence or proving innocence."/><label for="obligationInput5"> Criminal</label>
                    <input id="obligationInput6" type="radio" name="obligation" value={inputs.obligation6 || "Debt"} onChange={handleChange} checked={inputs.obligation==="Debt"} alt="You owe a lot to someone powerful. Criminal or legal corp."/><label for="obligationInput6"> Debt</label>
                  </div>
                  <div class="col right-col">
                    <input id="obligationInput7" type="radio" name="obligation" value={inputs.obligation7 || "Dutybound"} onChange={handleChange} checked={inputs.obligation==="Dutybound"} alt="You are bound to military service, a contract, the thieves' code, a ritual, etc."/><label for="obligationInput7"> Dutybound</label>
                    <input id="obligationInput8" type="radio" name="obligation" value={inputs.obligation8 || "Family"} onChange={handleChange} checked={inputs.obligation==="Family"} alt="You are tied to the care/assistance of siblings, parents, children or a family business."/><label for="obligationInput8"> Family</label>
                    <input id="obligationInput9" type="radio" name="obligation" value={inputs.obligation9 || "Favor"} onChange={handleChange} checked={inputs.obligation==="Favor"} alt="You owe a big favor to a powerful agent or friend. time to repay it."/><label for="obligationInput9"> Favor</label>
                    <input id="obligationInput10" type="radio" name="obligation" value={inputs.obligation10 || "Oath"} onChange={handleChange} checked={inputs.obligation==="Oath"} alt="You are sworn to a religion, order or moral code. It dictates your thoughts and actions."/><label for="obligationInput10"> Oath</label>
                    <input id="obligationInput11" type="radio" name="obligation" value={inputs.obligation11 || "Obsession"} onChange={handleChange} checked={inputs.obligation==="Obsession"} alt="You are fixated with something to your detriment (an icon, a movement, a practice, etc)."/><label for="obligationInput11"> Obsession</label>
                    <input id="obligationInput12" type="radio" name="obligation" value={inputs.obligation12 || "Responsibility"} onChange={handleChange} checked={inputs.obligation==="Responsibility"} alt="You have a sense of accountability for something (an individual, a culture, a minority, etc)."/><label for="obligationInput12"> Responsibility</label>
                  </div>
                </div>
              </div>
              <div class="obligation-description-container">
                <span role="textbox" name="obligationDescription" id="obligationDescription">{inputs.obligationDescription || "N/A"}</span>
              </div>
              <div class="obligation-notes-container">
                <label class="obligation_notes">OBLIGATION NOTES (Who? What?)<textarea name="obligationNotes" value={inputs.obligationNotes || ""} onChange={handleChange} /></label>
              </div>
            </div>

          </div>

          <div class="notes-container">
            <label class="equipment_notes">OTHER NOTES <textarea name="notes" value={inputs.notes || ""} onChange={handleChange} /></label>
          </div>

        </div>

        
      </form>
    </Layout>
  )
}

export default CharacterStats