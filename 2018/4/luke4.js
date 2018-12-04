const fs = require("fs");
const PNG = require("pngjs").PNG;
const fileName = "input-pokemon-jakt.png";

fs.createReadStream(fileName)
    .pipe(new PNG({filterType: 2}))
    .on("parsed", function(data) {
        for([index, byte] of data.entries()) {
            data[index] <<= 4
        }
        this.pack().pipe(fs.createWriteStream("pokemon.png"))
    })
