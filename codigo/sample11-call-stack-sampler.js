var a = function () { console.log(new Error().stack); };
var b = function() { a(); };
var c = function() { b(); };

// Resultados de chamadas no console do navegador Chrome.
// A chamada à função a() resultará em um "stack trace" de 3 linhas:
a();  // => VM66:1 Error
      //        at a (<anonymous>:1:31)
      //        at <anonymous>:1:1

// A chamada à função b() resultará em um "stack trace" de 4 linhas:
b();  // => VM66:1 Error
      //        at a (<anonymous>:1:31)
      //        at b (<anonymous>:1:18)
      //        at <anonymous>:1:1

// A chamada à função c() resultará em um "stack trace" de 5 linhas:
c();  // => VM66:1 Error
      //        at a (<anonymous>:1:31)
      //        at b (<anonymous>:1:18)
      //        at c (<anonymous>:1:18)
      //        at <anonymous>:1:1