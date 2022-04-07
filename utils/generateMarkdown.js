// TODO: Create a function that returns a license badge based on which license is passed in




// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseArray = ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)','[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)','[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)','[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)','[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)','[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
let licenseLink=licenseArray.find(element => {
 if(element.match(license)) {
   return true
 }
 else return false
})
  return licenseLink
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `     
  # ${data.title}
  ${renderLicenseBadge(data.license)}

     
  ## Description
   ${data.description}
      
 
 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
      
    

  ## Installation
  ${data.installation}
    
   ## Usage
      
  ${data.usage}

  ## License
This software is licensed under the ${data.license} license.
   
  ## Contributors
  ${data.contributors}

 
  ## Testing
         
   ${data.testing}
   
  ## Questions
  Check out my GitHub profile at https://github.com/${data.github}
        
  Or contact me at ${data.email}
  `;
}

module.exports = generateMarkdown;
