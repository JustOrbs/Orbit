// Setting up all JS packages and connecting to Discord
const Discord = require("discord.js");
require("discord-buttons")(client);
const client = new Discord.Client();

//Setting up classes for LFG posts
//
//
//
//
class PVE6{
    constructor(E6Name, E6Type){
        this.Name = E6Name;
        this.Type = E6Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVE3{
    constructor(E3Name, E3Type){
        this.Name = E3Name;
        this.Strike = E3Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
}

class PVP6{
    constructor(P6Name, P6Type){
        this.Name = P6Name;
        this.Type = P6Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVP3{
    constructor(P3Name, P3Type){
        this.Name = P3Name;
        this.Type = P3Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
}

client.login("UyUPArZyir-3JysyznA8uW8zs5dyzuVE");

//Creating the menus and buttons
//
//
//
//
//

mainMenu = new Discord.MessageEmbed()
    .setColor('FFA500')
    .setTitle('Orbit')
    .setDescription('Main Menu')
    .addFields(
        { name: 'Welcome to the Orbit LFG tool', value: '' },
        { name: 'Please select an option', value: '' }
)

mainMenuRow = new Discord.MessageActionRow()
    .addComponents(
        {
            type: 2,
            label: 'Create LFG Listing',
            style: 1,
            customId: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current Listings',
            style: 2,
            customId: 'viewPostMenu'
        }
)

newPostRow = new Discord.MessageActionRow()
    .addComponents(
        {
            type: 3,
            customId: 'newPostType',
            options: [
                {
                    label: '6 Player PVE',
                    value: 'PVE6',
                    description: 'Raids and any other PVE with 6 players. But mostly raids...',
                    emoji: {
                        name: 'raidLOGO',
                        id: '958815802914664458'
                    }
                },

                {
                    label: '3 Player PVE',
                    value: 'PVE3',
                    description: 'Strikes, Campaigns, Dungeons, etc...',
                    emoji: {
                        name: 'pveLOGO',
                        id: '958815784417755247'
                    }
                },

                {
                    label: '6 Player PVP',
                    value: 'PVP6',
                    description: 'Control, Iron Banner, Team Scorched, etc...',
                    emoji: {
                        name: 'crucibleLOGO',
                        id: '958815374562951168'
                    }
                },

                {
                    label: '3 Player PVP',
                    value: 'PVP3',
                    description: 'Competitive, Elimination, Trials, etc...',
                    emoji: {
                        name: 'trialsLOGO',
                        id: '958815817796042752'
                    }
                }

            ],
            placeholder: 'Choose an activity type',
            minValues: 1,
            maxValues: 1
        }
)

