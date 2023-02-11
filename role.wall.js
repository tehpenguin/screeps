var roleBuilder = require('role.builder');
var roleWall = {
    // a function to run the logic for this role
    run: function(creep) {
        // if creep is trying to repair something but has no energy left
         if (creep.store[RESOURCE_ENERGY] < creep.store.getFreeCapacity()) {
            // switch state
            creep.memory.repairing = false;
            creep.say("harvest");
            console.log(creep.memory.repairing, "wall test")
        }
        // if creep is harvesting energy but is full
       else if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            // switch state
            creep.memory.repairing = true;
            creep.say("rpr/build");
        }
console.log(creep.memory.repairing, "wall test2")
        // if creep is supposed to repair something
       if (creep.memory.repairing == true) {
          (creep.room.name !== creep.memory.homeRoom) 
        creep.moveTo(new RoomPosition(25,25,creep.memory.homeRoom)) ;
            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            var structure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter:  (s) => s.hits < s.hitsMax &&  structure == STRUCTURE_WALL 
             
            });

            // if we find one
            if (structure != undefined) {
                // try to repair it, if it is out of range
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                roleBuilder.run(creep);
            } 
        }
        // if creep is supposed to harvest energy from source
        else {
            // find closest source
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            // try to harvest energy, if the source is not in range
            let storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: { structureType: STRUCTURE_CONTAINER }
                
            });
            console.log(storage)
           if (creep.memory.repairing == true && storage != undefined) {
            
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
