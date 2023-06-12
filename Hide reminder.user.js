// ==UserScript==
// @name         Hide reminder
// @namespace    Violentmonkey Scripts
// @match        https://crm.zoho.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        var reminder = document.getElementById("remainder-notifi");
        if (reminder) {
            reminder.style.display = "none";
        }
    }, 1750);
})();
