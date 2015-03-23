self.onmessage = function(event) {
    console.log("Hemos recibido " + event.data);
    buscarPrimos(event.data);

}



function buscarPrimos(limite) {
  var n = 1;
  primelist = "";
  search: while (n<parseInt(limite)) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  self.postMessage(primelist)
}

