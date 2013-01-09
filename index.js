
/**
 * Module dependencies
 */

var jsonp = require('jsonp')
	,	qs = require('querystring')
	, endpoints = require('./endpoints');

/**
 * Module exports
 */

module.exports = function(api_key) {
  return new tmdb(api_key);
}

/**
 * Constants
 */

var base_url = 'http://api.themoviedb.org/3';

/**
 * Constructor
 *
 * @param {String} api_key
 */

function tmdb(api_key) {
  if("string" != typeof api_key) {
    throw new Error('Invalid API key');
  }

  this.api_key = api_key;
}

for(var e in endpoints) {
	(function(endpoints, e){
		tmdb.prototype[e] = function(options, fn) {
			options.api_key = this.api_key;
  		jsonp(base_url + endpoints[e].replace('{id}', options.id) + '?' + qs.stringify(options), function(err, res){
				fn(err, res);
  		});
		};
	})(endpoints, e);
}
