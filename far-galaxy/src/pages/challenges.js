
import React, { useState, useEffect } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function Challenges() {
  const windowGlobal = typeof window !== 'undefined' && window

  const [inputs, setInputs] = useState(() => {
    const savedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("challenges") : "{}"
    const savedChallenges = JSON.parse(savedChallengesStr)
    return savedChallenges || {}
  })

  const handleChange = (event) => {
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else if ( event.target.type == "number" ) {
      const name = event.target.name;
      //const value = Math.max(event.target.min, Math.min(event.target.max, Number(event.target.value)));
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveChallenges(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveChallenges = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("challenges", JSON.stringify(inputs))
    }
  }

  return (
    <Layout title="CHALLENGES">
      <Seo title="Challenges" />
      <h2>CHALLENGE TRACKER</h2>
      <form class="challenges">

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc1">CHALLENGE DESCRIPTION</label>
              <input id="chDesc1" type="text" name="chDesc1" class="description" value={inputs.chDesc1} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress1">PROGRESS</label>
              <input id="chProgress1" type="number" name="chProgress1" class="progress" value={inputs.chProgress1} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_1" value={inputs.chRank1_1 || "1"} onChange={handleChange} checked={inputs.chRank1==="1"}/>
              <label for="chRank1_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_2" value={inputs.chRank1_2 || "2"} onChange={handleChange} checked={inputs.chRank1==="2"}/>
              <label for="chRank1_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_3" value={inputs.chRank1_3 || "3"} onChange={handleChange} checked={inputs.chRank1==="3"}/>
              <label for="chRank1_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_4" value={inputs.chRank1_4 || "4"} onChange={handleChange} checked={inputs.chRank1==="4"}/>
              <label for="chRank1_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_5" value={inputs.chRank1_5 || "5"} onChange={handleChange} checked={inputs.chRank1==="5"}/>
              <label for="chRank1_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState1" id="chState1_1" value={inputs.chState1_1 || "1"} onChange={handleChange} checked={inputs.chState1==="1"}/>
              <label for="chState1_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState1" id="chState1_2" value={inputs.chState1_2 || "2"} onChange={handleChange} checked={inputs.chState1==="2"}/>
              <label for="chState1_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState1" id="chState1_3" value={inputs.chState1_3 || "3"} onChange={handleChange} checked={inputs.chState1==="3"}/>
              <label for="chState1_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc2">CHALLENGE DESCRIPTION</label>
              <input id="chDesc2" type="text" name="chDesc2" class="description" value={inputs.chDesc2} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress2">PROGRESS</label>
              <input id="chProgress2" type="number" name="chProgress2" class="progress" value={inputs.chProgress2} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_1" value={inputs.chRank2_1 || "1"} onChange={handleChange} checked={inputs.chRank2==="1"}/>
              <label for="chRank2_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_2" value={inputs.chRank2_2 || "2"} onChange={handleChange} checked={inputs.chRank2==="2"}/>
              <label for="chRank2_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_3" value={inputs.chRank2_3 || "3"} onChange={handleChange} checked={inputs.chRank2==="3"}/>
              <label for="chRank2_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_4" value={inputs.chRank2_4 || "4"} onChange={handleChange} checked={inputs.chRank2==="4"}/>
              <label for="chRank2_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_5" value={inputs.chRank2_5 || "5"} onChange={handleChange} checked={inputs.chRank2==="5"}/>
              <label for="chRank2_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState2" id="chState2_1" value={inputs.chState2_1 || "1"} onChange={handleChange} checked={inputs.chState2==="1"}/>
              <label for="chState2_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState2" id="chState2_2" value={inputs.chState2_2 || "2"} onChange={handleChange} checked={inputs.chState2==="2"}/>
              <label for="chState2_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState2" id="chState2_3" value={inputs.chState2_3 || "3"} onChange={handleChange} checked={inputs.chState2==="3"}/>
              <label for="chState2_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc3">CHALLENGE DESCRIPTION</label>
              <input id="chDesc3" type="text" name="chDesc3" class="description" value={inputs.chDesc3} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress3">PROGRESS</label>
              <input id="chProgress3" type="number" name="chProgress3" class="progress" value={inputs.chProgress3} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank3" id="chRank3_1" value={inputs.chRank3_1 || "1"} onChange={handleChange} checked={inputs.chRank3==="1"}/>
              <label for="chRank3_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank3" id="chRank3_2" value={inputs.chRank3_2 || "2"} onChange={handleChange} checked={inputs.chRank3==="2"}/>
              <label for="chRank3_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank3" id="chRank3_3" value={inputs.chRank3_3 || "3"} onChange={handleChange} checked={inputs.chRank3==="3"}/>
              <label for="chRank3_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank3" id="chRank3_4" value={inputs.chRank3_4 || "4"} onChange={handleChange} checked={inputs.chRank3==="4"}/>
              <label for="chRank3_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank3" id="chRank3_5" value={inputs.chRank3_5 || "5"} onChange={handleChange} checked={inputs.chRank3==="5"}/>
              <label for="chRank3_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState3" id="chState3_1" value={inputs.chState3_1 || "1"} onChange={handleChange} checked={inputs.chState3==="1"}/>
              <label for="chState3_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState3" id="chState3_2" value={inputs.chState3_2 || "2"} onChange={handleChange} checked={inputs.chState3==="2"}/>
              <label for="chState3_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState3" id="chState3_3" value={inputs.chState3_3 || "3"} onChange={handleChange} checked={inputs.chState3==="3"}/>
              <label for="chState3_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc4">CHALLENGE DESCRIPTION</label>
              <input id="chDesc4" type="text" name="chDesc4" class="description" value={inputs.chDesc4} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress4">PROGRESS</label>
              <input id="chProgress4" type="number" name="chProgress4" class="progress" value={inputs.chProgress4} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank4" id="chRank4_1" value={inputs.chRank4_1 || "1"} onChange={handleChange} checked={inputs.chRank4==="1"}/>
              <label for="chRank4_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank4" id="chRank4_2" value={inputs.chRank4_2 || "2"} onChange={handleChange} checked={inputs.chRank4==="2"}/>
              <label for="chRank4_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank4" id="chRank4_3" value={inputs.chRank4_3 || "3"} onChange={handleChange} checked={inputs.chRank4==="3"}/>
              <label for="chRank4_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank4" id="chRank4_4" value={inputs.chRank4_4 || "4"} onChange={handleChange} checked={inputs.chRank4==="4"}/>
              <label for="chRank4_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank4" id="chRank4_5" value={inputs.chRank4_5 || "5"} onChange={handleChange} checked={inputs.chRank4==="5"}/>
              <label for="chRank4_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState4" id="chState4_1" value={inputs.chState4_1 || "1"} onChange={handleChange} checked={inputs.chState4==="1"}/>
              <label for="chState4_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState4" id="chState4_2" value={inputs.chState4_2 || "2"} onChange={handleChange} checked={inputs.chState4==="2"}/>
              <label for="chState4_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState4" id="chState4_3" value={inputs.chState4_3 || "3"} onChange={handleChange} checked={inputs.chState4==="3"}/>
              <label for="chState4_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc5">CHALLENGE DESCRIPTION</label>
              <input id="chDesc5" type="text" name="chDesc5" class="description" value={inputs.chDesc5} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress5">PROGRESS</label>
              <input id="chProgress5" type="number" name="chProgress5" class="progress" value={inputs.chProgress5} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank5" id="chRank5_1" value={inputs.chRank5_1 || "1"} onChange={handleChange} checked={inputs.chRank5==="1"}/>
              <label for="chRank5_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank5" id="chRank5_2" value={inputs.chRank5_2 || "2"} onChange={handleChange} checked={inputs.chRank5==="2"}/>
              <label for="chRank5_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank5" id="chRank5_3" value={inputs.chRank5_3 || "3"} onChange={handleChange} checked={inputs.chRank5==="3"}/>
              <label for="chRank5_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank5" id="chRank5_4" value={inputs.chRank5_4 || "4"} onChange={handleChange} checked={inputs.chRank5==="4"}/>
              <label for="chRank5_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank5" id="chRank5_5" value={inputs.chRank5_5 || "5"} onChange={handleChange} checked={inputs.chRank5==="5"}/>
              <label for="chRank5_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState5" id="chState5_1" value={inputs.chState5_1 || "1"} onChange={handleChange} checked={inputs.chState5==="1"}/>
              <label for="chState5_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState5" id="chState5_2" value={inputs.chState5_2 || "2"} onChange={handleChange} checked={inputs.chState5==="2"}/>
              <label for="chState5_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState5" id="chState5_3" value={inputs.chState5_3 || "3"} onChange={handleChange} checked={inputs.chState5==="3"}/>
              <label for="chState5_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc6">CHALLENGE DESCRIPTION</label>
              <input id="chDesc6" type="text" name="chDesc6" class="description" value={inputs.chDesc6} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress6">PROGRESS</label>
              <input id="chProgress6" type="number" name="chProgress6" class="progress" value={inputs.chProgress6} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank6" id="chRank6_1" value={inputs.chRank6_1 || "1"} onChange={handleChange} checked={inputs.chRank6==="1"}/>
              <label for="chRank6_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank6" id="chRank6_2" value={inputs.chRank6_2 || "2"} onChange={handleChange} checked={inputs.chRank6==="2"}/>
              <label for="chRank6_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank6" id="chRank6_3" value={inputs.chRank6_3 || "3"} onChange={handleChange} checked={inputs.chRank6==="3"}/>
              <label for="chRank6_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank6" id="chRank6_4" value={inputs.chRank6_4 || "4"} onChange={handleChange} checked={inputs.chRank6==="4"}/>
              <label for="chRank6_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank6" id="chRank6_5" value={inputs.chRank6_5 || "5"} onChange={handleChange} checked={inputs.chRank6==="5"}/>
              <label for="chRank6_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState6" id="chState6_1" value={inputs.chState6_1 || "1"} onChange={handleChange} checked={inputs.chState6==="1"}/>
              <label for="chState6_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState6" id="chState6_2" value={inputs.chState6_2 || "2"} onChange={handleChange} checked={inputs.chState6==="2"}/>
              <label for="chState6_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState6" id="chState6_3" value={inputs.chState6_3 || "3"} onChange={handleChange} checked={inputs.chState6==="3"}/>
              <label for="chState6_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc7">CHALLENGE DESCRIPTION</label>
              <input id="chDesc7" type="text" name="chDesc7" class="description" value={inputs.chDesc7} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress7">PROGRESS</label>
              <input id="chProgress7" type="number" name="chProgress7" class="progress" value={inputs.chProgress7} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank7" id="chRank7_1" value={inputs.chRank7_1 || "1"} onChange={handleChange} checked={inputs.chRank7==="1"}/>
              <label for="chRank7_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank7" id="chRank7_2" value={inputs.chRank7_2 || "2"} onChange={handleChange} checked={inputs.chRank7==="2"}/>
              <label for="chRank7_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank7" id="chRank7_3" value={inputs.chRank7_3 || "3"} onChange={handleChange} checked={inputs.chRank7==="3"}/>
              <label for="chRank7_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank7" id="chRank7_4" value={inputs.chRank7_4 || "4"} onChange={handleChange} checked={inputs.chRank7==="4"}/>
              <label for="chRank7_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank7" id="chRank7_5" value={inputs.chRank7_5 || "5"} onChange={handleChange} checked={inputs.chRank7==="5"}/>
              <label for="chRank7_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState7" id="chState7_1" value={inputs.chState7_1 || "1"} onChange={handleChange} checked={inputs.chState7==="1"}/>
              <label for="chState7_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState7" id="chState7_2" value={inputs.chState7_2 || "2"} onChange={handleChange} checked={inputs.chState7==="2"}/>
              <label for="chState7_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState7" id="chState7_3" value={inputs.chState7_3 || "3"} onChange={handleChange} checked={inputs.chState7==="3"}/>
              <label for="chState7_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc8">CHALLENGE DESCRIPTION</label>
              <input id="chDesc8" type="text" name="chDesc8" class="description" value={inputs.chDesc8} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress8">PROGRESS</label>
              <input id="chProgress8" type="number" name="chProgress8" class="progress" value={inputs.chProgress8} onChange={handleChange} min="1" max="99"/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank8" id="chRank8_1" value={inputs.chRank8_1 || "1"} onChange={handleChange} checked={inputs.chRank8==="1"}/>
              <label for="chRank8_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank8" id="chRank8_2" value={inputs.chRank8_2 || "2"} onChange={handleChange} checked={inputs.chRank8==="2"}/>
              <label for="chRank8_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank8" id="chRank8_3" value={inputs.chRank8_3 || "3"} onChange={handleChange} checked={inputs.chRank8==="3"}/>
              <label for="chRank8_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank8" id="chRank8_4" value={inputs.chRank8_4 || "4"} onChange={handleChange} checked={inputs.chRank8==="4"}/>
              <label for="chRank8_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank8" id="chRank8_5" value={inputs.chRank8_5 || "5"} onChange={handleChange} checked={inputs.chRank8==="5"}/>
              <label for="chRank8_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
          <div class="state-buttons-container">
            <div class="state-button state-button-active">
              <input type="radio" name="chState8" id="chState8_1" value={inputs.chState8_1 || "1"} onChange={handleChange} checked={inputs.chState8==="1"}/>
              <label for="chState8_1"><span class="rank-state-active">ACTIVE</span></label>
            </div>
            <div class="state-button state-button-fulfilled">
              <input type="radio" name="chState8" id="chState8_2" value={inputs.chState8_2 || "2"} onChange={handleChange} checked={inputs.chState8==="2"}/>
              <label for="chState8_2"><span class="rank-state-fulfilled">FULFILLED</span></label>
            </div>
            <div class="state-button state-button-failed">
              <input type="radio" name="chState8" id="chState8_3" value={inputs.chState8_3 || "3"} onChange={handleChange} checked={inputs.chState8==="3"}/>
              <label for="chState8_3"><span class="rank-state-failed">FAILED</span></label>
            </div>
          </div>
        </div>

      </form>
    </Layout>

  )
}

export default Challenges

