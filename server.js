var http = require("http"),
    url = require("url"),
    fs = require("fs");

var routing = require("./routing");

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true), pathname = urlObj.pathname, query = urlObj.query;

    //->资源文件的路由判断
    var reg = /\.(TXT|JSON|HTML|CSS|JS|PNG|JPG|GIF|JPEG|SVG|ICON|ICO|MP3|OGG|WAV|MP4|WEBM|BMP)/i;
    if (reg.test(pathname)){
        try {

            var suffix = reg.exec(pathname)[1].toUpperCase();
            var suffixType = routing.suffixType(suffix);
            var conFile = /(HTML|JSON|CSS|JS|TXT|SVG)/i.test(suffix) ? fs.readFileSync("." + pathname, "utf8") : fs.readFileSync("." + pathname);
            res.writeHead(200, {'content-type': suffixType + ";charset=utf-8"});
            res.end(conFile);


        } catch (e) {
            res.writeHead(404);
            res.end();
        }
    }


});
server.listen(800, function () {
    console.log("服务创建成功,正在监听80端口~");
});