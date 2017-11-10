'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/SupportCaseSearchBasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {SupportCaseSearchBasic}
 */
var SupportCaseSearchBasic = module.exports = function SupportCaseSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(SupportCaseSearchBasic, SearchRecord);

/**
 * @override
 */
SupportCaseSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:SupportCaseSearchBasic'
  };

  return attrs;
};
