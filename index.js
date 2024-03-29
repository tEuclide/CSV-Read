console.log("testing");

const unfiltered = [];
const headSplit = [];
const headerSelect = [];
const duplicates = [];
const noExact = [];

//gets empty div from html to import headers for selection
const headSelect = document.getElementById("selectHead");


//possibly use window.confirm for this step
//window.confirm("Submit File");
const uploadConfirm = document.getElementById('uploadConfirm').
  addEventListener('click', () => {
    Papa.parse(document.getElementById('uploadFile').files[0],
      {download: true,
       header: true,
       skipEmptyLines: true,
       complete: function(results){
         var sameFileTest = [];

         for (i = 0; i < results.data.length; i++){
          sameFileTest.push(results.data[i]);

           }

           const header = [];
           //push header into own seperate array
           var sampleHead = header.push(results.data[0]);
           headSplit.push(Object.getOwnPropertyNames(header[0]));

           onlyHead = headSplit[0];

           alert("File has been uploaded successfully");

         //makes sure same file only gets uploaded once
         if (unfiltered.length < results.data.length){
          for (i = 0; i < results.data.length; i++){
            unfiltered.push(sameFileTest[i]);
          }
           }

         //calls different function to start removing exact duplicates before levenstein filter
         removeExact();
}});
  });



//function to get rid of exact duplicates from file
function removeExact() {
    console.log("remove exact working");

    for (i = 0; i < unfiltered.length; i++) {
        var noDupe = false;
        console.log(unfiltered[i]);

        for (b = 0; b < noExact.length; b++) {

            if (unfiltered[i] = noExact[b]) {
                noDupe = true;
                console.log("found a match");
            }
        }

        console.log(noDupe);
        if (noDupe === false) {
            noExact.push(unfiltered[i]);
        }
    }
};



//create empty div for items to get better spacing
const selectHeaders = document.getElementById('loadHeads').
    addEventListener('click', () => {

      //displays headers to web page
      for (i = 0; i < onlyHead.length; i++){
          let para = document.createElement("Input");
          para.setAttribute("type", "checkbox");
          let paraP = document.createElement("label");

        let node = document.createTextNode(onlyHead[i]);
        paraP.appendChild(node);
        para.setAttribute('id', onlyHead[i]);

          headSelect.appendChild(para);
          headSelect.appendChild(paraP);
      }
});


/* WIP 

const sort = document.getElementById('sortNow').
    addEventListener('click', () => {
      alert("clicked");
    });


*/


//is this part neccesary, or just create my own function to feed in from scratch
    function levenshteinFilter(query, array) {
      const results = [];
      
      // Loop through each item in the array
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const distance = levenshteinDistance(query, item);
        
        // If the distance is less than or equal to the length of the query divided by 2, add it to the results
        if (distance <= Math.floor(query.length / 2)) {
          results.push(item);
        }
      }
      
      return results;
    }
    


//must have this part in the program
    function levenshteinDistance(s, t) {
      // Create a 2D matrix with s.length + 1 rows and t.length + 1 columns
      const matrix = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0));
      
      // Set the first row and column of the matrix
      for (let i = 1; i <= s.length; i++) {
        matrix[i][0] = i;
      }
      for (let j = 1; j <= t.length; j++) {
        matrix[0][j] = j;
      }
      
      // Loop through the matrix and fill in the values
      for (let j = 1; j <= t.length; j++) {
        for (let i = 1; i <= s.length; i++) {
          if (s[i - 1] === t[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j - 1] + 1
            );
          }
        }
      }
      
      // Return the bottom-right value of the matrix
      return matrix[s.length][t.length];
    }


    //using recuring timeout to keep checking if checkboxes have been checked
/*
    function checkBoxCheck() {
      console.log(onlyHead);
      setTimeout(checkBoxCheck, 5000);
    }

    checkBoxCheck();
    */