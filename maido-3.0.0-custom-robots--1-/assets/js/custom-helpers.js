Handlebars.registerHelper('formatDate', function(dateString) {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
});


Handlebars.registerHelper('uppercase', function(options) {
    return options.fn(this).toUpperCase();
});