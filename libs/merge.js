exports.merge = function (callback) {
    var config = {
        basePath: 'public/javascripts',
        desPath: '',
        files: [
            {
                origin: 'public/javascripts/libs/jquery-common.js',
                des: 'jquery-common-web.js'
            }, {

            }
        ]
    };
    var path = require('path'),
        fs = require('fs'),
        exists = 'exists' in fs ? fs.exists : path.exists,
        existsSync = 'existsSync' in fs ? fs.existsSync : path.existsSync;
    var mingler = require('mingler');

    var _ = require('uquery');
    _.each(config.files, function (e) {
        mingler.mingle(e.origin, function (con) {
            fs.writeFile(e.des, con, function (e) {//会先清空原先的内容
                if (e) throw e;
            });
            if (typeof callback == 'function') {
                callback(content);
            }
        });
    });
};
