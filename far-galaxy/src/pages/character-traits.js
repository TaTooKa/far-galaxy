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


import bountyhunter_art from '/src/images/bountyhunter.jpg';
import commander_art from '/src/images/commander.jpg';
import diplomat_art from '/src/images/diplomat.jpg';
import forceadept_art from '/src/images/forceadept.jpg';
import forcemaster_art from '/src/images/forcemaster.jpg';
import heavy_art from '/src/images/heavy.jpg';
import infiltrator_art from '/src/images/infiltrator.jpg';
import marauder_art from '/src/images/marauder.jpg';
import mechanic_art from '/src/images/mechanic.jpg';
import medic_art from '/src/images/medic.jpg';
import mercenary_art from '/src/images/mercenary.jpg';
import pilot_art from '/src/images/pilot.jpg';
import scholar_art from '/src/images/scholar.jpg';
import scientist_art from '/src/images/scientist.jpg';
import scoundrel_art from '/src/images/scoundrel.jpg';
import scout_art from '/src/images/scout.jpg';
import sharpshooter_art from '/src/images/sharpshooter.jpg';
import slicer_art from '/src/images/slicer.jpg';
import trader_art from '/src/images/trader.jpg';

import battlearmor_art from '/src/images/battlearmor.jpg';
import cyberneticarm_art from '/src/images/cyberneticarm.jpg';
import cyberneticleg_art from '/src/images/cyberneticleg.jpg';
import disguisekit_art from '/src/images/disguisekit.jpg';
import envirosuit_art from '/src/images/envirosuit.jpg';
import heavyblaster_art from '/src/images/heavyblaster.jpg';
import jetpack_art from '/src/images/jetpack.jpg';
import lightsaber_art from '/src/images/lightsaber.jpg';
import slugthrowerrifle_art from '/src/images/slugthrowerrifle.jpg';
import survivalpack_art from '/src/images/survivalpack.jpg';
import thermaldetonators_art from '/src/images/thermaldetonators.jpg';
import utilitybelt_art from '/src/images/utilitybelt.jpg';

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
    var activeTraits = "";
    if ( all_traits_names_and_links.length > 0 ) {
        all_traits_names_and_links.forEach((element) => {
            all_traits_anchors.push('<a href="/character-traits#'+element.id+'">'+element.name+'</a>');
        })
        activeTraits = all_traits_anchors.join(", ");
        active_traits_el.innerHTML = activeTraits;
    } else {
        activeTraits = "NONE YET. Pick 3 TRAITS to start."
        active_traits_el.textContent = activeTraits;
    }
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("activeTraits", activeTraits);
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
                <label for="speciesBothan"> <span class="trait-name">BOTHAN</span>: The galaxy's information brokers, adept at picking up on secrets or seeing things other species ignore. Gain a <span class="boost">BOOST</span> when attempting to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> with <span class="stat">SMARTS</span> or when trying to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">GUILE</span>.</label>
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
                <label for="speciesHuman"> <span class="trait-name">HUMAN</span>: Ubiquitous and dominant, humans are found throughout the galaxy. They are the least homogenous and most active species in known space. They are accepted almost everywhere and they are at least given the benefit of the doubt. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">ZEAL</span>.</label>
                <img src={human_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesIthorian" type="checkbox" name="speciesIthorian" value={inputs.speciesIthorian} onChange={handleChange} defaultChecked={inputs.speciesIthorian}/>
                <label for="speciesIthorian"> <span class="trait-name">ITHORIAN</span>: Often considered the caretakers of the galaxy. Ithorian society is based on a spiritual
connection to "Mother Jungle," the spirit of the rainforest-covered planet of Ithor. Ithorians have carried this collective mentality with them out into the stars, adapting their herdship concept to interstellar travel. Gain a <span class="boost">BOOST</span> to any attempt at pacifism, consensus or diplomacy before violence.</label>
                <img src={ithorian_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesKelDor" type="checkbox" name="speciesKelDor" value={inputs.speciesKelDor} onChange={handleChange} defaultChecked={inputs.speciesKelDor}/>
                <label for="speciesKelDor"> <span class="trait-name">KEL DOR</span>: Must wear a specialized mask to breathe and see outside of their native planet. They treat oxygen as a dangerous atmosphere. However, Kel Dors may survive in vacuum for up to five minutes before suffering its effects. Additionally, Kel Dors have dark vision: Gain a <span class="boost">BOOST</span> for actions affected negatively by darkness. 
</label>
                <img src={keldor_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesMirialan" type="checkbox" name="speciesMirialan" value={inputs.speciesMirialan} onChange={handleChange} defaultChecked={inputs.speciesMirialan}/>
                <label for="speciesMirialan"> <span class="trait-name">MIRIALAN</span>: They undergo ritual tattooing to represent the ways that they have overcome the obstacles that fate placed before them. Mirialans are typically faster and more agile than most other species. Gain a <span class="boost">BOOST</span> when you test your <span class="stat">SWIFT</span> for any action related to athletics or acrobatics.</label>
                <img src={mirialan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesMonCalamari" type="checkbox" name="speciesMonCalamari" value={inputs.speciesMonCalamari} onChange={handleChange} defaultChecked={inputs.speciesMonCalamari}/>
                <label for="speciesMonCalamari"> <span class="trait-name">MON CALAMARI</span>: Natural amphibians, they can breathe and move freely underwater. The vast majority of Mon Calamari are altruistic hard workers, determined to defend what they believe is right. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a> or <a href="/prompts/recovery-prompts#relax">RELAX</a> with allies.</label>
                <img src={moncalamari_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesNautolan" type="checkbox" name="speciesNautolan" value={inputs.speciesNautolan} onChange={handleChange} defaultChecked={inputs.speciesNautolan}/>
                <label for="speciesNautolan"> <span class="trait-name">NAUTOLAN</span>: They can breathe and move freely underwater, but they have little difficulty living in climates that would be uncomfortable for other amphibians.
Nautolans also possess tendrils which act as their major sensory organs. These are so sensitive that they can sense odors and pheromones, which can allow an observant Nautolan some idea of a target's emotional state. Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#compel">COMPEL</a>. If underwater, gain a <span class="boost">BOOST</span> to any action that tests your <span class="stat">ZEAL</span> or <span class="stat">SMARTS</span>.</label>
                <img src={nautolan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesSullustan" type="checkbox" name="speciesSullustan" value={inputs.speciesSullustan} onChange={handleChange} defaultChecked={inputs.speciesSullustan}/>
                <label for="speciesSullustan"> <span class="trait-name">SULLUSTAN</span>: Born underground but with a yearning for the stars, most Sullustans find their way into space as pilots and astrogators. Affable, curious, and free-spirited, once a Sullustan has visited an area, they always remember how to return there -- they cannot get lost in a place that they have visited before. Gain a <span class="boost">BOOST</span> to any action related to finding your bearings in a place (or star sector) you've been before. Also gain a <span class="boost">BOOST</span> to any action related to astrogation or space piloting.</label>
                <img src={sullustan_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesRodian" type="checkbox" name="speciesRodian" value={inputs.speciesRodian} onChange={handleChange} defaultChecked={inputs.speciesRodian}/>
                <label for="speciesRodian"> <span class="trait-name">RODIAN</span>: Born to hunt, coming from a hostile world that breeds killer instincts. They tend to be violent, tenacious, and dedicated. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a hunt, and whenever you use violence to subdue your prey. </label>
                <img src={rodian_art} class="art"/>
            </div>
            
            <div class="trait species">
                <input id="speciesTogruta" type="checkbox" name="speciesTogruta" value={inputs.speciesTogruta} onChange={handleChange} defaultChecked={inputs.speciesTogruta}/>
                <label for="speciesTogruta"> <span class="trait-name">TOGRUTA</span>: Natural pack hunters that work effectively in large groups. Every member of a community is expected to learn to work in concert with other members of the pack, contributing to everyone's overall success. Gain a <span class="boost">BOOST</span> in any action related to helping or supporting your allies. Additionally, if you ever have to <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> in a Challenge in which you are being actively helped by your allies, you can <b>MAKE PROGRESS</b> twice.</label>
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
                <label for="speciesWookie"> <span class="trait-name">WOOKIE</span>: Widely recognized as one of the strongest and fiercest intelligent species in the galaxy. They have many customs and traditions that revolve around honor and loyalty, including the special bond called <i>the honor family</i> and the sacred pledge called <i>the life debt</i>.
Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a>, <a href="/prompts/general-prompts#compel">COMPEL</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">MIGHT</span>.
</label>
                <img src={wookie_art} class="art"/>
            </div>

            <div class="trait species">
                <input id="speciesZabrak" type="checkbox" name="speciesZabrak" value={inputs.speciesZabrak} onChange={handleChange} defaultChecked={inputs.speciesZabrak}/>
                <label for="speciesZabrak"> <span class="trait-name">ZABRAK</span>: Easily distinguished by their vestigial horns, they are renowned for both their inherent confidence and their martial prowess. Zabrak are renowned for their self-assurance and independent natures. The harsh conditions of their homeworld, Iridonia, led to a particularly competitive and warlike nature in its inhabitants. Thus, study in martial arts is common throughout Zabrak cultures. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">MIGHT</span>. Additionally, you can test your <span class="stat">SWIFT</span> instead of <span class="stat">MIGHT</span> for close combat actions.
</label>
                <img src={zabrak_art} class="art"/>
            </div>

        </div>

        <br/>
        <hr/>
        <br/>
        <br/>

        <div class="traits-container" id="skills-container">
            <h2 id="skills-and-background">SKILLS AND BACKGROUND</h2>

            <div class="trait skill">
                <input id="skillBountyhunter" type="checkbox" name="skillBountyhunter" value={inputs.skillBountyhunter} onChange={handleChange} defaultChecked={inputs.skillBountyhunter}/>
                <label for="skillBountyhunter"> <span class="trait-name">BOUNTY HUNTER</span>: Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty.</label>
                <img src={bountyhunter_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillCommander" type="checkbox" name="skillCommander" value={inputs.skillCommander} onChange={handleChange} defaultChecked={inputs.skillCommander}/>
                <label for="skillCommander"> <span class="trait-name">COMMANDER</span>: Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> to assist or support your allies, or when you <a href="/prompts/general-prompts#compel">COMPEL</a> by giving orders or by pulling your rank.</label>
                <img src={commander_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillDiplomat" type="checkbox" name="skillDiplomat" value={inputs.skillDiplomat} onChange={handleChange} defaultChecked={inputs.skillDiplomat}/>
                <label for="skillDiplomat"> <span class="trait-name">DIPLOMAT</span>: Gain a <span class="boost">BOOST</span> for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement.</label>
                <img src={diplomat_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillForceadept" type="checkbox" name="skillForceadept" value={inputs.skillForceadept} onChange={handleChange} defaultChecked={inputs.skillForceadept}/>
                <label for="skillForceadept"> <span class="trait-name">FORCE ADEPT</span>: You are versed in the ways of <i>The Force</i>. You don’t get a <span class="glitch" data-text="GLITCH">GLITCH</span> when you <a href="/prompts/general-prompts#use-the-force">USE THE FORCE</a>.</label>
                <img src={forceadept_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillForcemaster" type="checkbox" name="skillForcemaster" value={inputs.skillForcemaster} onChange={handleChange} defaultChecked={inputs.skillForcemaster}/>
                <label for="skillForcemaster"> <span class="trait-name">FORCE MASTER</span>: <i>(requires FORCE ADEPT)</i><br/>
You are very proficient in the ways of <i>The Force</i>. You gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#use-the-force">USE THE FORCE</a>, and you suffer 1 less <b>WILL</b> when you <a href="/prompts/suffer-prompts#endure-stress">ENDURE STRESS</a> by channeling <i>The Force</i>.
</label>
                <img src={forcemaster_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillHeavy" type="checkbox" name="skillHeavy" value={inputs.skillHeavy} onChange={handleChange} defaultChecked={inputs.skillHeavy}/>
                <label for="skillHeavy"> <span class="trait-name">HEAVY</span>: You are trained in using heavy assault weapons like a rotary blaster cannon or ordnance launcers. When fighting with that type of artillery, you can <a href="/prompts/general-prompts#clash">CLASH</a> using your <span class="stat">MIGHT</span> instead of your <span class="stat">SWIFT</span>.</label>
                <img src={heavy_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillInfiltrator" type="checkbox" name="skillInfiltrator" value={inputs.skillInfiltrator} onChange={handleChange} defaultChecked={inputs.skillInfiltrator}/>
                <label for="skillInfiltrator"> <span class="trait-name">INFILTRATOR</span>: gain a <span class="boost">BOOST</span> for any action involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy.</label>
                <img src={infiltrator_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillMarauder" type="checkbox" name="skillMarauder" value={inputs.skillMarauder} onChange={handleChange} defaultChecked={inputs.skillMarauder}/>
                <label for="skillMarauder"> <span class="trait-name">MARAUDER</span>: An expert of close combat and melee weaponry. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">MIGHT</span>.</label>
                <img src={marauder_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillMechanic" type="checkbox" name="skillMechanic" value={inputs.skillMechanic} onChange={handleChange} defaultChecked={inputs.skillMechanic}/>
                <label for="skillMechanic"> <span class="trait-name">MECHANIC</span>: Gain a <span class="boost">BOOST</span> for any action involving fixing heavy machinery, tinkering with appliances or vehicles, repairing ships or giving maintenance.</label>
                <img src={mechanic_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillMedic" type="checkbox" name="skillMedic" value={inputs.skillMedic} onChange={handleChange} defaultChecked={inputs.skillMedic}/>
                <label for="skillMedic"> <span class="trait-name">MEDIC</span>: Gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a> with <span class="stat">SMARTS</span>, and if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a> for it, spend 1 less <b>GEAR</b> than needed to gain the same benefits.</label>
                <img src={medic_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillMercenary" type="checkbox" name="skillMercenary" value={inputs.skillMercenary} onChange={handleChange} defaultChecked={inputs.skillMercenary}/>
                <label for="skillMercenary"> <span class="trait-name">MERCENARY</span>: You are a warfare expert. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> while in combat or in any sort of violent skirmish.</label>
                <img src={mercenary_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillPilot" type="checkbox" name="skillPilot" value={inputs.skillPilot} onChange={handleChange} defaultChecked={inputs.skillPilot}/>
                <label for="skillPilot"> <span class="trait-name">PILOT</span>: Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> while piloting a ship or any sort of vehicle.</label>
                <img src={pilot_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillScholar" type="checkbox" name="skillScholar" value={inputs.skillScholar} onChange={handleChange} defaultChecked={inputs.skillScholar}/>
                <label for="skillScholar"> <span class="trait-name">SCHOLAR</span>: You are a walking library of academic knowledge. Gain a <span class="boost">BOOST</span> in any action in which your understanding of history, politics, xenoarchaeology or galactic cultures could give you an advantage.</label>
                <img src={scholar_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillScientist" type="checkbox" name="skillScientist" value={inputs.skillScientist} onChange={handleChange} defaultChecked={inputs.skillScientist}/>
                <label for="skillScientist"> <span class="trait-name">SCIENTIST</span>: You are an expert in many fields of hard sciences. Gain a <span class="boost">BOOST</span> in any action in which your knowledge of physics, astronomy, biology or chemistry could give you an advantage.</label>
                <img src={scientist_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillScoundrel" type="checkbox" name="skillScoundrel" value={inputs.skillScoundrel} onChange={handleChange} defaultChecked={inputs.skillScoundrel}/>
                <label for="skillScoundrel"> <span class="trait-name">SCOUNDREL</span>: You get by with your quick wit and underworld savvy. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">GUILE</span>.</label>
                <img src={scoundrel_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillScout" type="checkbox" name="skillScout" value={inputs.skillScout} onChange={handleChange} defaultChecked={inputs.skillScout}/>
                <label for="skillScout"> <span class="trait-name">SCOUT</span>: You are used to being on your own in harsh environments or even behind enemy lines. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> while scouting, or in any situation in which you are alone and need to prevail by yourself.</label>
                <img src={scout_art} class="art"/>
            </div>
            
            <div class="trait skill">
                <input id="skillSharpshooter" type="checkbox" name="skillSharpshooter" value={inputs.skillSharpshooter} onChange={handleChange} defaultChecked={inputs.skillSharpshooter}/>
                <label for="skillSharpshooter"> <span class="trait-name">SHARPSHOOTER</span>: Either when you take your time to aim or when you attempt a hip-shot, you gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">SWIFT</span> to shoot when you <a href="/prompts/general-prompts#clash">CLASH</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>.</label>
                <img src={sharpshooter_art} class="art"/>
            </div>
            
            <div class="trait skill">
                <input id="skillSlicer" type="checkbox" name="skillSlicer" value={inputs.skillSlicer} onChange={handleChange} defaultChecked={inputs.skillSlicer}/>
                <label for="skillSlicer"> <span class="trait-name">SLICER</span>: Gain a <span class="boost">BOOST</span> to any action related to operating with computers or meddling with electronic security systems. Gain another <span class="boost">BOOST</span> if you spend a data spike by <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICING RESOURCES (-1)</a>.</label>
                <img src={slicer_art} class="art"/>
            </div>

            <div class="trait skill">
                <input id="skillTrader" type="checkbox" name="skillTrader" value={inputs.skillTrader} onChange={handleChange} defaultChecked={inputs.skillTrader}/>
                <label for="skillTrader"> <span class="trait-name">TRADER</span>: Gain a <span class="boost">BOOST</span> when you negotiate a deal and you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> with <span class="stat">ZEAL</span>, or when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> on anything related to galactic commerce, black markets, smuggling, corporate enterprises or similar areas of expertise.</label>
                <img src={trader_art} class="art"/>
            </div>

        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="gear-container">
            <h2 id="gear-and-tools">GEAR AND TOOLS</h2>

            <div class="trait gear">
                <input id="gearBattleArmor" type="checkbox" name="gearBattleArmor" value={inputs.gearBattleArmor} onChange={handleChange} defaultChecked={inputs.gearBattleArmor}/>
                <label for="gearBattleArmor"> <span class="trait-name">BATTLE ARMOR</span>: gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> against physical attacks or impact damage.</label>
                <img src={battlearmor_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearCyberneticarm" type="checkbox" name="gearCyberneticarm" value={inputs.gearCyberneticarm} onChange={handleChange} defaultChecked={inputs.gearCyberneticarm}/>
                <label for="gearCyberneticarm"> <span class="trait-name">CYBERNETIC ARM(S)</span>: Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">MIGHT</span>.</label>
                <img src={cyberneticarm_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearCyberneticleg" type="checkbox" name="gearCyberneticleg" value={inputs.gearCyberneticleg} onChange={handleChange} defaultChecked={inputs.gearCyberneticleg}/>
                <label for="gearCyberneticleg"> <span class="trait-name">CYBERNETIC LEG(S)</span>: Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">SWIFT</span>.</label>
                <img src={cyberneticleg_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearDisguisekit" type="checkbox" name="gearDisguisekit" value={inputs.gearDisguisekit} onChange={handleChange} defaultChecked={inputs.gearDisguisekit}/>
                <label for="gearDisguisekit"> <span class="trait-name">DISGUISE KIT</span>: You can mask yourself (or an ally) by <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICING RESOURCES (-1)</a>. The disguised individual gains a <span class="boost">BOOST</span> for any related action in which they test their <span class="stat">GUILE</span>.</label>
                <img src={disguisekit_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearEnvirosuit" type="checkbox" name="gearEnvirosuit" value={inputs.gearEnvirosuit} onChange={handleChange} defaultChecked={inputs.gearEnvirosuit}/>
                <label for="gearEnvirosuit"> <span class="trait-name">ENVIROSUIT</span>: You can survive in harsh environments like the vacuum of space or hostile atmospheres. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> in said conditions.</label>
                <img src={envirosuit_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearHeavyblaster" type="checkbox" name="gearHeavyblaster" value={inputs.gearHeavyblaster} onChange={handleChange} defaultChecked={inputs.gearHeavyblaster}/>
                <label for="gearHeavyblaster"> <span class="trait-name">HEAVY BLASTER</span>: Your weapon is stronger than normal. You can make a dent against armored targets (like vehicles or ships), and you gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> against regular targets.</label>
                <img src={heavyblaster_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearJetpack" type="checkbox" name="gearJetpack" value={inputs.gearJetpack} onChange={handleChange} defaultChecked={inputs.gearJetpack}/>
                <label for="gearJetpack"> <span class="trait-name">JETPACK</span>: You have the ability to fly or hover in place. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">SWIFT</span>.</label>
                <img src={jetpack_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearLightsaber" type="checkbox" name="gearLightsaber" value={inputs.gearLightsaber} onChange={handleChange} defaultChecked={inputs.gearLightsaber}/>
                <label for="gearLightsaber"> <span class="trait-name">LIGHTSABER</span>: An elegant weapon for a more civilized age.
Apart from being able to cut through almost anything and deflect blaster fire, if you use your Lightsaber to <a href="/prompts/general-prompts#clash">CLASH</a> and you get a <span class="blueish bold">SUCCESS</span>, you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> again. 
<br/><br/>(If you are not a <a href="/character-traits#skillForceadept">FORCE ADEPT</a> or <a href="/character-traits#skillForcemaster">FORCE MASTER</a>, you get a <span class="glitch" data-text="GLITCH">GLITCH</span> for any test involving the usage of a Lightsaber).</label>
                <img src={lightsaber_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearSlugthrowerrifle" type="checkbox" name="gearSlugthrowerrifle" value={inputs.gearSlugthrowerrifle} onChange={handleChange} defaultChecked={inputs.gearSlugthrowerrifle}/>
                <label for="gearSlugthrowerrifle"> <span class="trait-name">SLUGTHROWER RIFLE</span>: while attacking at long range, gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> as long as you are <span class="blueish bold"><i>IN CONTROL</i></span>. If you get a <span class="blueish bold">SUCCESS</span>, you can <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> again.</label>
                <img src={slugthrowerrifle_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearSurvivalpack" type="checkbox" name="gearSurvivalpack" value={inputs.gearSurvivalpack} onChange={handleChange} defaultChecked={inputs.gearSurvivalpack}/>
                <label for="gearSurvivalpack"> <span class="trait-name">SURVIVAL PACK</span>: You have tools and implements necessary to survive in harsh environments. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/recovery-prompts#heal">HEAL</a> by leveraging the contents of your survival pack. Additionally, when you <a href="/prompts/general-prompts#use-your-gear">USE YOUR GEAR</a> to produce a useful item related to survivalism, you spend 1 less <b>GEAR</b> when you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</label>
                <img src={survivalpack_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearThermaldetonators" type="checkbox" name="gearThermaldetonators" value={inputs.gearThermaldetonators} onChange={handleChange} defaultChecked={inputs.gearThermaldetonators}/>
                <label for="gearThermaldetonators"> <span class="trait-name">THERMAL DETONATORS</span>: You can <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (-1)</a> to either:
                <ul>
                    <li>gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by creating a distraction or cover with a <b>Thermal Detonator</b>.</li>
                    <li><a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> again when you successfully <a href="/prompts/general-prompts#clash">CLASH</a> by using a <b>Thermal Detonator</b>.</li>
                </ul>
</label>
                <img src={thermaldetonators_art} class="art"/>
            </div>

            <div class="trait gear">
                <input id="gearUtilitybelt" type="checkbox" name="gearUtilitybelt" value={inputs.gearUtilitybelt} onChange={handleChange} defaultChecked={inputs.gearUtilitybelt}/>
                <label for="gearUtilitybelt"> <span class="trait-name">UTILITY BELT</span>: You have tools and implements necessary to fix machinery, patch mechanisms or tamper with electronics. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by leveraging the contents of your utility belt. Additionally, when you <a href="/prompts/general-prompts#use-your-gear">USE YOUR GEAR</a> to produce a gadget or gizmo, you spend 1 less <b>GEAR</b> when you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</label>
                <img src={utilitybelt_art} class="art"/>
            </div>
 
        </div>

        <br/>
        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats