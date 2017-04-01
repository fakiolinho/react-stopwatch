'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _optionator = require('optionator');

var _optionator2 = _interopRequireDefault(_optionator);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _help = require('./eslint/help');

var _help2 = _interopRequireDefault(_help);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('options');
logger.debug('Loaded');

var settings = {
  prepend: 'esw [options] [file.js ...] [dir ...]',
  concatRepeatedArrays: true,
  mergeRepeatedObjects: true
};

var myOptions = [{
  heading: 'Options'
}, {
  option: 'help',
  alias: 'h',
  type: 'Boolean',
  description: 'Show help'
}, {
  option: 'format',
  alias: 'f',
  type: 'String',
  default: 'simple-detail',
  description: 'Use a specific output format'
}, {
  option: 'watch',
  alias: 'w',
  type: 'Boolean',
  description: 'Enable file watch'
}, {
  option: 'changed',
  type: 'Boolean',
  description: 'Enables single file linting while watch is enabled'
}, {
  option: 'esw-version',
  type: 'Boolean',
  description: "Prints Eslint-Watch's Version"
}];

var eslintOptions = (0, _help2.default)();
var newOptions = _lodash2.default.union(myOptions, eslintOptions);
settings.options = newOptions;

exports.default = (0, _optionator2.default)(settings);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbImxvZ2dlciIsImRlYnVnIiwic2V0dGluZ3MiLCJwcmVwZW5kIiwiY29uY2F0UmVwZWF0ZWRBcnJheXMiLCJtZXJnZVJlcGVhdGVkT2JqZWN0cyIsIm15T3B0aW9ucyIsImhlYWRpbmciLCJvcHRpb24iLCJhbGlhcyIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHQiLCJlc2xpbnRPcHRpb25zIiwibmV3T3B0aW9ucyIsInVuaW9uIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsc0JBQU8sU0FBUCxDQUFmO0FBQ0FBLE9BQU9DLEtBQVAsQ0FBYSxRQUFiOztBQUVBLElBQU1DLFdBQVc7QUFDZkMsV0FBUyx1Q0FETTtBQUVmQyx3QkFBc0IsSUFGUDtBQUdmQyx3QkFBc0I7QUFIUCxDQUFqQjs7QUFNQSxJQUFNQyxZQUFZLENBQUM7QUFDakJDLFdBQVM7QUFEUSxDQUFELEVBRWY7QUFDREMsVUFBUSxNQURQO0FBRURDLFNBQU8sR0FGTjtBQUdEQyxRQUFNLFNBSEw7QUFJREMsZUFBYTtBQUpaLENBRmUsRUFPZjtBQUNESCxVQUFRLFFBRFA7QUFFREMsU0FBTyxHQUZOO0FBR0RDLFFBQU0sUUFITDtBQUlERSxXQUFTLGVBSlI7QUFLREQsZUFBYTtBQUxaLENBUGUsRUFhZjtBQUNESCxVQUFRLE9BRFA7QUFFREMsU0FBTyxHQUZOO0FBR0RDLFFBQU0sU0FITDtBQUlEQyxlQUFhO0FBSlosQ0FiZSxFQWtCaEI7QUFDQUgsVUFBUSxTQURSO0FBRUFFLFFBQU0sU0FGTjtBQUdBQyxlQUFhO0FBSGIsQ0FsQmdCLEVBc0JoQjtBQUNBSCxVQUFRLGFBRFI7QUFFQUUsUUFBTSxTQUZOO0FBR0FDLGVBQWE7QUFIYixDQXRCZ0IsQ0FBbEI7O0FBNEJBLElBQU1FLGdCQUFnQixxQkFBdEI7QUFDQSxJQUFNQyxhQUFhLGlCQUFFQyxLQUFGLENBQVFULFNBQVIsRUFBbUJPLGFBQW5CLENBQW5CO0FBQ0FYLFNBQVNjLE9BQVQsR0FBbUJGLFVBQW5COztrQkFFZSwwQkFBV1osUUFBWCxDIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3B0aW9uYXRvciBmcm9tICdvcHRpb25hdG9yJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBnZXRPcHRpb25zIGZyb20gJy4vZXNsaW50L2hlbHAnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlcignb3B0aW9ucycpO1xubG9nZ2VyLmRlYnVnKCdMb2FkZWQnKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIHByZXBlbmQ6ICdlc3cgW29wdGlvbnNdIFtmaWxlLmpzIC4uLl0gW2RpciAuLi5dJyxcbiAgY29uY2F0UmVwZWF0ZWRBcnJheXM6IHRydWUsXG4gIG1lcmdlUmVwZWF0ZWRPYmplY3RzOiB0cnVlXG59O1xuXG5jb25zdCBteU9wdGlvbnMgPSBbe1xuICBoZWFkaW5nOiAnT3B0aW9ucydcbn0sIHtcbiAgb3B0aW9uOiAnaGVscCcsXG4gIGFsaWFzOiAnaCcsXG4gIHR5cGU6ICdCb29sZWFuJyxcbiAgZGVzY3JpcHRpb246ICdTaG93IGhlbHAnXG59LCB7XG4gIG9wdGlvbjogJ2Zvcm1hdCcsXG4gIGFsaWFzOiAnZicsXG4gIHR5cGU6ICdTdHJpbmcnLFxuICBkZWZhdWx0OiAnc2ltcGxlLWRldGFpbCcsXG4gIGRlc2NyaXB0aW9uOiAnVXNlIGEgc3BlY2lmaWMgb3V0cHV0IGZvcm1hdCdcbn0sIHtcbiAgb3B0aW9uOiAnd2F0Y2gnLFxuICBhbGlhczogJ3cnLFxuICB0eXBlOiAnQm9vbGVhbicsXG4gIGRlc2NyaXB0aW9uOiAnRW5hYmxlIGZpbGUgd2F0Y2gnXG59LHtcbiAgb3B0aW9uOiAnY2hhbmdlZCcsXG4gIHR5cGU6ICdCb29sZWFuJyxcbiAgZGVzY3JpcHRpb246ICdFbmFibGVzIHNpbmdsZSBmaWxlIGxpbnRpbmcgd2hpbGUgd2F0Y2ggaXMgZW5hYmxlZCdcbn0se1xuICBvcHRpb246ICdlc3ctdmVyc2lvbicsXG4gIHR5cGU6ICdCb29sZWFuJyxcbiAgZGVzY3JpcHRpb246IFwiUHJpbnRzIEVzbGludC1XYXRjaCdzIFZlcnNpb25cIlxufV07XG5cbmNvbnN0IGVzbGludE9wdGlvbnMgPSBnZXRPcHRpb25zKCk7XG5jb25zdCBuZXdPcHRpb25zID0gXy51bmlvbihteU9wdGlvbnMsIGVzbGludE9wdGlvbnMpO1xuc2V0dGluZ3Mub3B0aW9ucyA9IG5ld09wdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbmF0b3Ioc2V0dGluZ3MpO1xuIl19