// ==UserScript==
// @name         Better featured section display at OpenSea
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  New line and tabs in featured-section-description at OpenSea.
// @author       k0lo
// @match        https://opensea.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=opensea.io
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @grant        none
// ==/UserScript==
$(document).ready(function() {
  // Wait for the page to fully load before running any jQuery code
  $(window).on('load', function() {
    // Find all 'span' elements on the page and do something with them
    $('span').each(function() {
      // Check if the 'data-testid' attribute has the value 'featured-section-description'
      if ($(this).attr('data-testid') === 'featured-section-description') {
        // Add css style for matching span element
        $(this).css("white-space", "pre-wrap");
        // Print the content of the modified element to the console to verify if we have changed the correct elements on the page
        console.log($(this).text())
      }
    });
  });
});
