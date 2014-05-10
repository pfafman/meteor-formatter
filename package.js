
Package.describe({
    summary: "Format user input to match a specified pattern"
});

Package.on_use(function (api, where) {

    
    api.use([
        'jquery', 
    ], 'client');

    api.add_files([
        'lib/jquery.formatter.js'
    ], 'client');
    
});