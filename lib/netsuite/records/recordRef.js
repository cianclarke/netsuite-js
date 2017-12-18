'use strict';

var util = require('util'),
  BaseObject = require('../baseObject');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/other/recordref.html?mode=package
 *
 * @class
 * @extends BaseObject
 * @return {RecordRef}
 */
var RecordRef = module.exports = function RecordRef() {
  BaseObject.call(this);

  /**
   * @member {String|Number}
   */
  this.internalId = null;

  /**
   * @member {String|Number}
   */
  this.externalId = null;
};

util.inherits(RecordRef, BaseObject);

/**
 * @override
 */
RecordRef.prototype.getAttributes = function() {

  var attrs = {
    'xsi:type': 'platformCore:RecordRef'
  };
  if (this['xsi:type']){
    attrs['xsi:type'] = this['xsi:type'];
    delete this['xsi:type'];
    // delete it or the xsi type ends up as a child element
  }

  if (this.type){
    attrs.type = this.type;
  }

  if (this.internalId) {
    attrs.internalId = this.internalId;
  }

  if (this.externalId) {
    attrs.externalId = this.externalId;
  }

  return attrs;
};

/**
 * @override
 */
RecordRef.prototype.getUnserializablePropertyNames = function() {
  return ['internalId', 'externalId', 'type', 'soapType'];
};

/**
 * @override
 */
RecordRef.prototype.getSOAPType = function() {
  // Always baseRef
  let type = this.soapType || 'baseRef';
  return type;
};
