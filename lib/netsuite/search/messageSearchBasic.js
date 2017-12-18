'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/messagesearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {MessageSearchBasic}
 */
var MessageSearchBasic = module.exports = function MessageSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(MessageSearchBasic, SearchRecord);

/**
 * @override
 */
MessageSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:MessageSearchBasic'
  };

  return attrs;
};
