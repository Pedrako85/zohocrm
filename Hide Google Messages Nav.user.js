// ==UserScript==
// @name         Hide Google Messages Nav
// @version      1.0
// @description  Hides the main navigation bar on Google Messages web app
// @match        https://messages.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.main-nav { display: none !important; }');