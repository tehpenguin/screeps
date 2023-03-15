var roleGatherer = {

    /** @param {Creep} creep **/
    run: function(creep) {
    
        if (creep.store[RESOURCE_ENERGY] < creep.store.getFreeCapacity()) {
            // switch state
            //creep.moveTo(Game.flags.Flag3)
            creep.memory.repairing = false;
            creep.say("harvest");
            //console.log(creep.memory.repairing, "test")
        }
       /* let storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            // the second argument for findClosestByPath is an object which takes
            // a property called filter which can be a function
            // we use the arrow operator to define it
            filter: { structureType: STRUCTURE_CONTAINER}
            
        });*/
        /*let tower = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            // the second argument for findClosestByPath is an object which takes
            // a property called filter which can be a function
            // we use the arrow operator to define it
            filter: { structureType: STRUCTURE_TOWER }
            
        });*/
        //console.log(storage)
       /*if (creep.memory.repairing == true && storage != undefined) {
        
            // try to repair it, if it is out of range
            if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
                creep.moveTo(storage,{visualizePathStyle: {stroke: '#00FF00'},range:1});
            }
        }*/
        /*if (creep.memory.repairing == true && storage != undefined) {
        
            // try to repair it, if it is out of range
            if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
                creep.moveTo(tower);
            }
        }*/
        
        /*else if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            // switch state
            creep.memory.repairing = true;
            creep.say("fill");
        }*/
        
       /* else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.flags.Flag1);
            }
        }*/

        else {
            // find closest source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            // try to harvest energy, if the source is not in range
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards the source
                //creep.moveTo(Game.flags.Flag3)
                creep.moveTo(source);
                //console.log(source)
            }
        }
        
    }
};

module.exports = roleGatherer;
