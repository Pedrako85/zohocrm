// ==UserScript==
// @name         1 day - new task
// @namespace    Violentmonkey Scripts
// @match        https://crm.zoho.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var isOnePressed = false;

    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 49) { // 49 is the keyCode for 1
            isOnePressed = true;
        } else if (isOnePressed && e.keyCode === 40) { // 40 is the keyCode for Arrow Down
            isOnePressed = false;

            // Click on the first element
            var firstElement = document.querySelector('#addnew-btn');
            if (firstElement) {
                firstElement.click();

                // Wait for the first click to complete, then click on the second element
                setTimeout(function() {
                    var secondElement = document.querySelector('.dummyForLeftPanel[data-relid="3708275000030610992"]'); // Deal
                    if (!secondElement) {
                        secondElement = document.querySelector('.dummyForLeftPanel[data-relid="3708275000030610980"]'); // Cuenta
                    }
                    if (!secondElement) {
                        secondElement = document.querySelector('.dummyForLeftPanel[data-relid="3708275000030610952"]'); // Contacto
                    }
                    if (!secondElement) {
                        secondElement = document.querySelector('.dummyForLeftPanel[data-relid="3708275000030610942"]'); // Lead
                    }
                    if (!secondElement) {
                        console.log("Cannot find second element.");
                        return;
                    }
                    secondElement.click();

                    // Wait for the second click to complete, then click on the third element
                    setTimeout(function() {
                        var thirdElement = document.querySelector('span[data-zcqa="Lookup_task_lookup_icon"]');
                        if (thirdElement) {
                            thirdElement.click();

                            // Write "T" on the task subject element
                            var taskSubjectElement = document.getElementById('task_subject');
                            if (taskSubjectElement) {
                                taskSubjectElement.value = 'T';
                            }

                            // Click on the due date element
                            var dueDateElement = document.getElementById('Crm_Tasks_DUEDATE');
                            if (dueDateElement) {
                                dueDateElement.click();

                                // Wait for the due date element to load, then set the date
                                setTimeout(function() {
                                    // Calculate today's date + 1 days in dd/mm/yyyy format
                                    var currentDate = new Date();
                                    currentDate.setDate(currentDate.getDate() + 1);
                                    var formattedDueDate = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
                                    dueDateElement.value = formattedDueDate;

                                    // Click on the save button
                                    var saveButtonElement = document.getElementById('saveCall');
                                    if (saveButtonElement) {
                                        saveButtonElement.click();
                                    }
                                }, 400); // Adjust the delay as needed
                            }
                        }
                    }, 800); // Adjust the delay as needed
                }, 800); // Adjust the delay as needed
            }
        }
    });
})();