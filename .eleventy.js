const util = require('util')

module.exports = function(eleventyConfig) {
  // add passthrough copies
  eleventyConfig.addPassthroughCopy({'src/copy-files': '/'})
  
  // Add filters for nunjucks
  eleventyConfig.addFilter('console', function(value) {
    return util.inspect(value)
  })
  
  eleventyConfig.addFilter("keys", function(obj) { 
    return Object.keys(obj)
  })
  
  eleventyConfig.addFilter("a_splice", function(arr, index) {
    arr.splice(index, 1)
    return arr
  })
  
  eleventyConfig.addFilter("a_slice", function(arr, start, end) {
    return arr.slice(start, end)
  })
  
  eleventyConfig.addFilter('getDate', getDate)
  
  eleventyConfig.addNunjucksGlobal('eval', eval)
  
  
  
  // return the config
  return {
    dir: {
      input: "src/content",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    }
  }
}





// Longer functions

function getDate(dateO) {
  
  const date = {
    year:    dateO.getUTCFullYear(),
    month:   dateO.getUTCMonth(),
    date:    dateO.getUTCDate(),
    day:     dateO.getUTCDay(),
    hour:    dateO.getUTCHours(),
    minute:  dateO.getUTCMinutes(),
    second:  dateO.getUTCSeconds(),
    monthName: '',
    dateSuffix: '',
    dayName: ''
  }
  
  // cut of potential '0' prefixes
  if(date.month != '') {
    date.month = String(Number(date.month))
    
    const numMonth = Number(date.month)
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    const numDay = Number(date.day)
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    date.monthName = monthNames[numMonth-1]
    date.dayName   = dayNames[numDay]
  }
  
  if(date.day != '') {
    date.day = String(Number(date.day))
    date.dateSuffix = getDateSuffix(Number(date.date))
  }
  
  return date
}

function getDateSuffix(date) {
  if (date >= 11 && date <= 13) {
    return 'th'
  }
  
  switch (date % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}