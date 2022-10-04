console.log("testing");

//test array
//const revenueData = [];
const unfiltered = [];
//use header[0] to get object in its own array
const headSplit = [];
const headerSelect = [];
const duplicates = [];


//gets empty div from html to import headers for selection
const headSelect = document.getElementById("selectHead");

const uploadConfirm = document.getElementById('uploadConfirm').
  addEventListener('click', () => {
    Papa.parse(document.getElementById('uploadFile').files[0],
      {download: true,
       header: true,
       skipEmptyLines: true,
       complete: function(results){
         //log everything in array
         //console.log(results);
         //grab specific item out of array
         //console.log(results.data[0].revenue);

         //for selecting specific items and adding to different array
         //for (i = 0; i < results.data.length; i++){
         // revenueData.push(results.data[i].revenue);
         // }
         //console.log(revenueData);

         //unfiltered.push(results.data);
         var sameFileTest = [];

         for (i = 0; i < results.data.length; i++){
          sameFileTest.push(results.data[i]);

         }

         //makes sure same file only gets uploaded once
         if (unfiltered.length < results.data.length){
          for (i = 0; i < results.data.length; i++){
            unfiltered.push(sameFileTest[i]);
          }
         }

         const header = [];
         //push header into own seperate array
          var sampleHead = header.push(results.data[0]);
          headSplit.push(Object.getOwnPropertyNames(header[0]));

          onlyHead = headSplit[0];
         /*
         for (i = 0; i < results.data.length; i++){
           let num1 = results.data[i].id;
           for (b = 0; b < results.data.length; b++){
             let num2 = results.data[b].id;
              if (num2 === num1 && i !== b){

             sameAccount.push(results.data[b]);}
           }
         }
         */
         alert("File has been uploaded successfully");
}});
  });



const selectHeaders = document.getElementById('loadHeads').
    addEventListener('click', () => {

      //displays headers to web page
      for (i = 0; i < onlyHead.length; i++){
        let para = document.createElement("p");
        let node = document.createTextNode(onlyHead[i]);
        para.appendChild(node);
        para.setAttribute('id', onlyHead[i]);

        headSelect.appendChild(para);
      }
});

function sorting(headName){

  for (i = 0; i < unfiltered.data.length; i++){
    if(unfiltered.data[i].headName === ''){
      return;
    }else{
      for (b = 0; b < unfiltered.data.length; b++){
        if(unfiltered.data[i].headName === unfiltered.data[b].headName){
          duplicates.push(unfiltered.data[b]);
        }
      }
    }
  }
}

const sort = document.getElementById('sortNow').
    addEventListener('click', () => {
      alert("clicked");
    });
