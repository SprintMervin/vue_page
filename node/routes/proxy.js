/**
 * Created by HUI on 16/9/1.
 */
var express=require('express'),
    router=express.Router(),
    config=require('../config'),
    httpProxy=require('http-proxy'),
    proxy=httpProxy.createProxyServer({});

proxy.on('error',function(err,req,res){
    res.writeHead(500,{
        'Content-Type':'text/plain'
    });
});
proxy.on('proxyReq', function(proxyReq, req, res, options) {
    if(req.method == "POST" && req.body){
        proxyReq.write(req.body);
        proxyReq.end();
    }
});
router.get('/api/*',function (req,res) {
    delete req.headers.host;
    proxy.web(req,res,{ target:config.proxy.Host});
});

router.post('/api/*',function (req,res) {
    delete req.headers.host;
    var headers = {}
    if (req.body){
        var data = JSON.stringify(req.body);
        req.body = data
        headers = {
            'Content-type': 'application/json',
            'Content-Length':Buffer.byteLength(data,'utf8')
        }
    }
    proxy.web(req,res,{ target:config.proxy.Host,headers:headers});
});

module.exports = router;
