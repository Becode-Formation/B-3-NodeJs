#!/usr/bin/env node
'use strict'

const listCountry = require('country-list')
const axios = require('axios')

// Get current Year
const date = new Date();
const year = String(date.getFullYear())

let country = listCountry.getCode('Belgium')

//Get the API
axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`)
      .then(res => {
            let holidays = res.data
            holidays.forEach(elt => {
                  let date = elt.date
                  let name = elt.name
                  console.log(`${name} le ${date}.`)
            });
      })
      .catch(err => console.log(err))