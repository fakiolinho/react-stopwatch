'use strict';

var _keypress = require('keypress');

var _keypress2 = _interopRequireDefault(_keypress);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _cli = require('./eslint/cli');

var _cli2 = _interopRequireDefault(_cli);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _watcher = require('./watcher');

var _watcher2 = _interopRequireDefault(_watcher);

var _argParser = require('./arg-parser');

var _argParser2 = _interopRequireDefault(_argParser);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _package = require('../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-process-exit: 0*/
var logger = (0, _logger2.default)('esw-cli');

logger.debug('Loaded');
logger.debug(`Eslint-Watch: ${_package2.default.version}`);

var exitCode = void 0;
var args = process.argv;

function runLint(args, options) {
  logger.debug(args);
  var result = (0, _cli2.default)(args, options);
  logger.debug('lint completed. Exit Code: %o', result.exitCode);
  exitCode = result.exitCode;
  logger.log(result.message);
}

function keyListener(args, options) {
  var stdin = process.stdin;
  if (!stdin.setRawMode) {
    logger.debug('Process might be wrapped exiting keybinding');
    return;
  }
  (0, _keypress2.default)(stdin);
  stdin.on('keypress', function keyPressListener(ch, key) {
    logger.debug('%s was pressed', key.name);
    if (key.name === 'return') {
      logger.debug('relinting...');
      logger.debug(options);
      runLint(args, options);
    }
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }
  });
  stdin.setRawMode(true);
  stdin.resume();
}

logger.debug('Arguments passed: %o', args);
var parsedOptions = _options2.default.parse(args);
_settings2.default.cliOptions = parsedOptions;

if (parsedOptions.eswVersion) {
  logger.log(_package2.default.version);
} else {
  logger.debug('Parsing args');
  var eslArgs = _argParser2.default.parse(args, parsedOptions);
  if (!parsedOptions.help) {
    logger.debug('Running initial lint');
    runLint(eslArgs, parsedOptions);
    if (parsedOptions.watch) {
      logger.debug('-w seen');
      keyListener(eslArgs, parsedOptions);
      (0, _watcher2.default)(parsedOptions);
    }
  } else {
    logger.log(_options2.default.generateHelp());
  }
}

