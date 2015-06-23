/**
 * Modules
 */
var request = require('superagent')
var thunkify = require('thunkify')

/**
 * Download
 */
function download(url, cb) {
  request
    .get(url)
    .buffer(true)
    .end(function(err, res) {
      if(err) return cb(err)
      if(res.status !== 200) return cb(new Error('Download failed ' + res.status))
      cb(null, res.body)
    })
}

/**
 * Exports
 */

module.exports = thunkify(download)