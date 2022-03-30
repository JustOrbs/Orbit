// Setting up all JS packages and connecting to Discord
const Discord = require("discord.js");
require("discord-buttons")(client);
const client = new Discord.Client();


//Setting up classes for LFG posts
class RaidTeam{
    constructor(RName, RRaid){
        this.Name = RName;
        this.Raid = RRaid;
    }
    G1 = "";
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVP6Team{
    constructor(SixName, SixType){
        this.Name = SixName;
        this.Type = SixType;
    }
    G1 = "";
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVP3Team{
    constructor(ThreeName, ThreeType){
        this.Name = ThreeName;
        this.Type = ThreeType;
    }
    G1 = "";
    G2 = "";
    G3 = "";
}

class StrikeTeam{
    constructor(SName, SStrike){
        this.Name = SName;
        this.Strike = SStrike;
    }
    G1 = "";
    G2 = "";
    G3 = "";
}

client.login("UyUPArZyir-3JysyznA8uW8zs5dyzuVE");
