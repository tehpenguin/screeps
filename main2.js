var roleGatherer = require('role.gatherer');

var roleHarvesterlr = require('role.harvesterlr');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWall = require('role.wall');
var roleEmbryo = require('role.embryo')

var roleSoldier = require('role.soldier');
var roleMelee = require('role.melee');
var roleConquer = require('role.conquer');
var roleTrucker= require('role.trucker')
var roleRampart = require('role.rampart')
var roleSettler = require('role.settler')
var towers = require('towers')




module.exports.loop = function () {
    towers.tick()
    //Game.cpu.tickLimit()





    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
            Game.cpu.generatePixel()
            //console.log(Game.cpu.generatePixel(),"pixel generated")
        }
    }
   
    var soldiers = _.filter(Game.creeps, (creep) => creep.memory.role == 'soldier');
    console.log('Soldiers: ' + soldiers.length);

    if(soldiers.length < 0) {
        var newName = 'Soldier' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL,MOVE], newName,
            {memory: {role: 'soldier'}});
    }

    var settlers = _.filter(Game.creeps, (creep) => creep.memory.role == 'settler');
    console.log('Settlers: ' + settlers.length);

    if(settlers.length < 1) {
        var newName = 'Settler' + Game.time;
        console.log('Spawning new settler: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'settler',home: 'W52N13',upgrading: 'false'}});
    }

    var conquers = _.filter(Game.creeps, (creep) => creep.memory.role == 'conquer');
    console.log('Conquers: ' + soldiers.length);

    if(conquers.length < 0) {
        var newName = 'Conquer' + Game.time;
        console.log('Spawning new conquer: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CLAIM,MOVE], newName,
            {memory: {role: 'conquer', home:'W52N13' }});
    }

    var melees = _.filter(Game.creeps, (creep) => creep.memory.role == 'melee');
    console.log('Melees: ' + melees.length);

    if(melees.length < 0) {
        var newName = 'Melee' + Game.time;
        console.log('Spawning new melee: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([ATTACK,ATTACK,HEAL,MOVE,MOVE], newName,
            {memory: {role: 'melee'}});
    }
    var gatherers = _.filter(Game.creeps, (creep) => creep.memory.role == 'gatherer');
    console.log('Gatherers: ' + gatherers.length);
    
    if(gatherers.length < 3) {
        var newName = 'Gatherer' + Game.time;
        console.log('Spawning new gatherer: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY], newName, 
            {memory: {role: 'gatherer'}}); 

            Game.spawns['Spawn2'].spawnCreep([WORK,WORK,CARRY], newName, 
                {memory: {role: 'gatherer'}});     

            
    }

    var gatherertwos = _.filter(Game.creeps, (creep) => creep.memory.role == 'gatherertwo');
    console.log('Gatherertwos: ' + gatherertwos.length);
    
    if(gatherertwos.length < 1) {
        var newName = 'Gatherertwo' + Game.time;
        console.log('Spawning new gatherertwo: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,WORK,WORK,MOVE], newName,
            {memory: {role: 'gatherertwo'}});
    }
    var harvesterlrs = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterlr');
    console.log('HarvesterLRs: ' + harvesterlrs.length);

    if(harvesterlrs.length < 0) {
        var newName = 'HarvesterLR' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'harvesterlr',repairing: 'false'}});
    }

    var truckers = _.filter(Game.creeps, (creep) => creep.memory.role == 'trucker');
    console.log('Truckers: ' + truckers.length);

    if(truckers.length < 2) {
        var newName = 'Trucker' + Game.time;
        console.log('Spawning new trucker: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'trucker',home: 'W52N13'}});
    }

    var embryos = _.filter(Game.creeps, (creep) => creep.memory.role == 'embryo');
    console.log('Embryos: ' + embryos.length);


    
    if(embryos.length < 3) {
        var newName = 'Embryo' + Game.time;
        console.log('Spawning new embryo: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE], newName,
            {memory: {role: 'embryo',filling:'false'}});
    }

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE], newName,
            {memory: {role: 'upgrader',upgrading: 'false'}});
    }

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    if(builders.length < 1) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'builder',build:'false',home: 'W52N13'}});
    }

    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);

    if(repairers.length < 2) {
        var newName = 'Repairer' + Game.time;
        console.log('Spawning new repairer: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE], newName,
            {memory: {role: 'repairer',homeRoom: 'W52N13',repairing:'false'}}); 
    }

    var ramparts = _.filter(Game.creeps, (creep) => creep.memory.role == 'rampart');
    console.log('Rampart: ' + ramparts.length);

    if(ramparts.length < 1) {
        var newName = 'Rampart' + Game.time;
        console.log('Spawning new rampart: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE], newName,
            {memory: {role: 'rampart',homeRoom: 'W52N13',repairing:'false'}}); 
    }

    var walls = _.filter(Game.creeps, (creep) => creep.memory.role == 'wall');
    console.log('Walls: ' + walls.length);

    if(walls.length < 1) {
        var newName = 'Walls' + Game.time;
        console.log('Spawning new wall: ' + newName);
        Game.spawns['Spawn2'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE], newName,
            {memory: {role: 'wall',homeRoom: 'W52N13',repairing:'false'}}); 
    }

    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'gatherer') {
            roleGatherer.run(creep);
        }
        

       

        if(creep.memory.role == 'embryo') {
            roleEmbryo.run(creep);
            
        }

        
        if(creep.memory.role == 'conquer') {
            roleConquer.run(creep);
            
        }

        if(creep.memory.role == 'settler') {
            roleSettler.run(creep);
            
        }


        if(creep.memory.role == 'harvesterlr') {
            roleHarvesterlr.run(creep);
        }

        if(creep.memory.role == 'trucker') {
            roleTrucker.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'soldier') {
            roleSoldier.run(creep);
        }
        if(creep.memory.role == 'melee') {
            roleMelee.run(creep);
        }

        if(creep.memory.role == 'rampart') {
            roleRampart.run(creep);
        }

        
        if(creep.memory.role == 'wall') {
            roleWall.run(creep);
        }
    }

}
