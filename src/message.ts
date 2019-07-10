/**
 * Message
 * Gets the html content to display in the banner.
 */
export const Message = (): PromiseLike<string> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Read the file from the static location
        let xhr = new XMLHttpRequest();

        // Create the async request
        xhr.open("GET", "https://dattabase.sharepoint.com/clientsideassets/sp-banner/message.html", true);

        // Add the load event
        xhr.onreadystatechange = () => {
            // Ensure it's complete
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // Resolve the request
                resolve(xhr.responseText);
            }
        }

        // Send the request
        xhr.send();
    });
}