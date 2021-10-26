const Liftoff = require('liftoff');

const cli = new Liftoff({
    name: 'fis4',
    processTitle: 'fis4',
    moduleName: 'lodash',
    configName: 'my-conf',
    extensions: {
        '.js': null
    }
});

cli.prepare({
    require: [],
    cwd: process.cwd(),
    // configPath: ''
}, function(env){
    console.log('env', env);
});