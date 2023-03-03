"use strict";
function kilos(peso1) {
    if (typeof peso1 === 'number') {
        return peso1 * 1.3;
    }
    else {
        return parseInt(peso1) * 1.4;
    }
}
kilos(10);
kilos('20');
