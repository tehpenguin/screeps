var roleMelee = {
    // a function to run the logic for this role
    run: function(creep) {

        
        
        if (creep.moveTo(Game.flags.Flag2) != Game.flags.Flag2) {
            // switch state
            creep.memory.march = false;
            creep.say("march");
            //console.log(creep.memory.repairing, "wall test")
        }
        if (creep.memory.march == false) {
            creep.moveTo(Game.flags.Flag5)
            console.log(creep.moveTo(Game.flags.Flag2))
        }
        
        
    let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (creep.memory.march == false) {
    if (creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
        console.log(creep.attack(target), "attack log")
    }
}
let enemy = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
if (creep.memory.march == false) {
    if (creep.attack(enemy) == ERR_NOT_IN_RANGE) {
        creep.moveTo(enemy);
        console.log(creep.attack(target), "attack log")
    }
}

         
    }
};

module.exports = roleMelee;
