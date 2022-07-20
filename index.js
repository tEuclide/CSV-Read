console.log("testing");

//test array
//const revenueData = [];
const completeMatches = [];
const sameAccount = [];
const sameName = [];
const sameAdd1 = [];
const sameAdd2 = [];

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


         for (i = 0; i < results.data.length; i++){
           let num1 = results.data[i].id;
           for (b = 0; b < results.data.length; b++){
             let num2 = results.data[b].id;
              if (num2 === num1 && i !== b){

             sameAccount.push(results.data[b]);}
           }
         }


        //new stuff
         for (i = 0; i < results.data.length; i++){
           //change
           let num1 = results.data[i].id;
           for (b = 0; b < results.data.length; b++){
             //change
             let num2 = results.data[b].id;
              if (num2 === num1 && i !== b){
             sameAccount.push(results.data[b]);}
           }
         }

         for (i = 0; i < results.data.length; i++){
           let num1 = results.data[i].id;
           for (b = 0; b < results.data.length; b++){
             let num2 = results.data[b].id;
              if (num2 === num1 && i !== b){
             sameAccount.push(results.data[b]);}
           }
         }

         for (i = 0; i < results.data.length; i++){
           let num1 = results.data[i].id;
           for (b = 0; b < results.data.length; b++){
             let num2 = results.data[b].id;
              if (num2 === num1 && i !== b){

             sameAccount.push(results.data[b]);}
           }
         }

       }
       });
  });
