var roleSettler = {

    run: function(creep) {
        var exit = creep.room.findExitTo('W53N13')
      
        creep.moveTo(creep.pos.findClosestByPath(exit));
        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.moveTo(Game.flags.Flag6)

            var pickup = creep.room.findExitTo('W53N13')
            if(creep.room.name = creep.memory.home){
                creep.moveTo(creep.pos.findClosestByPath(pickup));
                
            }
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            creep.moveTo(Game.flags.Flag8)
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#FF0000'}});
            }
        }
        // if creep is harvesting energy but is full
        else if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            // switch state
            creep.memory.upgrading = true;
            console.log(creep.memory.trucking,"settler 2")
        }
       
            
     //   }
        
        

        // if creep is supposed to harvest energy from source
        else {
            // if in target room
            if (creep.room.name != creep.memory.home) {
                // find source
                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards the source
                    creep.moveTo(source);
                    //console.log(source,'trucker source')
                }
            }
            // if not in target room
           
        }
    }
};
module.exports = roleSettler;
