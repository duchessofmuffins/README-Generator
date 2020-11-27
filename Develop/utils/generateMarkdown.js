// this is what is generated as far as README written out material goes
function renderLicenseBadge() {
  if (license !== 'None') {
    return `[GitHub License] (https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// function to generate markdown for README
// (---COMMENTED OUT FOR LATER WORK----)
// ${renderLicenseBadge(data.license)}
// For more information about the license, click below:
  
// *[License](https://opensource.org/licenses/${response.license})
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Test](#test)
*[Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
-commented out for later work-

## Contributors
${data.contributors}

## Test
${data.test}

## Questions
Questions?  Feel free to contact me at ${data.email}.
You can find more of my work at [${data.github}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
