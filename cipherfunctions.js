// general functions


    
    
    // zigzag 4 rail cipher 30 column encryption    
    function zigzagencrypt(text) {
        var result = ""
        // make a map
        var textasarray = text.split("") // turn into an array per character
        if (textasarray.length != 30) {
          var extrasneeded = 30-textasarray.length
          var extraset = new Array(extrasneeded).fill('x')
          textasarray = textasarray.concat(extraset)
        }
        // create four arrays of 30 spaces
        var onearray = new Array(30).fill('~')
        onearrayct = 0
        var twoarray = new Array(30).fill('~')
        twoarrayct = -1
        var threearray = new Array(30).fill('~')
        threearrayct = -1
        var fourarray = new Array(30).fill('~')
        fourarrayct = -1
        for (var [index, el] of textasarray.entries()) { 
          if (onearrayct == index) { 
            onearray[index] = textasarray[index]
            twoarrayct = onearrayct+1
            onearrayct = onearrayct+6  
          } // end if onearray
          if (twoarrayct == index) { 
            twoarray[index] = textasarray[index]
            threearrayct = twoarrayct+1
            twoarrayct = twoarrayct+4  
          } // end if twoarray
          if (threearrayct == index && index != onearrayct-6) { 
            threearray[index] = textasarray[index]
            if (fourarrayct == -1) {fourarrayct = threearrayct+1}
            threearrayct = threearrayct+2  
          } // end if twoarray
          if (fourarrayct == index) { 
            fourarray[index] = textasarray[index]
            fourarrayct = fourarrayct+6 
          } // end if twoarray

        } // end loop to add letters
        
        // show map test in output
        var theoutput = onearray.join("") + "\n" + twoarray.join("") + "\n" + threearray.join("") + "\n" + fourarray.join("")
        document.getElementById('zigzagoutput').value = theoutput
        // read the map into the encrypted answer
        var fullarray = onearray.concat(twoarray)
        fullarray = fullarray.concat(threearray)
        fullarray = fullarray.concat(fourarray)
        var encryptedanswer = []
        for (var checkone of fullarray) {
          if(checkone != "~") {encryptedanswer.push(checkone)}
        }
      return encryptedanswer.join("");  
    }
    

/* snippets I often forget
        // loop with indexes
        for (var [index, el] of array.entries()) { 
        }
*/
  
  
