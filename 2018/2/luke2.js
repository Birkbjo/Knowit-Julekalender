const fs = require("fs");

const slopes = {};
const lines = fs
    .readFileSync("input-rain.txt", "UTF-8")
    .split("\n")
    .filter(line => !!line)
    .map(parseLine)
    .map(getSlope)
    .forEach(slope => {
        slopes[slope] = (slopes[slope] || 0) + 1;
    });

console.log(Math.max(...Object.values(slopes)));

function parseLine(line) {
    const rainPointsStr = line.split(";");
    const rainPoints = rainPointsStr.map(str =>
        str
            .substring(1, str.length - 1)
            .split(",")
            .map(Number)
    );
    return rainPoints;
}

function getSlope(line) {
    const [point1, point2] = line;
    return (point1[1] - point2[1]) / (point1[0] - point2[0]);
}
