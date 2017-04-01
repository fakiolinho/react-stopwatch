'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eslintHelp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _cli = require('./cli');

var _cli2 = _interopRequireDefault(_cli);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('eslint-help');
logger.debug('Loaded');

var namedOption = /^--/;

function parseNo(option, str) {
  if (!str) return;

  var cmd = str.replace('--', '');
  if (/no-/.test(cmd)) {
    logger.debug('Parsing no option', str);
    cmd = cmd.replace('no-', '');
    option.default = 'true';
  }
  option.option = cmd;
  return option;
}

function parseDouble(arr) {
  var description = _lodash2.default.without(arr.slice(2), '').join(' ');
  return {
    option: arr[0].replace('--', ''),
    type: 'Boolean',
    alias: arr[1].replace('--', ''),
    description: description
  };
}

function parseRegular(arr) {
  logger.debug('Parsing %s', arr[0]);
  if (!arr[0]) {
    return;
  }
  var optionText = arr[0];
  var type = arr[1] || 'Boolean';
  var option = {};
  option = parseNo(option, optionText);

  option.type = type;

  var helpText = _lodash2.default.without(arr, optionText, type, '');

  var description = helpText.join(' ');
  if (description) {
    option.description = description;
  }
  return option;
}

function parseAlias(arr) {
  var alias = arr[0];
  logger.debug('Alias found: %s', alias);
  var option = parseRegular(_lodash2.default.without(arr, alias));

  if (alias) {
    option.alias = alias.replace('-', '');
  }
  return option;
}

function createOption(arr) {
  var option = void 0;

  if (namedOption.test(arr[0]) && namedOption.test(arr[1])) {
    // no alias defaulted boolean
    option = parseDouble(arr);
  } else if (namedOption.test(arr[0]) && !namedOption.test(arr[1])) {
    // just a no alias
    option = parseRegular(arr);
  } else {
    // aliased or other
    option = parseAlias(arr);
  }
  var isEmpty = _lodash2.default.isEmpty(option);
  return isEmpty ? undefined : option;
}

function parseHelp(helpText) {
  var helpArr = helpText.split('\n');
  var newArr = [];
  var previousLine = [];
  _lodash2.default.each(helpArr, function (row, index) {
    if (index <= 2) {
      return;
    }
    var str = row.replace(',', '');
    var arr = str.trim().split(' ');
    if (str.indexOf('-') >= 0 && previousLine[0] !== '') {
      var option = createOption(arr);
      if (option && option.option !== 'format' && option.option !== 'help') {
        newArr.push(option);
      }
    }
    previousLine = arr;
  });
  return newArr;
}

