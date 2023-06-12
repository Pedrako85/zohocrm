// ==UserScript==
// @name         ALT + N - NOTES
// @namespace    Violentmonkey Scripts
// @match        https://crm.zoho.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to finish loading
    window.addEventListener('load', function() {

        // Listen for the Alt + N key press
        document.body.addEventListener('keydown', function(e) {
            if (e.altKey && e.keyCode === 78) { // 78 is the keyCode for N
                e.preventDefault(); // prevent the default behavior of the event

                // Click on the Add Note button
                var addNoteButton = document.querySelector('.addNewIcP[data-zcqa="newleft_Accounts_Add_Notes"]');
                if (!addNoteButton) {
                    addNoteButton = document.querySelector('.addNewIcP[data-zcqa="newleft_Leads_Add_Notes"]');
                }
                if (!addNoteButton) {
                    addNoteButton = document.querySelector('.addNewIcP[data-zcqa="newleft_Potentials_Add_Notes"]');
                }
                if (!addNoteButton) {
                    addNoteButton = document.querySelector('.addNewIcP[data-zcqa="newleft_Contacts_Add_Notes"]');
                }
                if (addNoteButton) {
                    addNoteButton.click();
                }

            }
        });
    });
})();
