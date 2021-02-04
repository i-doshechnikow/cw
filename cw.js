str = "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"

function fireFight(s) {
    return s.replace(/fire/gi, '~~');
}

console.log(fireFight(str));