import { Helper } from "gd-sprest";

/**
 * Configuration
 */
export const Configuration = Helper.SPConfig({
    CustomActionCfg: {
        Site: [
            {
                Name: "SPBanner",
                Title: "SharePoint Banner",
                Description: "Displays a banner in IE browsers.",
                Location: "ScriptLink",
                Scope: 100000,
                ScriptBlock: 'var s = document.createElement("script"); s.src = "/clientsideassets/sp-banner/sp-banner.js"; document.head.appendChild(s); SP.SOD.executeOrDelayUntilScriptLoaded(function() { var el=document.createElement("div"); document.body.insertBefore(el, document.body.firstChild); SPBanner(el); }, "sp-banner");'
            }
        ]
    }
});