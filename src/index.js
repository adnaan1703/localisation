import {PerformanceObserver, performance} from 'perf_hooks';
import * as basic from './solutions/basic';
import * as plural from './solutions/plural';
import { ITERATION } from './config';

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].name + ' -> ' + items.getEntries()[0].duration + ' milliseconds');
});
obs.observe({entryTypes: ['function']});

console.log(`\n<<<<<BASIC OPERATIONS: ${ITERATION} ITERATIONS>>>>>`);
performance.timerify(basic.intlFetchData)();
performance.timerify(basic.intlCachedFetchData)();
performance.timerify(basic.intlCustomFetchData)();

console.log(`\n<<<<<PLURAL OPERATIONS: ${ITERATION} ITERATIONS>>>>>`);
performance.timerify(plural.intlFetchData)();
performance.timerify(plural.intlCachedFetchData)();
performance.timerify(plural.intlCustomFetchData)();

obs.disconnect();