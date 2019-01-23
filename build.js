#!/usr/bin/env node

const sass = require('node-sass');
const fs = require('fs-extra');
const { join } = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const cssnano = require('cssnano');

const DIR = __dirname;
const tachyonsStartString = `/*!TACHYONS-START*/`;
const tachyonsEndString = `/*!TACHYONS-END*/`;
const inputSCSSPath = join(DIR, 'sane-tachyons.scss');
const outputCSSPath = join(DIR, 'sane-tachyons.min.css');
const outputCSSMapPath = join(DIR, 'sane-tachyons.min.css.map');

postcss([autoprefixer, cssnano])
  .process(
    sass.renderSync({
      data: fs.readFileSync(inputSCSSPath).toString(),
      outputStyle: 'compressed'
    }).css.toString(),
    {
      from: inputSCSSPath,
      to: outputCSSPath
    }
  )
  .then(({ css, map }) => {
    fs.writeFile(outputCSSPath, css);
    if (map) fs.writeFile(outputCSSMapPath, map);
  });

const css = sass.renderSync({
  data: `$breakpoints: ();\n${fs.readFileSync(inputSCSSPath).toString()}`,
  outputStyle: 'compact'
}).css.toString();

const tachyonsStartIndex = css.indexOf(tachyonsStartString);
const tachyonsEndIndex = css.indexOf(tachyonsEndString);
const tachyons = css.substring(
  tachyonsStartIndex + tachyonsStartString.length,
  tachyonsEndIndex
);

const docsRoot = join(DIR, 'docs');
const docsIndex = join(docsRoot, 'README.md');

const docsAutoVariablesStart = `<!--AUTOGENERATED-VARIABLES-START-->`;
const docsAutoVariablesEnd = `<!--AUTOGENERATED-VARIABLES-END-->`;
const docsAutoContentsStart = `<!--AUTOGENERATED-CONTENTS-START-->`;

const docsMd = fs.readFileSync(docsIndex).toString();

const docsAutoVariablesStartIndex = docsMd.indexOf(docsAutoVariablesStart);
const docsAutoVariablesEndIndex = docsMd.indexOf(docsAutoVariablesEnd);
const docsAutoContentsStartIndex = docsMd.indexOf(docsAutoContentsStart);

fs.writeFileSync(
  docsIndex,
  docsMd.substring(0, docsAutoVariablesStartIndex) +
  `${docsAutoVariablesStart}\n\n\`\`\`scss\n{{variables}}\n\`\`\`` +
  docsMd.substring(docsAutoVariablesEndIndex, docsAutoContentsStartIndex) +
  docsAutoContentsStart + '\n\n```scss\n' +
  tachyons.trim() + '\n```\n\n'
);
