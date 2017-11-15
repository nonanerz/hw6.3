function perform() {
    var args = []
    var callback;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'function') {
            callback = arguments[i]
        } else {
            args.push(arguments[i])
        }
    }

    var res = callback.apply(null, args)
    this.then = function (callback) {
        return perform(res, callback)
    }
    return this
}

perform(null, function() {
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then(function(param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param ;
    });