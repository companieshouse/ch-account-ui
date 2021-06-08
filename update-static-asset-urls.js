const replaceInFiles = require('replace-in-files')
const BASE_PATH = process.env.BASE_PATH || ''

const options = {
  files: [
    './out/css/*.css',
    './out/_next/static/css/*.css'
  ],

  // See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // Replacement
  from: /url\((.*?)\)/g, // string or regex
  to: 'url(' + BASE_PATH + '$1)', // string or fn  (fn: carrying last argument - path to replaced file)

  // See more: https://www.npmjs.com/package/glob
  optionsForFiles: { // default
    ignore: [
      '**/node_modules/**'
    ]
  },

  // format: `${fileName}-${year}-${month}-${day}_${hour}:${minute}:${second}.{fileExtension}`
  //            fileName-2017-11-01_21:29:55.js
  // date of createFile old file or last modificate (if not find create date)
  saveOldFile: false, // default

  // Character encoding for reading/writing files
  encoding: 'utf8', // default

  shouldSkipBinaryFiles: true, // default
  onlyFindPathsWithoutReplace: false, // default
  returnPaths: true, // default
  returnCountOfMatchesByPaths: true // default
}

replaceInFiles(options)
  .then(({ changedFiles, countOfMatchesByPaths }) => {
    console.log('File url update matches:', countOfMatchesByPaths)
    console.log('BASE_PATH was', JSON.stringify(BASE_PATH))
    console.log('--------------------------------------------------')
    console.log('If the build at ./out is not going to be served from `' + BASE_PATH + '` then please update the `BASE_PATH` environment var and re-run `npm run build`. The base path should be the part of the url after the domain e.g. if your BASE_PATH was /myPath, your deployment would be accessible at http://somedomain.com/myPath')
  })
  .catch(error => {
    console.error('Error occurred:', error)
  })
