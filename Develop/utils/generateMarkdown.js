// this is what is generated as far as README written out material goes
function renderLicenseBadge() {
  if (license !== 'None') {
    return `[GitHub License] (https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

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
For more information about the license, click below:
  
*[License](https://opensource.org/licenses/${response.license})


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
