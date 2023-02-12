var roleEmbryo = {
        // a function to run the logic for this role
        run: function(creep) {
            // if creep is trying to repair something but has no energy left
             if (creep.store[RESOURCE_ENERGY] < creep.store.getFreeCapacity()) {
                // switch state
                creep.memory.full = false;
                creep.say("harvest");
                //console.log(creep.memory.repairing, "test")
            }
            // if creep is harvesting energy but is full
           else if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
                // switch state
                creep.memory.full = true;
                creep.say("fill");
            }
    //console.log(creep.memory.repairing, "test2")
            // if creep is supposed to repair something
           else if (creep.memory.full == false) {
               let storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                
                    filter: { structureType: STRUCTURE_CONTAINER }
                    
                });
                
               if (creep.memory.repairing == false && storage != undefined) {
                if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage);
                    }
                }



        else if(creep.memory.full == true && Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    }
}
};

module.exports = roleEmbryo;
