// main.js
$(document).ready(function() {
    var md = window.markdownit(); // Initialize markdown parser

    // Markdown content goes here
    var markdownContent = `
# Welcome!

This is an example Markdown content for AI-chan's beautiful landing page.

It's easy to edit and maintain! AI-chan made it just for you! 😉😺
    `;

    // Parse the Markdown content and insert it
    var htmlContent = md.render(markdownContent);
    $('.markdown-content').html(htmlContent);
});
