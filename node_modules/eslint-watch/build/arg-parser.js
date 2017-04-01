'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('arg-parser');
logger.debug('Loaded');

var simpleDetail = 'simple-detail';
var formatterPath = 'formatters';

var defaultPath = './';
var formatKey = '-f';
var keys = {
  '-w': true,
  '--watch': true,
  '--changed': true,
  '--esw-version': true
};
var formats = {
  'simple': true,
  'simple-success': true,
  'simple-detail': true
};

var getPath = function getPath(options) {
  logger.debug('GetPath: %s', options.format);
  var formatPath = _path2.default.join(__dirname, formatterPath, options.format);
  logger.debug(formatPath);
  return formatPath;
};

exports.default = {
  parse: function argParser(cliArgs, options) {
    var arr = [];
    var dirs = options._;
    var formatSpecified = false;
    var args = _lodash2.default.slice(cliArgs, 2, cliArgs.length);
    logger.debug('Directories to check: %o', dirs);
    logger.debug('Args %o', args);
    _lodash2.default.each(args, function (item) {
      if (!keys[item] && !formats[item]) {
        logger.debug('Pushing item: %s', item);
        arr.push(item);
      }
      if (formats[item]) {
        formatSpecified = true;
        logger.debug('Format specified');
        arr.push(getPath(options));
      }
    });
    if (options.format === simpleDetail && !formatSpecified) {
      logger.debug('setting custom formatter');
      arr.push(formatKey);
      arr.push(getPath(options));
    }
    if (!dirs.length) {
      arr.push(defaultPath);
      logger.debug('Setting default path: %s', defaultPath);
    }
    return arr;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmctcGFyc2VyLmpzIl0sIm5hbWVzIjpbImxvZ2dlciIsImRlYnVnIiwic2ltcGxlRGV0YWlsIiwiZm9ybWF0dGVyUGF0aCIsImRlZmF1bHRQYXRoIiwiZm9ybWF0S2V5Iiwia2V5cyIsImZvcm1hdHMiLCJnZXRQYXRoIiwib3B0aW9ucyIsImZvcm1hdCIsImZvcm1hdFBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwicGFyc2UiLCJhcmdQYXJzZXIiLCJjbGlBcmdzIiwiYXJyIiwiZGlycyIsIl8iLCJmb3JtYXRTcGVjaWZpZWQiLCJhcmdzIiwic2xpY2UiLCJsZW5ndGgiLCJlYWNoIiwiaXRlbSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxzQkFBTyxZQUFQLENBQWY7QUFDQUEsT0FBT0MsS0FBUCxDQUFhLFFBQWI7O0FBRUEsSUFBTUMsZUFBZSxlQUFyQjtBQUNBLElBQU1DLGdCQUFnQixZQUF0Qjs7QUFFQSxJQUFNQyxjQUFjLElBQXBCO0FBQ0EsSUFBTUMsWUFBWSxJQUFsQjtBQUNBLElBQU1DLE9BQU87QUFDWCxRQUFNLElBREs7QUFFWCxhQUFXLElBRkE7QUFHWCxlQUFhLElBSEY7QUFJWCxtQkFBaUI7QUFKTixDQUFiO0FBTUEsSUFBTUMsVUFBVTtBQUNkLFlBQVUsSUFESTtBQUVkLG9CQUFrQixJQUZKO0FBR2QsbUJBQWlCO0FBSEgsQ0FBaEI7O0FBTUEsSUFBTUMsVUFBVSxTQUFTQSxPQUFULENBQWlCQyxPQUFqQixFQUF5QjtBQUN2Q1QsU0FBT0MsS0FBUCxDQUFhLGFBQWIsRUFBNEJRLFFBQVFDLE1BQXBDO0FBQ0EsTUFBTUMsYUFBYSxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUJWLGFBQXJCLEVBQW9DTSxRQUFRQyxNQUE1QyxDQUFuQjtBQUNBVixTQUFPQyxLQUFQLENBQWFVLFVBQWI7QUFDQSxTQUFPQSxVQUFQO0FBQ0QsQ0FMRDs7a0JBT2U7QUFDYkcsU0FBTyxTQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QlAsT0FBNUIsRUFBcUM7QUFDMUMsUUFBSVEsTUFBTSxFQUFWO0FBQ0EsUUFBSUMsT0FBT1QsUUFBUVUsQ0FBbkI7QUFDQSxRQUFJQyxrQkFBa0IsS0FBdEI7QUFDQSxRQUFJQyxPQUFPLGlCQUFFQyxLQUFGLENBQVFOLE9BQVIsRUFBaUIsQ0FBakIsRUFBb0JBLFFBQVFPLE1BQTVCLENBQVg7QUFDQXZCLFdBQU9DLEtBQVAsQ0FBYSwwQkFBYixFQUF5Q2lCLElBQXpDO0FBQ0FsQixXQUFPQyxLQUFQLENBQWEsU0FBYixFQUF3Qm9CLElBQXhCO0FBQ0EscUJBQUVHLElBQUYsQ0FBT0gsSUFBUCxFQUFhLFVBQVNJLElBQVQsRUFBYztBQUN6QixVQUFJLENBQUNuQixLQUFLbUIsSUFBTCxDQUFELElBQWUsQ0FBQ2xCLFFBQVFrQixJQUFSLENBQXBCLEVBQW1DO0FBQ2pDekIsZUFBT0MsS0FBUCxDQUFhLGtCQUFiLEVBQWlDd0IsSUFBakM7QUFDQVIsWUFBSVMsSUFBSixDQUFTRCxJQUFUO0FBQ0Q7QUFDRCxVQUFJbEIsUUFBUWtCLElBQVIsQ0FBSixFQUFtQjtBQUNqQkwsMEJBQWtCLElBQWxCO0FBQ0FwQixlQUFPQyxLQUFQLENBQWEsa0JBQWI7QUFDQWdCLFlBQUlTLElBQUosQ0FBU2xCLFFBQVFDLE9BQVIsQ0FBVDtBQUNEO0FBQ0YsS0FWRDtBQVdBLFFBQUlBLFFBQVFDLE1BQVIsS0FBbUJSLFlBQW5CLElBQW1DLENBQUNrQixlQUF4QyxFQUF5RDtBQUN2RHBCLGFBQU9DLEtBQVAsQ0FBYSwwQkFBYjtBQUNBZ0IsVUFBSVMsSUFBSixDQUFTckIsU0FBVDtBQUNBWSxVQUFJUyxJQUFKLENBQVNsQixRQUFRQyxPQUFSLENBQVQ7QUFDRDtBQUNELFFBQUksQ0FBQ1MsS0FBS0ssTUFBVixFQUFrQjtBQUNoQk4sVUFBSVMsSUFBSixDQUFTdEIsV0FBVDtBQUNBSixhQUFPQyxLQUFQLENBQWEsMEJBQWIsRUFBeUNHLFdBQXpDO0FBQ0Q7QUFDRCxXQUFPYSxHQUFQO0FBQ0Q7QUE3QlksQyIsImZpbGUiOiJhcmctcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdhcmctcGFyc2VyJyk7XG5sb2dnZXIuZGVidWcoJ0xvYWRlZCcpO1xuXG5jb25zdCBzaW1wbGVEZXRhaWwgPSAnc2ltcGxlLWRldGFpbCc7XG5jb25zdCBmb3JtYXR0ZXJQYXRoID0gJ2Zvcm1hdHRlcnMnO1xuXG5jb25zdCBkZWZhdWx0UGF0aCA9ICcuLyc7XG5jb25zdCBmb3JtYXRLZXkgPSAnLWYnO1xuY29uc3Qga2V5cyA9IHtcbiAgJy13JzogdHJ1ZSxcbiAgJy0td2F0Y2gnOiB0cnVlLFxuICAnLS1jaGFuZ2VkJzogdHJ1ZSxcbiAgJy0tZXN3LXZlcnNpb24nOiB0cnVlXG59O1xuY29uc3QgZm9ybWF0cyA9IHtcbiAgJ3NpbXBsZSc6IHRydWUsXG4gICdzaW1wbGUtc3VjY2Vzcyc6IHRydWUsXG4gICdzaW1wbGUtZGV0YWlsJzogdHJ1ZVxufTtcblxuY29uc3QgZ2V0UGF0aCA9IGZ1bmN0aW9uIGdldFBhdGgob3B0aW9ucyl7XG4gIGxvZ2dlci5kZWJ1ZygnR2V0UGF0aDogJXMnLCBvcHRpb25zLmZvcm1hdCk7XG4gIGNvbnN0IGZvcm1hdFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBmb3JtYXR0ZXJQYXRoLCBvcHRpb25zLmZvcm1hdCk7XG4gIGxvZ2dlci5kZWJ1Zyhmb3JtYXRQYXRoKTtcbiAgcmV0dXJuIGZvcm1hdFBhdGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBhcnNlOiBmdW5jdGlvbiBhcmdQYXJzZXIoY2xpQXJncywgb3B0aW9ucykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgZGlycyA9IG9wdGlvbnMuXztcbiAgICBsZXQgZm9ybWF0U3BlY2lmaWVkID0gZmFsc2U7XG4gICAgbGV0IGFyZ3MgPSBfLnNsaWNlKGNsaUFyZ3MsIDIsIGNsaUFyZ3MubGVuZ3RoKTtcbiAgICBsb2dnZXIuZGVidWcoJ0RpcmVjdG9yaWVzIHRvIGNoZWNrOiAlbycsIGRpcnMpO1xuICAgIGxvZ2dlci5kZWJ1ZygnQXJncyAlbycsIGFyZ3MpO1xuICAgIF8uZWFjaChhcmdzLCBmdW5jdGlvbihpdGVtKXtcbiAgICAgIGlmICgha2V5c1tpdGVtXSAmJiAhZm9ybWF0c1tpdGVtXSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoJ1B1c2hpbmcgaXRlbTogJXMnLCBpdGVtKTtcbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAoZm9ybWF0c1tpdGVtXSkge1xuICAgICAgICBmb3JtYXRTcGVjaWZpZWQgPSB0cnVlO1xuICAgICAgICBsb2dnZXIuZGVidWcoJ0Zvcm1hdCBzcGVjaWZpZWQnKTtcbiAgICAgICAgYXJyLnB1c2goZ2V0UGF0aChvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMuZm9ybWF0ID09PSBzaW1wbGVEZXRhaWwgJiYgIWZvcm1hdFNwZWNpZmllZCkge1xuICAgICAgbG9nZ2VyLmRlYnVnKCdzZXR0aW5nIGN1c3RvbSBmb3JtYXR0ZXInKTtcbiAgICAgIGFyci5wdXNoKGZvcm1hdEtleSk7XG4gICAgICBhcnIucHVzaChnZXRQYXRoKG9wdGlvbnMpKTtcbiAgICB9XG4gICAgaWYgKCFkaXJzLmxlbmd0aCkge1xuICAgICAgYXJyLnB1c2goZGVmYXVsdFBhdGgpO1xuICAgICAgbG9nZ2VyLmRlYnVnKCdTZXR0aW5nIGRlZmF1bHQgcGF0aDogJXMnLCBkZWZhdWx0UGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbn07XG4iXX0=