process.on('exit', function () {
  logger.debug(`Exiting: ${exitCode}`);
  process.exit(exitCode);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJkZWJ1ZyIsInZlcnNpb24iLCJleGl0Q29kZSIsImFyZ3MiLCJwcm9jZXNzIiwiYXJndiIsInJ1bkxpbnQiLCJvcHRpb25zIiwicmVzdWx0IiwibG9nIiwibWVzc2FnZSIsImtleUxpc3RlbmVyIiwic3RkaW4iLCJzZXRSYXdNb2RlIiwib24iLCJrZXlQcmVzc0xpc3RlbmVyIiwiY2giLCJrZXkiLCJuYW1lIiwiY3RybCIsImV4aXQiLCJyZXN1bWUiLCJwYXJzZWRPcHRpb25zIiwicGFyc2UiLCJjbGlPcHRpb25zIiwiZXN3VmVyc2lvbiIsImVzbEFyZ3MiLCJoZWxwIiwid2F0Y2giLCJnZW5lcmF0ZUhlbHAiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBVEE7QUFXQSxJQUFNQSxTQUFTLHNCQUFPLFNBQVAsQ0FBZjs7QUFFQUEsT0FBT0MsS0FBUCxDQUFhLFFBQWI7QUFDQUQsT0FBT0MsS0FBUCxDQUFjLGlCQUFnQixrQkFBSUMsT0FBUSxFQUExQzs7QUFFQSxJQUFJQyxpQkFBSjtBQUNBLElBQU1DLE9BQU9DLFFBQVFDLElBQXJCOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJILElBQWpCLEVBQXVCSSxPQUF2QixFQUErQjtBQUM3QlIsU0FBT0MsS0FBUCxDQUFhRyxJQUFiO0FBQ0EsTUFBTUssU0FBUyxtQkFBVUwsSUFBVixFQUFnQkksT0FBaEIsQ0FBZjtBQUNBUixTQUFPQyxLQUFQLENBQWEsK0JBQWIsRUFBOENRLE9BQU9OLFFBQXJEO0FBQ0FBLGFBQVdNLE9BQU9OLFFBQWxCO0FBQ0FILFNBQU9VLEdBQVAsQ0FBV0QsT0FBT0UsT0FBbEI7QUFDRDs7QUFFRCxTQUFTQyxXQUFULENBQXFCUixJQUFyQixFQUEyQkksT0FBM0IsRUFBbUM7QUFDakMsTUFBSUssUUFBUVIsUUFBUVEsS0FBcEI7QUFDQSxNQUFHLENBQUNBLE1BQU1DLFVBQVYsRUFBcUI7QUFDbkJkLFdBQU9DLEtBQVAsQ0FBYSw2Q0FBYjtBQUNBO0FBQ0Q7QUFDRCwwQkFBU1ksS0FBVDtBQUNBQSxRQUFNRSxFQUFOLENBQVMsVUFBVCxFQUFxQixTQUFTQyxnQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEJDLEdBQTlCLEVBQWtDO0FBQ3JEbEIsV0FBT0MsS0FBUCxDQUFhLGdCQUFiLEVBQStCaUIsSUFBSUMsSUFBbkM7QUFDQSxRQUFHRCxJQUFJQyxJQUFKLEtBQWEsUUFBaEIsRUFBeUI7QUFDdkJuQixhQUFPQyxLQUFQLENBQWEsY0FBYjtBQUNBRCxhQUFPQyxLQUFQLENBQWFPLE9BQWI7QUFDQUQsY0FBUUgsSUFBUixFQUFjSSxPQUFkO0FBQ0Q7QUFDRCxRQUFHVSxJQUFJRSxJQUFKLElBQVlGLElBQUlDLElBQUosS0FBYSxHQUE1QixFQUFpQztBQUMvQmQsY0FBUWdCLElBQVI7QUFDRDtBQUNGLEdBVkQ7QUFXQVIsUUFBTUMsVUFBTixDQUFpQixJQUFqQjtBQUNBRCxRQUFNUyxNQUFOO0FBQ0Q7O0FBRUR0QixPQUFPQyxLQUFQLENBQWEsc0JBQWIsRUFBcUNHLElBQXJDO0FBQ0EsSUFBTW1CLGdCQUFnQixrQkFBWUMsS0FBWixDQUFrQnBCLElBQWxCLENBQXRCO0FBQ0EsbUJBQVNxQixVQUFULEdBQXNCRixhQUF0Qjs7QUFFQSxJQUFHQSxjQUFjRyxVQUFqQixFQUE0QjtBQUMxQjFCLFNBQU9VLEdBQVAsQ0FBVyxrQkFBSVIsT0FBZjtBQUNELENBRkQsTUFFTztBQUNMRixTQUFPQyxLQUFQLENBQWEsY0FBYjtBQUNBLE1BQU0wQixVQUFVLG9CQUFVSCxLQUFWLENBQWdCcEIsSUFBaEIsRUFBc0JtQixhQUF0QixDQUFoQjtBQUNBLE1BQUksQ0FBQ0EsY0FBY0ssSUFBbkIsRUFBeUI7QUFDdkI1QixXQUFPQyxLQUFQLENBQWEsc0JBQWI7QUFDQU0sWUFBUW9CLE9BQVIsRUFBaUJKLGFBQWpCO0FBQ0EsUUFBSUEsY0FBY00sS0FBbEIsRUFBeUI7QUFDdkI3QixhQUFPQyxLQUFQLENBQWEsU0FBYjtBQUNBVyxrQkFBWWUsT0FBWixFQUFxQkosYUFBckI7QUFDQSw2QkFBUUEsYUFBUjtBQUNEO0FBQ0YsR0FSRCxNQVFPO0FBQ0x2QixXQUFPVSxHQUFQLENBQVcsa0JBQVlvQixZQUFaLEVBQVg7QUFDRDtBQUNGOztBQUdEekIsUUFBUVUsRUFBUixDQUFXLE1BQVgsRUFBbUIsWUFBTTtBQUN2QmYsU0FBT0MsS0FBUCxDQUFjLFlBQVdFLFFBQVMsRUFBbEM7QUFDQUUsVUFBUWdCLElBQVIsQ0FBYWxCLFFBQWI7QUFDRCxDQUhEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLXByb2Nlc3MtZXhpdDogMCovXG5pbXBvcnQga2V5cHJlc3MgZnJvbSAna2V5cHJlc3MnO1xuXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgZXNsaW50Q2xpIGZyb20gJy4vZXNsaW50L2NsaSc7XG5pbXBvcnQgaGVscE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB3YXRjaGVyIGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgYXJnUGFyc2VyIGZyb20gJy4vYXJnLXBhcnNlcic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZSc7XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlcignZXN3LWNsaScpO1xuXG5sb2dnZXIuZGVidWcoJ0xvYWRlZCcpO1xubG9nZ2VyLmRlYnVnKGBFc2xpbnQtV2F0Y2g6ICR7cGtnLnZlcnNpb259YCk7XG5cbmxldCBleGl0Q29kZTtcbmNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3Y7XG5cbmZ1bmN0aW9uIHJ1bkxpbnQoYXJncywgb3B0aW9ucyl7XG4gIGxvZ2dlci5kZWJ1ZyhhcmdzKTtcbiAgY29uc3QgcmVzdWx0ID0gZXNsaW50Q2xpKGFyZ3MsIG9wdGlvbnMpO1xuICBsb2dnZXIuZGVidWcoJ2xpbnQgY29tcGxldGVkLiBFeGl0IENvZGU6ICVvJywgcmVzdWx0LmV4aXRDb2RlKTtcbiAgZXhpdENvZGUgPSByZXN1bHQuZXhpdENvZGU7XG4gIGxvZ2dlci5sb2cocmVzdWx0Lm1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBrZXlMaXN0ZW5lcihhcmdzLCBvcHRpb25zKXtcbiAgbGV0IHN0ZGluID0gcHJvY2Vzcy5zdGRpbjtcbiAgaWYoIXN0ZGluLnNldFJhd01vZGUpe1xuICAgIGxvZ2dlci5kZWJ1ZygnUHJvY2VzcyBtaWdodCBiZSB3cmFwcGVkIGV4aXRpbmcga2V5YmluZGluZycpO1xuICAgIHJldHVybjtcbiAgfVxuICBrZXlwcmVzcyhzdGRpbik7XG4gIHN0ZGluLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIGtleVByZXNzTGlzdGVuZXIoY2gsIGtleSl7XG4gICAgbG9nZ2VyLmRlYnVnKCclcyB3YXMgcHJlc3NlZCcsIGtleS5uYW1lKTtcbiAgICBpZihrZXkubmFtZSA9PT0gJ3JldHVybicpe1xuICAgICAgbG9nZ2VyLmRlYnVnKCdyZWxpbnRpbmcuLi4nKTtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhvcHRpb25zKTtcbiAgICAgIHJ1bkxpbnQoYXJncywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmKGtleS5jdHJsICYmIGtleS5uYW1lID09PSAnYycpIHtcbiAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfSk7XG4gIHN0ZGluLnNldFJhd01vZGUodHJ1ZSk7XG4gIHN0ZGluLnJlc3VtZSgpO1xufVxuXG5sb2dnZXIuZGVidWcoJ0FyZ3VtZW50cyBwYXNzZWQ6ICVvJywgYXJncyk7XG5jb25zdCBwYXJzZWRPcHRpb25zID0gaGVscE9wdGlvbnMucGFyc2UoYXJncyk7XG5zZXR0aW5ncy5jbGlPcHRpb25zID0gcGFyc2VkT3B0aW9ucztcblxuaWYocGFyc2VkT3B0aW9ucy5lc3dWZXJzaW9uKXtcbiAgbG9nZ2VyLmxvZyhwa2cudmVyc2lvbik7XG59IGVsc2Uge1xuICBsb2dnZXIuZGVidWcoJ1BhcnNpbmcgYXJncycpO1xuICBjb25zdCBlc2xBcmdzID0gYXJnUGFyc2VyLnBhcnNlKGFyZ3MsIHBhcnNlZE9wdGlvbnMpO1xuICBpZiAoIXBhcnNlZE9wdGlvbnMuaGVscCkge1xuICAgIGxvZ2dlci5kZWJ1ZygnUnVubmluZyBpbml0aWFsIGxpbnQnKTtcbiAgICBydW5MaW50KGVzbEFyZ3MsIHBhcnNlZE9wdGlvbnMpO1xuICAgIGlmIChwYXJzZWRPcHRpb25zLndhdGNoKSB7XG4gICAgICBsb2dnZXIuZGVidWcoJy13IHNlZW4nKTtcbiAgICAgIGtleUxpc3RlbmVyKGVzbEFyZ3MsIHBhcnNlZE9wdGlvbnMpO1xuICAgICAgd2F0Y2hlcihwYXJzZWRPcHRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VyLmxvZyhoZWxwT3B0aW9ucy5nZW5lcmF0ZUhlbHAoKSk7XG4gIH1cbn1cblxuXG5wcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICBsb2dnZXIuZGVidWcoYEV4aXRpbmc6ICR7ZXhpdENvZGV9YCk7XG4gIHByb2Nlc3MuZXhpdChleGl0Q29kZSk7XG59KTtcbiJdfQ==