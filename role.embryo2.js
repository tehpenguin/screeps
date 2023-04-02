

var roleEmbryo = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.store[RESOURCE_ENERGY] < creep.store.getFreeCapacity()) {
            // switch state
            creep.memory.filling = false;
            //console.log(creep.memory.filling,'embryo 1');
            creep.say("gather");
            //console.log(creep.memory.repairing, "test")
        }
        let contain = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            // the second argument for findClosestByPath is an object which takes
            // a property called filter which can be a function
            // we use the arrow operator to define it
            filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
            i.store[RESOURCE_ENERGY] > 50
            
            
        });


        let drop = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES)
            // the second argument for findClosestByPath is an object which ta
        
        //console.log(storage, 'embryo storage')
        if (creep.memory.filling == false && contain != undefined) {
            if (creep.withdraw(contain, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(contain);
                //console.log(creep.moveTo(storage,'embryo moving'))
            }
        }
        let storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            // the second argument for findClosestByPath is an object which takes
            // a property called filter which can be a function
            // we use the arrow operator to define it
            filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
            i.store[RESOURCE_ENERGY] > 50
            
            
        });

        if (creep.memory.filling == false && storage != undefined) {
            if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage);
                //console.log(creep.moveTo(storage,'embryo moving'))
            }
        }


        if (creep.memory.filling == false && drop != undefined) {
            if (creep.withdraw(drop, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(drop);
                //console.log(creep.moveTo(storage,'embryo moving'))
            }
        }

        if (creep.store[RESOURCE_ENERGY] == 150) {
            // switch state
            creep.memory.filling = true;
            creep.say("fill");
            //console.log(creep.memory.repairing, "test")
        }
        let spawn = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            // the second argument for findClosestByPath is an object which takes
            // a property called filter which can be a function
            // we use the arrow operator to define it
            filter: (i) => i.structureType == STRUCTURE_EXTENSION &&
                   i.store[RESOURCE_ENERGY] < 50
            
            
        });
        //console.log(spawn, 'embryo storage')
        if (creep.memory.filling == true && storage != undefined) {
            if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
                console.log(creep.moveTo(spawn,'embryo moving'))
            }
        }

        if (creep.memory.filling == true && contain != undefined) {
            if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
                console.log(creep.moveTo(spawn,'embryo moving'))
            }
        }
        
        
    }

};


    


module.exports = roleEmbryo;
