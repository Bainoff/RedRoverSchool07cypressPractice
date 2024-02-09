metka1:
for (let i = 0; i < 5; i = i + 1) {      
   metka2:
   for (let j = 0; j < 5; j = j + 1) {   
       if (i == j) {
           continue metka1;
        } else {
          if (i == 3) {
              break metka2; 
          }
          console.log(i, j);
        }
    }
}