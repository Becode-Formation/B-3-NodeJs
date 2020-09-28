#!/usr/bin/env node
'use strict'

const listCountry = require('country-list')
const axios = require('axios')
const ora = require('ora')
const chalk = require('chalk')

// Loading

// Get current Year
const date = new Date();
const year = String(date.getFullYear())

let country = listCountry.getCode('Belgium')

//Get the API
let getAPI =() =>{
      const load = ora('Loading.....\n')
      load.start()
      axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`)
      .then(res => {
            let holidays = res.data
            holidays.forEach(elt => {
                  let date = chalk.blue.italic(elt.date)
                  let name = chalk.yellow.bold(elt.name)
                  return load.text = console.log(`${name} le ${date}.`)
                  // console.log(`${name} le ${date}.`)
            });
            load.stop()
      })
      .catch(err => console.log(err))
}

getAPI()

