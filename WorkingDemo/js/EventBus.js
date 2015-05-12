/**
 * This file is the event bus demo
 **/

// Global  namespace
var EventBus = (function() {

    var
    // List of optional events
        events = {},

    // Reference to the last fired event
        lastEvent,

        domNodes = []
        ;


    function init() {

        domNodes['create-name'] = document.querySelector('[data-create-name]');
        domNodes['create-handler'] = document.querySelector('[data-create-handler]');
        domNodes['events-list'] = document.querySelector('.js-events-list');
        domNodes['last-event'] = document.querySelector('[data-last-event]')

    }

    /**
     * Register new event
     *
     * @param {Object} eventData - The event data.
     * The eventData should contain the following info
     *
     *    {eventData} : name:       The name of the event
     *                  handler:    The callback to be called when the event is triggered
     */
    function registerEvent(eventData) {

        // Update the UI
        updateList();

    }


    /**
     * Update the GUI events list
     */
    function updateList() {

        // Get the list of the events
        var events = EventBus.getEventsList().sort(),

        // The new list markup
            listFragment = document.createDocumentFragment()

            ;

        // Clear the previous list
        domNodes['events-list'].innerHTML = '';

        // Loop and output the events
        events.forEach(function(eventName) {
            var radio = document.createElement('input'),
                label = document.createElement('label');
            radio.type = 'checkbox';
            radio.name = eventName;
            radio.addEventListener('click', EventBus.fireEvent);
            listFragment.appendChild(radio);
            label.textContent = eventName;
            listFragment.appendChild(label);
            listFragment.appendChild(document.createElement('br'));

        });

        domNodes['events-list'].appendChild(listFragment);

    }

    /**
     * Create new event.
     */
    function createEvent(e) {

        domNodes['create-name'].value = '';
        domNodes['create-handler'].value = '';

    }

    /**
     * Fire the event.
     */
    function fireEvent() {

    }


    // Prepare the object
    init();

    return {

        createEvent: createEvent,
        registerEvent: registerEvent,
        fireEvent: fireEvent,
        getEventsList: function() {
            return Object.keys(events);
        }

    }

})();


// Bind the click button
document.querySelector('.js-create-event').addEventListener('click', EventBus.createEvent);

