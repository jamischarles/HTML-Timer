//http://www.dustindiaz.com/javascript-observer-class/
/*
 
    * Publishers are in charge of "publishing" eg: Creating the Event
 
    * They're also in charge of "notifying" (firing the event)
 
*/
 
/*
 
    * Subscribers basically... "subscribe" (or listen)
 
    * And once they've been "notified" their callback functions are invoked
 
*/
 
 
 
 
 
//Array.filter(), and Array.foreach() need to be added in browsers that don't support them.
//http://www.dustindiaz.com/javascript-observer-class/
 
function Observer(evt_name) {
        //set up observer.functions array
        this.fns = [];
        this.name = evt_name;//by jamis
}
 
//extend? the observer object
Observer.prototype = {
 
        subscribe : function(fn) {
                this.fns.push(fn);
        },//subrscipe function
 
        unsubscribe : function(fn) {
                //create new array with all elements that match the filter function
                this.fns = this.fns.filter(
                        //compare fn passed in to el. So return everything but the matched fn. Bascially removes the fn to unsub from the array.
                        function(el) {
                                if ( el !== fn ) {
                                        return el;
                                }
            }
        );
    },//unsubscripe fn
 
        //loop through and call every fn that's attached to this custom event
    fire : function(o, thisObj) {
        var scope = thisObj || window;
 
                //outut the name of the event to the console if it was provided to the constructor.
                if( typeof this.name != "undefined") { console.log(this.name + " event fired."); }//by Jamis
                //call all the functions that are observng this event... Is that right?
                this.fns.forEach(
            function(el) {
                                el.call(scope, o);
                        }
                );
        }//fire fn
 
}; //observer.prototype
 
 
 
 
 
//now let's use it...
/*var timer_stopped_evt = new Observer;
 
 
 
var fn = function() {
 
    // my callback stuff
        console.log('do stuff');
 
};
 
timer_stopped_evt.subscribe(fn);
 
 
timer_stopped_evt.fire('here is my data');
 
/*
 
    * Don't want to subscribe anymore?
 
*/
/*
timer_stopped_evt.unsubscribe(fn);
 
 
//this one won't do anything
timer_stopped_evt.fire('here is my data');
*/