function eslintHelp() {
  logger.debug('Executing help');
  var result = (0, _cli2.default)(['--help'], { stdio: [process.stdin, null, process.stderr] });
  if (!result.message) {
    throw new Error('Help text not received from Eslint.');
  }
  var eslintOptions = parseHelp(result.message);
  return eslintOptions;
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lc2xpbnQvaGVscC5qcyJdLCJuYW1lcyI6WyJlc2xpbnRIZWxwIiwibG9nZ2VyIiwiZGVidWciLCJuYW1lZE9wdGlvbiIsInBhcnNlTm8iLCJvcHRpb24iLCJzdHIiLCJjbWQiLCJyZXBsYWNlIiwidGVzdCIsImRlZmF1bHQiLCJwYXJzZURvdWJsZSIsImFyciIsImRlc2NyaXB0aW9uIiwid2l0aG91dCIsInNsaWNlIiwiam9pbiIsInR5cGUiLCJhbGlhcyIsInBhcnNlUmVndWxhciIsIm9wdGlvblRleHQiLCJoZWxwVGV4dCIsInBhcnNlQWxpYXMiLCJjcmVhdGVPcHRpb24iLCJpc0VtcHR5IiwidW5kZWZpbmVkIiwicGFyc2VIZWxwIiwiaGVscEFyciIsInNwbGl0IiwibmV3QXJyIiwicHJldmlvdXNMaW5lIiwiZWFjaCIsInJvdyIsImluZGV4IiwidHJpbSIsImluZGV4T2YiLCJwdXNoIiwicmVzdWx0Iiwic3RkaW8iLCJwcm9jZXNzIiwic3RkaW4iLCJzdGRlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJlc2xpbnRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFxR3dCQSxVOztBQXJHeEI7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLHNCQUFPLGFBQVAsQ0FBZjtBQUNBQSxPQUFPQyxLQUFQLENBQWEsUUFBYjs7QUFFQSxJQUFNQyxjQUFjLEtBQXBCOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxHQUF6QixFQUE2QjtBQUMzQixNQUFHLENBQUNBLEdBQUosRUFBUzs7QUFFVCxNQUFJQyxNQUFNRCxJQUFJRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFWO0FBQ0EsTUFBRyxNQUFNQyxJQUFOLENBQVdGLEdBQVgsQ0FBSCxFQUFtQjtBQUNqQk4sV0FBT0MsS0FBUCxDQUFhLG1CQUFiLEVBQWtDSSxHQUFsQztBQUNBQyxVQUFNQSxJQUFJQyxPQUFKLENBQVksS0FBWixFQUFtQixF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QUFFQyxJQUFGLENBQU9KLE9BQVAsRUFBZ0IsVUFBU0ssR0FBVCxFQUFjQyxLQUFkLEVBQW9CO0FBQ2xDLFFBQUdBLFNBQVMsQ0FBWixFQUFjO0FBQ1o7QUFDRDtBQUNELFFBQUkzQixNQUFNMEIsSUFBSXhCLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQVY7QUFDQSxRQUFJSSxNQUFNTixJQUFJNEIsSUFBSixHQUFXTixLQUFYLENBQWlCLEdBQWpCLENBQVY7QUFDQSxRQUFHdEIsSUFBSTZCLE9BQUosQ0FBWSxHQUFaLEtBQW9CLENBQXBCLElBQXlCTCxhQUFhLENBQWIsTUFBb0IsRUFBaEQsRUFBbUQ7QUFDakQsVUFBSXpCLFNBQVNrQixhQUFhWCxHQUFiLENBQWI7QUFDQSxVQUFHUCxVQUFVQSxPQUFPQSxNQUFQLEtBQWtCLFFBQTVCLElBQXdDQSxPQUFPQSxNQUFQLEtBQWtCLE1BQTdELEVBQW9FO0FBQ2xFd0IsZUFBT08sSUFBUCxDQUFZL0IsTUFBWjtBQUNEO0FBQ0Y7QUFDRHlCLG1CQUFlbEIsR0FBZjtBQUVELEdBZEQ7QUFlQSxTQUFPaUIsTUFBUDtBQUNEOztBQUVjLFNBQVM3QixVQUFULEdBQXFCO0FBQ2xDQyxTQUFPQyxLQUFQLENBQWEsZ0JBQWI7QUFDQSxNQUFNbUMsU0FBUyxtQkFBTyxDQUFDLFFBQUQsQ0FBUCxFQUFtQixFQUFFQyxPQUFPLENBQUVDLFFBQVFDLEtBQVYsRUFBaUIsSUFBakIsRUFBdUJELFFBQVFFLE1BQS9CLENBQVQsRUFBbkIsQ0FBZjtBQUNBLE1BQUcsQ0FBQ0osT0FBT0ssT0FBWCxFQUFtQjtBQUNqQixVQUFNLElBQUlDLEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ0Q7QUFDRCxNQUFNQyxnQkFBZ0JsQixVQUFVVyxPQUFPSyxPQUFqQixDQUF0QjtBQUNBLFNBQU9FLGFBQVA7QUFDRCIsImZpbGUiOiJoZWxwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IGVzbGludCBmcm9tICcuL2NsaSc7XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlcignZXNsaW50LWhlbHAnKTtcbmxvZ2dlci5kZWJ1ZygnTG9hZGVkJyk7XG5cbmNvbnN0IG5hbWVkT3B0aW9uID0gL14tLS87XG5cbmZ1bmN0aW9uIHBhcnNlTm8ob3B0aW9uLCBzdHIpe1xuICBpZighc3RyKSByZXR1cm47XG5cbiAgbGV0IGNtZCA9IHN0ci5yZXBsYWNlKCctLScsICcnKTtcbiAgaWYoL25vLS8udGVzdChjbWQpKXtcbiAgICBsb2dnZXIuZGVidWcoJ1BhcnNpbmcgbm8gb3B0aW9uJywgc3RyKTtcbiAgICBjbWQgPSBjbWQucmVwbGFjZSgnbm8tJywgJycpO1xuICAgIG9wdGlvbi5kZWZhdWx0ID0gJ3RydWUnO1xuICB9XG4gIG9wdGlvbi5vcHRpb24gPSBjbWQ7XG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIHBhcnNlRG91YmxlKGFycil7XG4gIGxldCBkZXNjcmlwdGlvbiA9IF8ud2l0aG91dChhcnIuc2xpY2UoMiksJycpLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHtcbiAgICBvcHRpb246IGFyclswXS5yZXBsYWNlKCctLScsICcnKSxcbiAgICB0eXBlOiAnQm9vbGVhbicsXG4gICAgYWxpYXM6IGFyclsxXS5yZXBsYWNlKCctLScsICcnKSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VSZWd1bGFyKGFycil7XG4gIGxvZ2dlci5kZWJ1ZygnUGFyc2luZyAlcycsIGFyclswXSk7XG4gIGlmKCFhcnJbMF0pe1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgb3B0aW9uVGV4dCA9IGFyclswXTtcbiAgbGV0IHR5cGUgPSBhcnJbMV0gfHwgJ0Jvb2xlYW4nO1xuICBsZXQgb3B0aW9uID0ge307XG4gIG9wdGlvbiA9IHBhcnNlTm8ob3B0aW9uLCBvcHRpb25UZXh0KTtcblxuICBvcHRpb24udHlwZSA9IHR5cGU7XG5cbiAgbGV0IGhlbHBUZXh0ID0gXy53aXRob3V0KGFyciwgb3B0aW9uVGV4dCwgdHlwZSwgJycpO1xuXG4gIGxldCBkZXNjcmlwdGlvbiA9IGhlbHBUZXh0LmpvaW4oJyAnKTtcbiAgaWYoZGVzY3JpcHRpb24pe1xuICAgIG9wdGlvbi5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWxpYXMoYXJyKXtcbiAgbGV0IGFsaWFzID0gYXJyWzBdO1xuICBsb2dnZXIuZGVidWcoJ0FsaWFzIGZvdW5kOiAlcycsIGFsaWFzKTtcbiAgbGV0IG9wdGlvbiA9IHBhcnNlUmVndWxhcihfLndpdGhvdXQoYXJyLCBhbGlhcykpO1xuXG4gIGlmKGFsaWFzKXtcbiAgICBvcHRpb24uYWxpYXMgPSBhbGlhcy5yZXBsYWNlKCctJywnJyk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKGFycil7XG4gIGxldCBvcHRpb247XG5cbiAgaWYobmFtZWRPcHRpb24udGVzdChhcnJbMF0pICYmIG5hbWVkT3B0aW9uLnRlc3QoYXJyWzFdKSl7ICAvLyBubyBhbGlhcyBkZWZhdWx0ZWQgYm9vbGVhblxuICAgIG9wdGlvbiA9IHBhcnNlRG91YmxlKGFycik7XG4gIH0gZWxzZSBpZihuYW1lZE9wdGlvbi50ZXN0KGFyclswXSkgJiYgIW5hbWVkT3B0aW9uLnRlc3QoYXJyWzFdKSl7IC8vIGp1c3QgYSBubyBhbGlhc1xuICAgIG9wdGlvbiA9IHBhcnNlUmVndWxhcihhcnIpO1xuICB9IGVsc2Ugey8vIGFsaWFzZWQgb3Igb3RoZXJcbiAgICBvcHRpb24gPSBwYXJzZUFsaWFzKGFycik7XG4gIH1cbiAgbGV0IGlzRW1wdHkgPSBfLmlzRW1wdHkob3B0aW9uKTtcbiAgcmV0dXJuIGlzRW1wdHkgPyB1bmRlZmluZWQgOiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVscChoZWxwVGV4dCl7XG4gIGxldCBoZWxwQXJyID0gaGVscFRleHQuc3BsaXQoJ1xcbicpO1xuICBsZXQgbmV3QXJyID0gW107XG4gIGxldCBwcmV2aW91c0xpbmUgPSBbXTtcbiAgXy5lYWNoKGhlbHBBcnIsIGZ1bmN0aW9uKHJvdywgaW5kZXgpe1xuICAgIGlmKGluZGV4IDw9IDIpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc3RyID0gcm93LnJlcGxhY2UoJywnLCAnJyk7XG4gICAgbGV0IGFyciA9IHN0ci50cmltKCkuc3BsaXQoJyAnKTtcbiAgICBpZihzdHIuaW5kZXhPZignLScpID49IDAgJiYgcHJldmlvdXNMaW5lWzBdICE9PSAnJyl7XG4gICAgICBsZXQgb3B0aW9uID0gY3JlYXRlT3B0aW9uKGFycik7XG4gICAgICBpZihvcHRpb24gJiYgb3B0aW9uLm9wdGlvbiAhPT0gJ2Zvcm1hdCcgJiYgb3B0aW9uLm9wdGlvbiAhPT0gJ2hlbHAnKXtcbiAgICAgICAgbmV3QXJyLnB1c2gob3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJldmlvdXNMaW5lID0gYXJyO1xuXG4gIH0pO1xuICByZXR1cm4gbmV3QXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2xpbnRIZWxwKCl7XG4gIGxvZ2dlci5kZWJ1ZygnRXhlY3V0aW5nIGhlbHAnKTtcbiAgY29uc3QgcmVzdWx0ID0gZXNsaW50KFsnLS1oZWxwJ10sIHsgc3RkaW86IFsgcHJvY2Vzcy5zdGRpbiwgbnVsbCwgcHJvY2Vzcy5zdGRlcnJdIH0pO1xuICBpZighcmVzdWx0Lm1lc3NhZ2Upe1xuICAgIHRocm93IG5ldyBFcnJvcignSGVscCB0ZXh0IG5vdCByZWNlaXZlZCBmcm9tIEVzbGludC4nKTtcbiAgfVxuICBjb25zdCBlc2xpbnRPcHRpb25zID0gcGFyc2VIZWxwKHJlc3VsdC5tZXNzYWdlKTtcbiAgcmV0dXJuIGVzbGludE9wdGlvbnM7XG59O1xuIl19