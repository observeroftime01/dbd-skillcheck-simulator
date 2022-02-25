
const toolPrices = {
    common: 1500,
    uncommon: 2000,
    rare: 2500,
    veryRare: 3000,
    ultraRare: 3500
}

const free = false
const sale = 50

const toolboxes = {
    wornOutTools: {
        rarity: 'common',
        what: 'toolbox',
        name: 'wornOutTools',
        easyName: 'Worn-Out Tools',
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.common,
        
        charges: 160,
        repairSpeed: 50,
        successZone: -10,
        description: 
        `
        <h2 class='p-item-name'>Worn-Out Tools</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>160 charges.</li>
            <li class='p-item-true'>Moderately increases repair speed. <strong>+50%</strong></li>
            <li class='p-item-true'>Slightly decreases Skill Check success zones. <strong>-10%</strong></li>
            <li class='p-item-false'>Unlocks the sabotage action.</li>
        </ul>
        `

    },
    toolbox: {
        rarity: 'uncommon',
        what: 'toolbox',
        name: 'toolbox',
        easyName: 'Toolbox',
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.uncommon,
        charges: 200,
        repairSpeed: 50,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Toolbox (Item)</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>200 charges.</li>
            <li class='p-item-true'>Moderately increases repair speed. <strong>+50%</strong></li>
            <li class='p-item-false'>Unlocks the sabotage action.</li>
        </ul>
        `
    },
    mechanicsToolbox: {
        rarity: 'rare',
        what: 'toolbox',
        name: 'mechanicsToolbox',
        easyName: `Mechanic's Toolbox`,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.rare,

        charges: 160,
        repairSpeed: 75,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Mechanic's Toolbox</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>160 charges.</li>
            <li class='p-item-true'>Considerably increases repair speed. <strong>+75%</strong></li>
            <li class='p-item-false'>Moderately reduces sabotage speed. <strong>-10%</strong></li>
            <li class='p-item-false'>Unlocks the sabotage action.</li>
        </ul>
        `
        
    },
    commodiousToolbox: {
        rarity: 'rare',
        what: 'toolbox',
        name: 'commodiousToolbox',
        easyName: 'Commodious Toolbox',
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.rare,

        charges: 320,
        repairSpeed: 50,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Commodious Toolbox</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>320 charges.</li>
            <li class='p-item-true'>Moderately increases repair speed. <strong>+50%</strong></li>
            <li class='p-item-false'>Unlocks the sabotage action.</li>
        </ul>
        `
    },
    engineersToolbox: {
        rarity: 'very rare',
        what: 'toolbox',
        name: 'engineersToolbox',
        easyName: `Engineer's Toolbox`,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.veryRare,

        charges: 160,
        repairSpeed: 100,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Engineer's Toolbox</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>160 charges.</li>
            <li class='p-item-true'>Tremendously increases repair speed. <strong>+100%</strong></li>
        </ul>
        `
    },
    alexsToolbox: {
        rarity: 'very rare',
        what: 'toolbox',
        name: 'alexsToolbox',
        easyName: `Alex's Toolbox` ,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.veryRare,

        charges: 240,
        repairSpeed: 50,
        successZone:0 ,
        description: 
        `
        <h2 class='p-item-name'>Alex's Toolbox</h2>

        <ul class='p-item-status'>
            <li class='p-item-true'>240 charges.</li>
            <li class='p-item-true'>Slightly increases repair speed. <strong>+50%</strong></li>
            <li class='p-item-false'>Moderately increases sabotage speed.<strong>+10%</strong></li>
        </ul>
        `
    },
    lunarToolbox: {
        rarity: 'common',
        what: 'toolbox',
        name: 'lunarToolbox',
        easyName: `Festive Toolbox` ,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.common,

        charges: 240,
        repairSpeed: 50,
        successZone:0 ,
        description:
            `
        <h2 class='p-item-name'>Festive Toolbox</h2>

        <ul class='p-item-status'>
            <li class='p-item-true'>240 charges.</li>
            <li class='p-item-true'>Slightly increases repair speed. <strong>+50%</strong></li>
        </ul>
        `
    }
}

const toolboxAddOns = {
    scraps: {
        stacks: false,
        rarity: 'common',
        what: 'addOn',
        name: 'scraps',
        easyName: `Scraps` ,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.common,

        charges: 80,
        repairSpeed: 0,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Scraps</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>Increases the Capacity of the Toolbox by <strong>+80</strong> charges.</li>
        </ul>
        `
    },
    cleanRag: {
        stacks: false,
        rarity: 'common',
        what: 'addOn',
        name: 'cleanRag',
        easyName: `Clean Rag` ,    
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.common,

        charges: 0,
        repairSpeed: 200,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Clean Rag</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>Slightly increases the Toolbox's repair speed. <strong>+200%</strong></li>
        </ul>
        `
    },
    wireSpool: {
        stacks: false,
        rarity: 'uncommon',
        what: 'addOn',
        name: 'wireSpool',
        easyName: `Wire Spool` ,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.uncommon,
        
        charges: 120,
        repairSpeed: 0,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Wire Spool</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>Adds 120 charges to the Toolbox.</li>
        </ul>
        `
    },
    socketSwivels: {
        stacks: false,
        rarity: 'uncommon',
        what: 'addOn',
        name: 'socketSwivels',
        easyName: `Socket Swivels` ,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.uncommon,

        charges: 0,
        repairSpeed: 300,
        successZone: 0,
        description: 
        `
        <h2 class='p-item-name'>Socket Swivels</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>Moderately increases the Toolbox repair speed. <strong>+300%</strong></li>
        </ul>
        `
    },
    brandNewPart: {
        stacks: false,
        rarity: 'ultraRare',
        what: 'addOn',
        name: 'brandNewPart',
        easyName: `Brand New Part` ,
        bloodpoints: free ? 0 : (sale / 100) * toolPrices.ultraRare,
        customProp:{
            left:5,
            tickProgression: 10,
        },
        charges: 0,
        repairSpeed: 0,
        successZone: 0,
        description:
            `
        <h2 class='p-item-name'>Brand New Part</h2>
        <ul class='p-item-status'>
            <li class='p-item-true'>Triggers <strong>5</strong> difficult Skill Checks during the Installation process.</li>
            <li class='p-item-true'>Succedding each Skill Check adds an additional <strong>10%</strong> bonus Progression, up to a maximum of <strong>50%</strong> bonus Progression,
and a combined total of up to <strong>25%</strong> Generator Progression.</li>

        </ul>
        `
    }
}

export {toolboxes, toolboxAddOns}
