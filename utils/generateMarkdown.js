// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  else if (license == 'GNU') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license == 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license == 'Boost') {
    return '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
  }
  else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license == 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license == 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }
  else if (license == 'Boost') {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  }
  else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 'This applicaton is covered under the ' + license + ' license.'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  const { license, title, description, dependency, disclaimer, contribution, test, email, username } = input;
  return `
  # ${title}
  ${renderLicenseBadge(license)}
  ## Description 
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  ## Installation
  To install dependencies, run the following command:
  <br/>
  ${dependency}
  ## Usage
  ${disclaimer}
  ## License
  ${renderLicenseSection(license)}
  <br/>
  ${renderLicenseLink(license)}
  ## Contributing
  ${contribution}
  ## Tests
  To run tests, use the following command:
  <br/>
  ${test}
  ## Questions
  If you have any questions, concerns, or recommendations feel free to contact me through my email:
  <br />
  ${email}
  <br/>
  You can also contribute to my other projects at:
  <br/>
  https://github.com/${username}/
`;
}

module.exports = {
  generateMarkdown
}