const newman = require('newman');

newman.run({
    collection: require('./Collection/collection.json'), 
    environment: require('./Collection/environment.json'),
    iterationCount: 1,
    reporters: ['cli','htmlextra'],
    reporter: {
        htmlextra: {
            export: './Report/report.html',
        }
    }

}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
