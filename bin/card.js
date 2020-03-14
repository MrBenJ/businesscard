#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'singleDouble',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Ben Junya /'),
  handle: chalk.cyan('MrBenJ'),
  work: chalk.white('Lead Frontend Developer at StaffMeUp Inc.'),
  twitter: chalk.cyan('twitter.com/MrBenJ5'),
  github: chalk.cyan('github.com/mrbenj'),
  linkedin: chalk.cyan('linkedin.com/in/benjunya'),
  web: chalk.cyan('modernjsbyexample.net'),
  npx: chalk.white('npx mrbenj'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
`
${heading}
Full Stack Engineer | Speaker
Writer | Kinda funny i guess

${working}
${twittering}
${githubing}
${linkedining}
${webing}

${carding}
`

console.log(
  chalk.cyanBright(
    boxen(output, options)
  )
)
