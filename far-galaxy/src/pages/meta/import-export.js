import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function importExport() {
    var characterData = {};

    const windowGlobal = typeof window !== 'undefined' && window

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    function importCharacter(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            saveCharacterData(contents);
        };
        reader.readAsText(file);
    }

    function saveCharacterData(characterDataStr) {
        var loadedCharacterData = {}
        try {
            loadedCharacterData = JSON.parse(characterDataStr);
        } catch (e) {
            alert("Error while loading JSON file: "+ e);
            return;
        }
        const loadedCharacterStats = loadedCharacterData['character'];
        const loadedCharacterTraits = loadedCharacterData['traits'];
        const loadedCharacterChallenges = loadedCharacterData['challenges'];

        if ( windowGlobal ) {
            windowGlobal.localStorage.setItem("character", JSON.stringify(loadedCharacterStats));
            windowGlobal.localStorage.setItem("traits", JSON.stringify(loadedCharacterTraits));
            windowGlobal.localStorage.setItem("challenges", JSON.stringify(loadedCharacterChallenges));
        }

    }

    function exportCharacter() {
        // character stats
        const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
        const savedCharacter = JSON.parse(savedCharacterStr)
        
        // character traits
        const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
        const savedTraits = JSON.parse(savedTraitsStr)

        // challenges
        const savedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("challenges") : "{}"
        const savedChallenges = JSON.parse(savedChallengesStr)

        characterData['character'] = savedCharacter;
        characterData['traits'] = savedTraits;
        characterData['challenges'] = savedChallenges;

        var filename = savedCharacter['name'].replace(/[^a-z0-9]/gi, '_').toLowerCase();
        download(JSON.stringify(characterData), filename, 'application/json');
    }

    return (
        <Layout title="IMPORT/EXPORT">
            <Seo title="Import/Export" />
            <div class="import-export-container">
                <blockquote><p>This section allows you to import or export your character data for <i>safe backup</i>, or to "move" your game-state to another device (if, for example, you started playing in your smartphone and want to continue in your PC).<br/> You will need to copy the exported file to the new device and import it there manually.</p></blockquote>
                <h2>EXPORT CHARACTER</h2>
                <label for="export">Save current Character and game-state to a local file:</label><br/>
                <button id="export" onClick={exportCharacter}>Save</button>
                <blockquote><p>The data is saved locally as a JSON file into your default <i>Downloads</i> directory.</p></blockquote>
                <br/>
                <h2>IMPORT CHARACTER</h2>
                <label for="import">Load Character and game-state from a local file:</label><br/>
                <input type="file" id="import" accept=".json" onChange={importCharacter}/>
                <br/>
                <br/>
                <br/>
                <hr/>
                <br/>
                <blockquote><p>Note that the <b>FAR GALAXY</b> web app already saves your character stats, traits and challenges using your browser's <i>localStorage</i>. Since this is similar to <i>web cookies</i>, it will get erased if you clear the cache, uninstall the app, etc. <br/>For that reason, it is recommended that you use this IMPORT/EXPORT functionality often to backup your progress safely.</p></blockquote>
            </div>
        </Layout>
    );
}