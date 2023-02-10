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
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#FFFF00'},range:1});
            }
        }
    }
};

module.exports = roleBuilder;
