var fs = require("fs"),
    path = require("path"),
    dir,
    extension;

dir = process.argv[2];
extension = "." + process.argv[3];

fs.readdir(dir, function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) == extension) {
            console.log(file);
        }
    });
});