// x = left = yatay
// y = top = dikey
// z = ....= angle


// defines ----------------------------
let aircraftCode = `aircraft1`
let target_position
let speedKnot = 20
// events -------------------------------
$(document).ready(function() {
    goToPositionDirect(aircraftCode, speedKnot)
})


// functions -------------------------
function goToPositionDirect(objectID, speedKnot) {
    let speedValue = realKnotToScriptValue(speedKnot)
    let object = htmlTagToObject(objectID)

    // go to end position
    let timer = setInterval(() => {
        object.x += speedValue;
        objectPositionToHtmlTag(object)
    }, 1);

    timer
}

function objectPositionToHtmlTag(object) {
    $(`#${object.id}`).children(`img`).css(`left`, `${object.x}px`)
    $(`#${object.id}`).children(`img`).css(`top`, `${object.y}px`)
}

function htmlTagToObject(tagID) {
    let x = $(`#${tagID}`).children(`img`).css(`left`)
    let y = $(`#${tagID}`).children(`img`).css(`top`)

    obj = {
        id : tagID,
        x : parseInt(x),
        y : parseInt(y)
    }
    return obj
}


//speed turning
const speedRate = 0.000375
function realKnotToScriptValue(knot) {
    perValue = speedRate
    return knot * perValue
}

function realScriptValueToKnot(value) {
    perValue = speedRate
    return value / perValue;
}