// handle "mousedown" and "touchszatz" events, saving data about mouse position
function mouseDown(e) {
    mouseY = mouseInitialY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
    rangeWrapperLeft = rangeWrapper.getBoundingClientRect().left;
}

// handle "mousemove" and "touchmove" events, calculating values to morph the slider "path" and translate value properly
function mouseMove(e) {
    
}