import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import bothan_art from '/src/images/bothan.jpg';
import cerean_art from '/src/images/cerean.jpg';
import duros_art from '/src/images/duros.jpg';
import human_art from '/src/images/human.jpg';
import ithorian_art from '/src/images/ithorian.jpg';
import keldor_art from '/src/images/keldor.jpg';
import mirialan_art from '/src/images/mirialan.jpg';
import moncalamari_art from '/src/images/moncalamari.jpg';
import nautolan_art from '/src/images/nautolan.jpg';
import sullustan_art from '/src/images/sullustan.jpg';
import rodian_art from '/src/images/rodian.jpg';
import togruta_art from '/src/images/togruta.jpg';
import trandoshan_art from '/src/images/trandoshan.jpg';
import twilek_art from '/src/images/twilek.jpg';
import wookie_art from '/src/images/wookie.jpg';
import zabrak_art from '/src/images/zabrak.jpg';

import blademaster_art from '/src/images/blademaster.jpg';
import bountyhunter_art from '/src/images/bountyhunter.jpg';
import brawler_art from '/src/images/brawler.jpg';
import diplomat_art from '/src/images/diplomat.jpg';
import driver_art from '/src/images/driver.jpg';
import face_art from '/src/images/face.jpg';
import gunkata_art from '/src/images/gunkata.jpg';
import infiltrator_art from '/src/images/infiltrator.jpg';
import medic_art from '/src/images/medic.jpg';
import netrunner_art from '/src/images/netrunner.jpg';
import sniper_art from '/src/images/sniper.jpg';
import streetrat_art from '/src/images/streetrat.jpg';
import armored_art from '/src/images/armored.jpg';
import brainbox_art from '/src/images/brainbox.jpg';
import cyberclaws_art from '/src/images/cyberclaws.jpg';
import cyberdeck_art from '/src/images/cyberdeck.jpg';
import mirrorshades_art from '/src/images/mirrorshades.jpg';
import neuralink_art from '/src/images/neuralink.jpg';
import retinalhud_art from '/src/images/retinalhud.jpg';
import smartcosmetics_art from '/src/images/smartcosmetics.jpg';
import specialammomod_art from '/src/images/specialammomod.jpg';
import subdermalshockers_art from '/src/images/subdermalshockers.jpg';
import synapsechip_art from '/src/images/synapsechip.jpg';
import thermopticcamo_art from '/src/images/thermopticcamo.jpg';
import wiredreflexes_art from '/src/images/wiredreflexes.jpg';
import dealer_art from '/src/images/dealer.jpg';
import fixer_art from '/src/images/fixer.jpg';
import infobroker_art from '/src/images/infobroker.jpg';
import streetdoc_art from '/src/images/streetdoc.jpg';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "SPECIES AND CULTURE"},
    {depth: 2, value: "SKILLS AND BACKGROUND"},
    {depth: 2, value: "GEAR AND TOOLS"},
]

  const [inputs, setInputs] = useState(() => {
    const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
    const savedTraits = JSON.parse(savedTraitsStr)
    return savedTraits || {
    }
  })

  const handleChange = (event) => {
    // console.log(event, event.target.name, event.target.value, event.target.checked)
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("traits", JSON.stringify(inputs))
    }

    // Update current traits textbox
    var active_traits_el = document.getElementById('active-traits-text');
    var all_traits_names_and_links = [];
    Object.keys(inputs).map((key, index) => {
        var element = document.getElementById(key);
        if ( element.type == "checkbox" ) {
            var trait_label = element.nextElementSibling;
            var trait_name = trait_label.querySelector('.trait-name').innerHTML;
            if ( element.checked == true ) {
                all_traits_names_and_links.push({'name': trait_name, 'id': key});
            }
        }
    })
    var all_traits_anchors = [];
    if ( all_traits_names_and_links.length > 0 ) {
        all_traits_names_and_links.forEach((element) => {
            all_traits_anchors.push('<a href="/character-traits#'+element.id+'">'+element.name+'</a>');
        })
        active_traits_el.innerHTML = all_traits_anchors.join(", ");
    } else {
        active_traits_el.textContent = "NONE YET. Pick 3 TRAITS to start."
    }
  }

  return (
    <Layout title="CHARACTER TRAITS" headings={headings}>
      <Seo title="Character Traits" />
      <div class="active-traits">
        <span id="active-traits-title">Your current TRAITS: </span>
        <span id="active-traits-text"></span>
      </div>

      <form class="character-traits">

        <div class="traits-container" id="species-container">
            <h2 id="species-and-culture">SPECIES AND CULTURE</h2>
            <span class="species-note">(You can pick only one of this TRAIT TYPE, and only during character creation)</span>

            <div class="trait species">
                <input id="speciesBothan" type="checkbox" name="speciesBothan" value={inputs.speciesBothan} onChange={handleChange} defaultChecked={inputs.speciesBothan}/>
                <label for="speciesBothan"> <span class="trait-name">BOTHAN</span>: Bothans are the galaxy's information brokers, adept at picking up on secrets or seeing things other species ignore. Gain a <span class="boost">BOOST</span> when attempting to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> with <span class="stat">SMARTS</span> or when trying to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">GUILE</span>.</label>
                <img src={bothan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesCerean" type="checkbox" name="speciesCerean" value={inputs.speciesCerean} onChange={handleChange} defaultChecked={inputs.speciesCerean}/>
                <label for="speciesCerean"> <span class="trait-name">CEREAN</span>: Because of their binary brains, Cereans can simultaneously pursue multiple lines of thought and have extraordinary mental aptitude. The species is also known for attention to detail as well as a cultural tendency toward extended contemplation. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">SMARTS</span>.</label>
                <img src={cerean_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesDuros" type="checkbox" name="speciesDuros" value={inputs.speciesDuros} onChange={handleChange} defaultChecked={inputs.speciesDuros}/>
                <label for="speciesDuros"> <span class="trait-name">DUROS</span>: The species most often celebrated as having granted the gift of hyperspace travel to the galaxy, Duros are revered as pilots, explorers, and navigators. Gain a <span class="boost">BOOST</span> in any action related to piloting or charting a course in space or hyperspace.</label>
                <img src={duros_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesHuman" type="checkbox" name="speciesHuman" value={inputs.speciesHuman} onChange={handleChange} defaultChecked={inputs.speciesHuman}/>
                <label for="speciesHuman"> <span class="trait-name">HUMAN</span>: Ubiquitous and dominant, humans are found throughout the galaxy. They are the least homogenous and most active species in known space. They are accepted almost everywhere and they are at least given the benefit of the doubt. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">CHARM</span>.</label>
                <img src={human_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesIthorian" type="checkbox" name="speciesIthorian" value={inputs.speciesIthorian} onChange={handleChange} defaultChecked={inputs.speciesIthorian}/>
                <label for="speciesIthorian"> <span class="trait-name">ITHORIAN</span>: Ithorians are often considered the caretakers of the galaxy. Ithorian society is based on a spiritual
connection to "Mother Jungle," the spirit of the rainforest-covered planet of Ithor. Ithorians have carried this collective mentality with them out into the stars, adapting their herdship concept to interstellar travel. Gain a <span class="boost">BOOST</span> to any attempt at pacifism, consensus or diplomacy before violence.</label>
                <img src={ithorian_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesKelDor" type="checkbox" name="speciesKelDor" value={inputs.speciesKelDor} onChange={handleChange} defaultChecked={inputs.speciesKelDor}/>
                <label for="speciesKelDor"> <span class="trait-name">KEL DOR</span>: Kel Dors must wear a specialized mask to breathe and see outside of their native planet. They treat oxygen as a dangerous atmosphere. However, Kel Dors may survive in vacuum for up to five minutes before suffering its effects. Additionally, Kel Dors have dark vision: Gain a <span class="boost">BOOST</span> for actions affected negatively by darkness. 
</label>
                <img src={keldor_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesMirialan" type="checkbox" name="speciesMirialan" value={inputs.speciesMirialan} onChange={handleChange} defaultChecked={inputs.speciesMirialan}/>
                <label for="speciesMirialan"> <span class="trait-name">MIRIALAN</span>: Mirialans undergo ritual tattooing to represent the ways that they have overcome the obstacles that fate placed before them. Mirialans are typically faster and more agile than most other species. Gain a <span class="boost">BOOST</span> when you test your <span class="stat">SWIFT</span> for any action related to athletics or acrobatics.</label>
                <img src={mirialan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesMonCalamari" type="checkbox" name="speciesMonCalamari" value={inputs.speciesMonCalamari} onChange={handleChange} defaultChecked={inputs.speciesMonCalamari}/>
                <label for="speciesMonCalamari"> <span class="trait-name">MON CALAMARI</span>: Natural amphibians, Mon Calamari can breathe and move freely underwater. The vast majority of Mon Calamari are altruistic hard workers, determined to defend what they believe is right. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a> or <a href="/prompts/recovery-prompts#relax">RELAX</a> with allies.</label>
                <img src={moncalamari_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesNautolan" type="checkbox" name="speciesNautolan" value={inputs.speciesNautolan} onChange={handleChange} defaultChecked={inputs.speciesNautolan}/>
                <label for="speciesNautolan"> <span class="trait-name">NAUTOLAN</span>: Nautolans can breathe and move freely underwater. Even though they are aquatic, they have little difficulty living in climates that would be uncomfortable for other amphibians.
They also possess tendrils which act as their major sensory organs. These are so sensitive that they can sense odors and pheromones, which can allow an observant Nautolan some idea of a target's emotional state. Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#compel">COMPEL</a>. If underwater, gain a <span class="boost">BOOST</span> to any action that tests your <span class="stat">CHARM</span> or <span class="stat">SMARTS</span>.</label>
                <img src={nautolan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesSullustan" type="checkbox" name="speciesSullustan" value={inputs.speciesSullustan} onChange={handleChange} defaultChecked={inputs.speciesSullustan}/>
                <label for="speciesSullustan"> <span class="trait-name">SULLUSTAN</span>: Born underground but with a yearning for the stars, most Sullustans find their way into space as pilots and astrogators. Affable, curious, and free-spirited, once a Sullustan has visited an area, they always remember how to return there -- they cannot get lost in a place that they have visited before. Gain a <span class="boost">BOOST</span> to any action related to finding your bearings in a place (or star sector) you've been before. Also gain a <span class="boost">BOOST</span> to any action related to astrogation or space piloting.</label>
                <img src={sullustan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesRodian" type="checkbox" name="speciesRodian" value={inputs.speciesRodian} onChange={handleChange} defaultChecked={inputs.speciesRodian}/>
                <label for="speciesRodian"> <span class="trait-name">RODIAN</span>: Rodians are born to hunt, coming from a hostile world that breeds killer instincts. They tend to be violent, tenacious, and dedicated. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a hunt, and whenever you use violence to subdue your prey. </label>
                <img src={rodian_art} class="art"/>
            </div>
            
            <div class="trait species">
                <input id="speciesTogruta" type="checkbox" name="speciesTogruta" value={inputs.speciesTogruta} onChange={handleChange} defaultChecked={inputs.speciesTogruta}/>
                <label for="speciesTogruta"> <span class="trait-name">TOGRUTA</span>: Togruta are natural pack hunters and work effectively in large groups. Every member of a community is expected to learn to work in concert with other members of the pack, contributing to everyone's overall success. Gain a <span class="boost">BOOST</span> in any action related to helping or supporting your allies. Additionally, if you ever have to <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> in a Challenge in which you are being actively helped by your allies, you can <b>MAKE PROGRESS</b> twice.</label>
                <img src={togruta_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesTrandoshan" type="checkbox" name="speciesTrandoshan" value={inputs.speciesTrandoshan} onChange={handleChange} defaultChecked={inputs.speciesTrandoshan}/>
                <label for="speciesTrandoshan"> <span class="trait-name">TRANDOSHAN</span>: Violent, brutal, and driven, the reptilian Trandoshans are known for their great strength and warlike natures. Many of these beings dedicate themselves to martial training, and some follow the path of the hunter on their native world. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">MIGHT</span>.</label>
                <img src={trandoshan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesTwiLek" type="checkbox" name="speciesTwiLek" value={inputs.speciesTwiLek} onChange={handleChange} defaultChecked={inputs.speciesTwiLek}/>
                <label for="speciesTwiLek"> <span class="trait-name">TWI'LEK</span>: These tall, thin humanoids are instantly recognizable by the tentacular “head-tails” (called lekku) that protrude from the backs of their heads. Sly, calculating beings, Twi'leks prefer to avoid trouble and stick to the shadows until an opportunity to act without undue danger to themselves presents itself. Their entrepreneurial spirit leads them to positions of influence. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">GUILE</span>.</label>
                <img src={twilek_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesWookie" type="checkbox" name="speciesWookie" value={inputs.speciesWookie} onChange={handleChange} defaultChecked={inputs.speciesWookie}/>
                <label for="speciesWookie"> <span class="trait-name">WOOKIE</span>: Wookiees are widely recognized as one of the strongest and fiercest intelligent species in the galaxy. They have many customs and traditions that revolve around honor and loyalty, including the special bond called the honor family and the sacred pledge called the life debt.
Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, <a href="/prompts/general-prompts#compel">COMPEL</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">MIGHT</span>.
</label>
                <img src={wookie_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesZabrak" type="checkbox" name="speciesZabrak" value={inputs.speciesZabrak} onChange={handleChange} defaultChecked={inputs.speciesZabrak}/>
                <label for="speciesZabrak"> <span class="trait-name">ZABRAK</span>: Zabrak are easily distinguished by their vestigial horns. They are renowned for both their inherent confidence and their martial prowess. Zabrak are renowned for their self-assurance and independent natures. The harsh conditions of their homeworld, Iridonia, led to a particularly competitive and warlike nature in its inhabitants. Thus, study in martial arts is common throughout Zabrak cultures. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">MIGHT</span>. Additionally, you can test your <span class="stat">SWIFT</span> instead of <span class="stat">MIGHT</span> for close combat actions.
</label>
                <img src={zabrak_art} class="art"/>
            </div>

        </div>

        <div class="traits-container" id="skills-container">
            <h2 id="skills-and-background">SKILLS AND BACKGROUND</h2>
            <div class="trait skill">
                <input id="skillBlademaster" type="checkbox" name="skillBlademaster" value={inputs.skillBlademaster} onChange={handleChange} defaultChecked={inputs.skillBlademaster}/>
                <label for="skillBlademaster"> <span class="trait-name">BLADEMASTER</span>: when wielding a long blade, gain a <span class="boost">BOOST</span> when you test <span class="stat">MIGHT</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</label>
                <img src={blademaster_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillBountyHunter" type="checkbox" name="skillBountyHunter" value={inputs.skillBountyHunter} onChange={handleChange} defaultChecked={inputs.skillBountyHunter}/>
                <label for="skillBountyHunter"> <span class="trait-name">BOUNTY HUNTER</span>: gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty.</label>
                <img src={bountyhunter_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillBrawler" type="checkbox" name="skillBrawler" value={inputs.skillBrawler} onChange={handleChange} defaultChecked={inputs.skillBrawler}/>
                <label for="skillBrawler"> <span class="trait-name">BRAWLER</span>: gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> as long as you are leveraging your unarmed fighting prowess.</label>
                <img src={brawler_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillDiplomat" type="checkbox" name="skillDiplomat" value={inputs.skillDiplomat} onChange={handleChange} defaultChecked={inputs.skillDiplomat}/>
                <label for="skillDiplomat"> <span class="trait-name">DIPLOMAT</span>: gain a <span class="boost">BOOST</span> for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement.</label>
                <img src={diplomat_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillDriver" type="checkbox" name="skillDriver" value={inputs.skillDriver} onChange={handleChange} defaultChecked={inputs.skillDriver}/>
                <label for="skillDriver"> <span class="trait-name">DRIVER</span>: gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> while piloting a vehicle.</label>
                <img src={driver_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillFace" type="checkbox" name="skillFace" value={inputs.skillFace} onChange={handleChange} defaultChecked={inputs.skillFace}/>
                <label for="skillFace"> <span class="trait-name">FACE</span>: gain a <span class="boost">BOOST</span> when attempting to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with leadership, coordination or planning; or when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> by testing your <span class="stat">CHARM</span>.</label>
                <img src={face_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillGunKata" type="checkbox" name="skillGunKata" value={inputs.skillGunKata} onChange={handleChange} defaultChecked={inputs.skillGunKata}/>
                <label for="skillGunKata"> <span class="trait-name">GUN KATA</span>: gain a <span class="boost">BOOST</span> whenever you use firearms in close quarters and you test your <span class="stat">SWIFT</span> to <a href="/prompts/general-prompts#clash">CLASH</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>.</label>
                <img src={gunkata_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillInfiltrator" type="checkbox" name="skillInfiltrator" value={inputs.skillInfiltrator} onChange={handleChange} defaultChecked={inputs.skillInfiltrator}/>
                <label for="skillInfiltrator"> <span class="trait-name">INFILTRATOR</span>: gain a <span class="boost">BOOST</span> for any test involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy.</label>
                <img src={infiltrator_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillMedic" type="checkbox" name="skillMedic" value={inputs.skillMedic} onChange={handleChange} defaultChecked={inputs.skillMedic}/>
                <label for="skillMedic"> <span class="trait-name">MEDIC</span>: gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a>, and if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a> for it, spend 1 less GEAR than needed to gain the same benefits.</label>
                <img src={medic_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillNetrunner" type="checkbox" name="skillNetrunner" value={inputs.skillNetrunner} onChange={handleChange} defaultChecked={inputs.skillNetrunner}/>
                <label for="skillNetrunner"> <span class="trait-name">NETRUNNER</span>: gain a <span class="boost">BOOST</span> for any test involving hacking or surfing the NET.</label>
                <img src={netrunner_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillSniper" type="checkbox" name="skillSniper" value={inputs.skillSniper} onChange={handleChange} defaultChecked={inputs.skillSniper}/>
                <label for="skillSniper"> <span class="trait-name">SNIPER</span>: while attacking at long range, gain a <span class="boost">BOOST</span> in <a href="/prompts/general-prompts#clash">CLASH</a> and <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> as long as you are <i>IN CONTROL</i>.</label>
                <img src={sniper_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillStreetRat" type="checkbox" name="skillStreetRat" value={inputs.skillStreetRat} onChange={handleChange} defaultChecked={inputs.skillStreetRat}/>
                <label for="skillStreetRat"> <span class="trait-name">STREET RAT</span>: gain a <span class="boost">BOOST</span> for any test involving lying, bluffing, stealing or cheating.</label>
                <img src={streetrat_art} class="art"/>
            </div>
        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="gear-container">
            <h2 id="gear-and-cyberware">GEAR AND CYBERWARE</h2>
            <div class="trait gear">
                <input id="gearArmored" type="checkbox" name="gearArmored" value={inputs.gearArmored} onChange={handleChange} defaultChecked={inputs.gearArmored}/>
                <label for="gearArmored"> <span class="trait-name">ARMORED</span>: <i>Shiny and Chrome</i>. gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> against physical attacks or impact damage.</label>
                <img src={armored_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearBrainbox" type="checkbox" name="gearBrainbox" value={inputs.gearBrainbox} onChange={handleChange} defaultChecked={inputs.gearBrainbox}/>
                <label for="gearBrainbox"> <span class="trait-name">BRAINBOX</span>: <i>A blackbox for your brain</i>. Ignore a <span class="fuchsia bold">FAILURE</span> when you <a href="/prompts/suffer-prompts#face-death">FACE DEATH</a>, but then <a href="/prompts/fate-prompts#pay-the-consequences">PAY THE CONSEQUENCES</a> of having your <i>mind-backup</i> reinserted in a new body, and lose the BRAINBOX.</label>
                <img src={brainbox_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearCyberClaws" type="checkbox" name="gearCyberClaws" value={inputs.gearCyberClaws} onChange={handleChange} defaultChecked={inputs.gearCyberClaws}/>
                <label for="gearCyberClaws"> <span class="trait-name">CYBERCLAWS</span>: <i>Retracting Mollies or Logans</i>. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> of violence, when you <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">MIGHT</span>.</label>
                <img src={cyberclaws_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearCyberdeck" type="checkbox" name="gearCyberdeck" value={inputs.gearCyberdeck} onChange={handleChange} defaultChecked={inputs.gearCyberdeck}/>
                <label for="gearCyberdeck"> <span class="trait-name">CYBERDECK</span>: <i>Tool of the netrunner’s trade</i>. gain a <span class="boost">BOOST</span> for any test involving hacking or surfing the NET.</label>
                <img src={cyberdeck_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearMirrorShades" type="checkbox" name="gearMirrorShades" value={inputs.gearMirrorShades} onChange={handleChange} defaultChecked={inputs.gearMirrorShades}/>
                <label for="gearMirrorShades"> <span class="trait-name">MIRRORSHADES</span>: <i>excessively cool</i>. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">CHARM</span>.</label>
                <img src={mirrorshades_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearNeuralink" type="checkbox" name="gearNeuralink" value={inputs.gearNeuralink} onChange={handleChange} defaultChecked={inputs.gearNeuralink}/>
                <label for="gearNeuralink"> <span class="trait-name">NEURALINK</span>: <i>Jack me in</i>. gain a <span class="boost">BOOST</span> when netrunning in <i>deep mode</i> (full sensory immersion).</label>
                <img src={neuralink_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearRetinalHud" type="checkbox" name="gearRetinalHud" value={inputs.gearRetinalHud} onChange={handleChange} defaultChecked={inputs.gearRetinalHud}/>
                <label for="gearRetinalHud"> <span class="trait-name">RETINAL HUD</span>: <i>Target acquired</i>. Your cybereyes project an augmented display with target acquisition, IFF software (identify friend/foe), vulnerability analysis, personal data retrieval, etc. Gain a <span class="boost">BOOST</span> whenever that would give you an advantage in action-packed situations or investigation scenes.</label>
                <img src={retinalhud_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearSmartCosmetics" type="checkbox" name="gearSmartCosmetics" value={inputs.gearSmartCosmetics} onChange={handleChange} defaultChecked={inputs.gearSmartCosmetics}/>
                <label for="gearSmartCosmetics"> <span class="trait-name">SMART COSMETICS</span>: Change hairstyle, makeup or facial features <i>at will</i>. Gain a <span class="boost">BOOST</span> when you take advantage of this to <a href="/prompts/general-prompts#compel">COMPEL</a>, <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by awing or seducing others with <span class="stat">CHARM</span>.</label>
                <img src={smartcosmetics_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearSpecialAmmoMod" type="checkbox" name="gearSpecialAmmoMod" value={inputs.gearSpecialAmmoMod} onChange={handleChange} defaultChecked={inputs.gearSpecialAmmoMod}/>
                <label for="gearSpecialAmmoMod"> <span class="trait-name">SPECIAL AMMO MOD</span>: Your firearm has a voice-activated mod that switches between <i>special ammo on demand</i>. Including but not limited to: Armor-piercing, Incendiary, Heat-seeker, Flashbang, Cyber-scrambler,  Rubber-ricochet. <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (1)</a> to gain <i>Narrative Permission</i> and a <span class="boost">BOOST</span> when you use one for a particular situation.</label>
                <img src={specialammomod_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearSubdermalShockers" type="checkbox" name="gearSubdermalShockers" value={inputs.gearSubdermalShockers} onChange={handleChange} defaultChecked={inputs.gearSubdermalShockers}/>
                <label for="gearSubdermalShockers"> <span class="trait-name">SUBDERMAL SHOCKERS</span>: <i>no touching!</i> gain a <span class="boost">BOOST</span> when you test <span class="stat">MIGHT</span> to defend yourself while you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>.</label>
                <img src={subdermalshockers_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearSynapseChip" type="checkbox" name="gearSynapseChip" value={inputs.gearSynapseChip} onChange={handleChange} defaultChecked={inputs.gearSynapseChip}/>
                <label for="gearSynapseChip"> <span class="trait-name">SYNAPSE CHIP</span>: <i>smarter on demand</i>. gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">BRAIN</span>.</label>
                <img src={synapsechip_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearThermopticCamo" type="checkbox" name="gearThermopticCamo" value={inputs.gearThermopticCamo} onChange={handleChange} defaultChecked={inputs.gearThermopticCamo}/>
                <label for="gearThermopticCamo"> <span class="trait-name">THERMOPTIC CAMO</span>: <i>now you see me</i>... gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">GUILE</span> by going almost invisible.</label>
                <img src={thermopticcamo_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearWiredReflexes" type="checkbox" name="gearWiredReflexes" value={inputs.gearWiredReflexes} onChange={handleChange} defaultChecked={inputs.gearWiredReflexes}/>
                <label for="gearWiredReflexes"> <span class="trait-name">WIRED REFLEXES</span>: <i>Sandevistan!</i> gain a <span class="boost">BOOST</span> when you test your <span class="stat">SWIFT</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>.</label>
                <img src={wiredreflexes_art} class="art"/>
            </div>
        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="contacts-container">
            <h2 id="contacts">CONTACTS</h2>
            <div class="trait contact">
                <input id="contactDealer" type="checkbox" name="contactDealer" value={inputs.contactDealer} onChange={handleChange} defaultChecked={inputs.contactDealer}/>
                <label for="contactDealer"> <span class="trait-name">DEALER</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#relax">RELAX</a> by using addictive substances or simchips, or gain an automatic <span class="blueish">SUCCESS</span> if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</label>
                <img src={dealer_art} class="art"/>
                <div class="name-container">
                    <label for="contactDealerName">NAME / ALIAS:</label>
                    <input id="contactDealerName" type="text" name="contactDealerName" value={inputs.contactDealerName} onChange={handleChange}/>
                </div>
            </div>
            <div class="trait contact">
                <input id="contactFixer" type="checkbox" name="contactFixer" value={inputs.contactFixer} onChange={handleChange} defaultChecked={inputs.contactFixer}/>
                <label for="contactFixer"> <span class="trait-name">FIXER</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> or when you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> for a contract or mission that they facilitated.</label>
                <img src={fixer_art} class="art"/>
                <div class="name-container">
                    <label for="contactFixerName">NAME / ALIAS:</label>
                    <input id="contactFixerName" type="text" name="contactFixerName" value={inputs.contactFixerName} onChange={handleChange}/>
                </div>
            </div>
            <div class="trait contact">
                <input id="contactInfoBroker" type="checkbox" name="contactInfoBroker" value={inputs.contactInfoBroker} onChange={handleChange} defaultChecked={inputs.contactInfoBroker}/>
                <label for="contactInfoBroker"> <span class="trait-name">INFOBROKER</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, or gain an automatic <span class="blueish">SUCCESS</span> if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</label>
                <img src={infobroker_art} class="art"/>
                <div class="name-container">
                    <label for="contactInfoBrokerName">NAME / ALIAS:</label>
                    <input id="contactInfoBrokerName" type="text" name="contactInfoBrokerName" value={inputs.contactInfoBrokerName} onChange={handleChange}/>
                </div>
            </div>
            <div class="trait contact">
                <input id="contactStreetDoc" type="checkbox" name="contactStreetDoc" value={inputs.contactStreetDoc} onChange={handleChange} defaultChecked={inputs.contactStreetDoc}/>
                <label for="contactStreetDoc"> <span class="trait-name">STREET DOC</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#heal">HEAL</a>, or gain an automatic SUCCESS if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (X)</a>.</label>
                <img src={streetdoc_art} class="art"/>
                <div class="name-container">
                    <label for="contactStreetDocName">NAME / ALIAS:</label>
                    <input id="contactStreetDocName" type="text" name="contactStreetDocName" value={inputs.contactStreetDocName} onChange={handleChange}/>
                </div>
            </div>
        </div>

        <br/>
        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats