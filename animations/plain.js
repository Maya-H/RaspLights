/*******************************
 christmas animations
 *******************************/
var common = require("./common.js");
var name = "plain.js";

/*******************************
 plain methods
 *******************************/

var Color;
var Brightness = 255;

function plain() {
    this.Plain = function (args, strip) {
        console.log("Starting Plain Color");
        Color = parseInt("0x" + args.Color1);

        strip.Mode = "Color";
        strip.SetStripColor(Color);
        strip.SetBrightness(args.Brightness);
    };
}

module.exports = new plain();
