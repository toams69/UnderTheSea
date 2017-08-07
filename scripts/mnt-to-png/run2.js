var fs          = require( 'fs' )
var path        = require( 'path' )
var readline    = require('readline')

var srcFolder     = path.join(__dirname, "src/1m") 
var outputFolder  = path.join(__dirname, "output") 

var yMax          = 6834001;
var xMin          = 125000;

// Bethaume Anse
var targetAreaXmin = 4280;
var targetAreaXmax = 10915;
var targetAreaYmax = 4174;
var targetAreaYmin = 989;

function fileToMap(file, fileName, baseY) {
  var lineReader = readline.createInterface({
    input: fs.createReadStream(file)
  })

  var lineNumber = 1
  var xRef = null
  var yRef = null
  var map = []
 
  for (var i = 0; i < 1000; i++) {
    var internalMap = [];
    for (var j = 0; j < 1000; j++) {
      internalMap.push("-99999");
    }
    map.push(internalMap);
  }

  lineReader.on('line', function (line) {
    if (lineNumber === 3) {
      xRef = parseInt(line.replace("xllcenter ", ""))
    } else if (lineNumber === 4) {
      yRef = parseInt(line.replace("yllcenter ", ""))
    } else if (lineNumber === 5) {
      cellSize = parseInt(line.replace("cellsize ", ""))
    } else if (lineNumber > 6) {
      var data = line[0] === ' ' ? line.substr(1).split(' ') : line.split(' ') // remove first space
      data.forEach(function (element, index) {
        map[index][lineNumber - 7] = parseInt(parseFloat(element) * 10) / 10
      })
    }
    lineNumber++
  })
  
  lineReader.on('close', function () {
    var st = map.map(function(e, x) {
      return e.map(function(z, y) {
          var fX = x + (xRef - xMin);
          var fY = y + (yMax - yRef);
          if (fX < targetAreaXmin || fX > targetAreaXmax || fY > targetAreaYmax || fY < targetAreaYmin) {
            return ''
          } else {
          return fX + ' '+ (fY * -1) + ' ' + z + '\n'
          }
        }).join('')
      }).join('')
    fs.writeFile(path.join(outputFolder, `${fileName}`), st)
  })
}

// TODO sync this in order to not have out of memory
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
      if(stat.isFile() ) {
          fileToMap(filePath, file)
      }
    } );
  } );
} );