#!/usr/bin/env node

const fs = require('fs-extra');
const { join } = require('path');

const propertyValueRegex = / {2}([a-zA-Z-][0-9a-zA-Z-]*): ([^;]*);/i;

const startTime = Date.now();

fs.readFile(join(__dirname, 'allStyles.css'))
  .then(buffer => {
    let pointer = 0;
    let nextNewline = 0;

    const propertyMap = Object.create(null);

    do {
      if (nextNewline) {
        const line = buffer.toString('utf8', pointer, nextNewline);

        const match = line.match(propertyValueRegex);
        if (match && (match[1][0] !== '-')) {
          if (!propertyMap[match[1]]) propertyMap[match[1]] = { '{length}': 0 };
          propertyMap[match[1]]['{length}'] += 1;
          propertyMap[match[1]][match[2]] = ~~propertyMap[match[1]][match[2]] + 1;
        }

        pointer = nextNewline + 1;
      }

      nextNewline = buffer.indexOf('\n', pointer);
    } while (nextNewline !== -1);

    Object.keys(propertyMap)
      .sort((ka, kb) => (propertyMap[kb]['{length}'] - propertyMap[ka]['{length}']))
      .forEach(property => {
        console.log(property, propertyMap[property]['{length}']);
      });

    // console.log(JSON.stringify(propertyMap, null, 2));
  })
  .then(() => {
    const endTime = Date.now();
    console.log(`Finished parsing in ${(endTime - startTime) / 1000} seconds`);
  });
