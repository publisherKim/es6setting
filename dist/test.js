'use strict';

// es6 function : block scope variaous declare

var senteces = [{ subject: 'JavaScript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }];

// es6 function : object destructure
function say(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    // es6 function : template literals
    // ` backtick
    console.log(subject + ' ' + verb + ' ' + object + ' !var');
}

// es6 function : for of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = senteces[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}