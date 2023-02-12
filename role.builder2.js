//var roleRepairer = require('role.repairer')
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.build && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.build = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.build && creep.store.getFreeCapacity() == 0) {
            creep.memory.build = true;
            creep.say('🚧 build');
        }

        if(creep.memory.build) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#00FF00'},range:1});
                }
            }
        }
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
            //console.log(storage)
           if (creep.memory.build == false && storage != undefined) {
            
                // try to repair it, if it is out of range
                if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(storage);
                }
            }
        }
        
    }

};

module.exports = roleBuilder;
