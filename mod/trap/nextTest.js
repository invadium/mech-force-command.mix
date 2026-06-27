function nextTest() {
    if (env.autoProgress) {
        log(env.itest + ' === ' + (__$.sce.test.land.length - 1))
        if (env.itest === __$.sce.test.land.length - 1) {
            __$.sce.test.util.allTestsPassed()
        }
        trap('levelUp')
    } else {
        __$.sce.test.util.testPassed()
    }
}
