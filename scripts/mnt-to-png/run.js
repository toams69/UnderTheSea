var fs          = require( 'fs' )
var path        = require( 'path' )
var readline    = require('readline')

var srcFolder     = path.join(__dirname, "src/1m") 
var outputFolder  = path.join(__dirname, "output") 
var x0            = 125000
var y0            = 6830001

function fileToMap(file, fileName) {
  var lineReader = readline.createInterface({
    input: fs.createReadStream(file)
  })

  var lineNumber = 1
  var xRef = null
  var yRef = null
  var currentX = null
  var cellSize = null
  var map = []
  lineReader.on('line', function (line) {
    if (lineNumber === 3) {
      xRef = parseInt(line.replace("xllcenter ", ""))
    } else if (lineNumber === 4) {
      yRef = parseInt(line.replace("yllcenter ", ""))
    } else if (lineNumber === 5) {
      cellSize = parseInt(line.replace("cellsize ", ""))
    } else if (lineNumber > 6) {
      var data = line.substr(1).split(' ') // remove first space
      data.forEach(function (element, index) {
        map.push({x: xRef + (index * cellSize), y: yRef + ((lineNumber - 7) * cellSize), z: parseInt(parseFloat(element) * 10) / 10})
      })
    }
    lineNumber++
  })
  lineReader.on('close', function () {
    fs.writeFile(path.join(outputFolder, fileName), map.map(function(e) { return `${e.x-x0} ${e.y-y0} ${e.z}`}).join('\n'))
    //console.log(map.map(function(e) { return `${e.x-x0} ${e.y-y0} ${e.z}`}).join('\n'))
  })
}

// Loop through all the files in the temp directory
fs.readdir( srcFolder, function( err, files ) {
  if( err ) {
      console.error( "Could not list the directory.", err )
  } 
  files.forEach( function( file, index ) {
    var filePath = path.join( srcFolder, file )
    fs.stat( filePath, function( error, stat ) {
      if( error ) {
          console.error( "Error stating file.", error )
          return
      }
      if( index >= 60 && index < 80 && stat.isFile() ) {
          fileToMap(filePath, file)
      }
    } );
  } );
} );