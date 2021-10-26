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
    // 在这里可以通过require加载配置文件
});