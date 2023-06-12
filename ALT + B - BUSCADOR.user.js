// ==UserScript==
// @name         ALT + B - BUSCADOR
// @namespace    Violentmonkey Scripts
// @match        https://crm.zoho.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to finish loading
    window.addEventListener('load', function() {

        // Listen for the Alt + B key press
        document.body.addEventListener('keydown', function(e) {
            if (e.altKey && e.keyCode === 66) { // 66 is the keyCode for B

                // Click on the search icon
                var searchIcon = document.querySelector('#topbandSearchIcon');
                if (searchIcon) {
                    searchIcon.click();
                }

                // Prevent the default behavior of the B key press
                e.preventDefault();
            }
        });
    });
})();
