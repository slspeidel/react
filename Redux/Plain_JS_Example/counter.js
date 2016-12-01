// Create a Reducer, a pure function that returns the new state
function counter(currentState, action) {
    var nextState = {
        count: currentState.count
    }
    switch (action.type) {
        case "ADD":
            nextState = {
                count: currentState.count + 1
            }
            return nextState;
           
        case "SUBTRACT":
            nextState = {
                count: currentState.count - 1
            }
            return nextState;

        case "RESET":
            nextState = {
                count: 0
            }
            return nextState;
        default:
            // handle initialization call
            return currentState;
    }
}

var state = { count: 0 }
var store = Redux.createStore(counter, state)
var counterEl = document.getElementById('counter')

var render = function() {
    // render new state to the UI
    console.log(store.getState());
    var state = store.getState();
    counterEl.innerHTML = state.count.toString();
}

// Subscribe the store to a callback function
store.subscribe(render)

//Create a handler for Actions
document.getElementById("add")
    .addEventListener("click", function(){
        store.dispatch( { type: 'ADD' } )
})
document.getElementById("subtract")
    .addEventListener("click", function(){
        store.dispatch( { type: 'SUBTRACT' } )
})
document.getElementById("reset")
    .addEventListener("click", function(){
        store.dispatch( { type: 'RESET' } )
})
