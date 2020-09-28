#!/usr/bin/env node
'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const link = require('terminal-link')
const sparkly = require('sparkly')


// option, the style from the boxen card
const option = {
      padding: 1,
      borderColor: 'red',
      borderStyle: 'round',
      float: 'center',
      align: 'center',
}

const text = {
      name: chalk.yellow.bold('Robin'),
      pseudo : chalk.red.bold('JackRob'),
      git: link('JackRob', 'https://github.com/JackRob'),
      work: chalk.blue('Web Developer'),
}

const outpout = text.name + ' / ' + text.pseudo + ' \n\n'
                              + chalk.bold('Github :')   + text.git + '\n' 
                              + chalk.bold('Work : ') + text.work + '\n\n'
                              + sparkly([0,2,4,6,8,6,4,2,0], {style: 'fire'})

//Outpout the information from boxen
console.log(boxen(outpout, option))
