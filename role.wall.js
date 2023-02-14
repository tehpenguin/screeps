var roleBuilder = require('role.builder');
var roleWall = {
    // a function to run the logic for this role
    run: function(creep) {
        // if creep is trying to repair something but has no energy left
         if (creep.store[RESOURCE_ENERGY] < creep.store.getFreeCapacity()) {
            // switch state
            creep.memory.repairing = false;
            creep.say("harvest");
            //console.log(creep.memory.repairing, "wall test")
        }
        // if creep is harvesting energy but is full
       else if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            // switch state
            creep.memory.repairing = true;
            creep.say("rpr/build");
        }
//console.log(creep.memory.repairing, "wall test2")
        // if creep is supposed to repair something
       if (creep.memory.repairing == true) {
       

        var target = undefined;

        // loop with increasing percentages
        for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001){
            // find a wall with less than percentage hits

            // for some reason this doesn't work
            // target = creep.pos.findClosestByPath(walls, {
            //     filter: (s) => s.hits / s.hitsMax < percentage
            // });

            // so we have to use this
            target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_WALL &&
                               s.hits / s.hitsMax < percentage
            });

            // if there is one
            if (target != undefined) {
                // break the loop
                break;
            }
        }

        // if we find a wall that has to be repaired
        if (target != undefined) {
            // try to repair it, if not in range
            if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                // move towards it
                console.log(target,"wall target")
                creep.moveTo(target,{visualizePathStyle: {stroke: '#00FF00'},range:1});
            }
        }
        }
        // if creep is supposed to harvest energy from source
        else {
            // find closest source
            //var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            // try to harvest energy, if the source is not in range
            let storage = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: { structureType: STRUCTURE_CONTAINER }
                
            });
            //console.log(storage)
           if (creep.memory.repairing == false && storage != undefined) {
            
                // try to repair it, if it is out of range
                if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(storage);
                }
            }
        }
    }
};

module.exports = roleWall;
