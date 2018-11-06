const {PerformanceObserver, performance} = require('perf_hooks');
const basic = require('./solutions/basic');
const pluralisation = require('./solutions/pluralisation');


const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].name + ' -> ' + items.getEntries()[0].duration + ' milliseconds');
});
obs.observe({entryTypes: ['function']});

console.log('\n<<<<<BASIC OPERATIONS>>>>>');
performance.timerify(basic.intlFetchData)();
performance.timerify(basic.intlCachedFetchData)();
performance.timerify(basic.intlCustomFetchData)();

console.log('\n<<<<<PLURAL OPERATIONS>>>>>');
performance.timerify(pluralisation.intlFetchData)();
performance.timerify(pluralisation.intlCachedFetchData)();
performance.timerify(pluralisation.intlCustomFetchData)();

obs.disconnect();