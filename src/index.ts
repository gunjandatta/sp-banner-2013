import { Helper } from "gd-sprest";
import { Components } from "gd-sprest-bs";
import { Configuration } from "./cfg";
import { Message } from "./message";

/**
 * SharePoint Banner
 * Displays a banner on top of the page.
 */
const SPBanner = (el: HTMLElement) => {
    // Ensure the element exists
    if (el == null) {
        // Log
        console.error("[SP Banner] The 'el' property was not passed.");
        return;
    }

    // See if this is IE
    if (false || !!document["documentMode"]) {
        // Get the message
        Message().then(message => {
            // Create the alert
            Components.Alert({
                el,
                className: "m-0",
                isDismissible: true,
                content: message,
                type: Components.AlertTypes.Info
            });
        });
    }
}

// Set the confirmation
SPBanner["Configuration"] = Configuration;

// Create the global variable
window["SPBanner"] = SPBanner;

// Notify other scripts that this library is loaded
Helper.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("sp-banner");