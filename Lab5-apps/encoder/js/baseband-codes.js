function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
      //  AMI = "- 0 _" => - = 1; 0 = 0; _ = -1
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getNRZLEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1) symbol = '∣▔▔';
      if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '▔▔';
      if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔▔';
      if (parseInt(bits[i].value) == 0) symbol = '▁▁';
      if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁▁';
      if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '▁▁';
      result.push(symbol);
  }
  return result;
}


function getNRZMEncoding(bits) {
  var result = [];
  let state = false;
  for (var i = 0; i < bits.length; i++) {
    let symbol = "---";
      if (parseInt(bits[i].value) == 1 && i == 0) {
        symbol = '∣▔▔';
        state = true;
      }
      if (parseInt(bits[i].value) == 1 && i > 0 && state == true){
        symbol = '|▁▁';
        state = false;
      } else if (parseInt(bits[i].value) == 1 && i > 0 && state == false){
        symbol = '∣▔▔';
        state = true;
      } 
      if (parseInt(bits[i].value) == 0 && i == 0) symbol = '▁▁';
      if (parseInt(bits[i].value) == 0 && i > 0 && state == false) symbol = '▁▁';
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) symbol = '▔▔';
      result.push(symbol);
  }
  return result;
}

function getNRZSEncoding(bits) {
  var result = [];
  let state = false;
  for (var i = 0; i < bits.length; i++) {
    let symbol = "---";
      if (parseInt(bits[i].value) == 1 && i == 0) {
        symbol = '▁▁';
        state = false;
      }
      if (parseInt(bits[i].value) == 1 && i > 0 && state == true){
        symbol = '▔▔';
      } else if (parseInt(bits[i].value) == 1 && i > 0 && state == false){
        symbol = '▁▁';
      } 
      if (parseInt(bits[i].value) == 0 && i == 0) symbol = '∣▔▔';;
      if (parseInt(bits[i].value) == 0 && i > 0 && state == false){
        symbol = '∣▔▔';
        state = true;
      } 
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) {
        symbol = '|▁▁';
        state = false;
      } 
      result.push(symbol);
  }
  return result;
}

function getRZEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1) symbol = '∣▔∣▁';
      if (parseInt(bits[i].value) == 0) symbol = '▁▁';
      result.push(symbol);
  }
  return result;
}

function getBLEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1) symbol = '∣▔∣▁';
      if (parseInt(bits[i].value) == 0) symbol = '▁∣▔';
      if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▁∣▔';
      if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '▔∣▁';
      result.push(symbol);
  }
  return result;
}

function getBMEncoding(bits) {
  var result = [];
  let state = false;
  for (var i = 0; i < bits.length; i++) {
    let symbol = "---";
      if (parseInt(bits[i].value) == 1 && i == 0) {
        symbol = '∣▔∣▁';
      }
      if (parseInt(bits[i].value) == 1 && i > 0 && state == true){
        symbol = '▁∣▔∣';
      } else if (parseInt(bits[i].value) == 1 && i > 0 && state == false){
        symbol = '∣▔∣▁';
      } 
      if (parseInt(bits[i].value) == 0 && i == 0) symbol = '▁▁';;
      if (parseInt(bits[i].value) == 0 && i > 0 && state == false){
        symbol = '∣▔▔';
        state = true;
      } 
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) {
        symbol = '|▁▁';
        state = false;
      } 
      result.push(symbol);
  }
  return result;
}

function getBSEncoding(bits) {
  var result = [];
  let state = false;
  for (var i = 0; i < bits.length; i++) {
    let symbol = "---";
      if (parseInt(bits[i].value) == 1 && i == 0) {
        symbol = '∣▔▔';
        state = true;
      }
      if (parseInt(bits[i].value) == 1 && i > 0 && state == true){
        symbol = '|▁▁';
        state = false;
      } else if (parseInt(bits[i].value) == 1 && i > 0 && state == false){
        symbol = '∣▔▔';
        state = true;
      } 
      if (parseInt(bits[i].value) == 0 && i == 0) symbol = '∣▔∣▁';
      if (parseInt(bits[i].value) == 0 && i > 0 && state == false){
        symbol = '∣▔∣▁';
      } 
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) {
        symbol = '∣▁∣▔';
      } 
      result.push(symbol);
  }
  return result;
}

function getBLDiffEncoding(bits) {
  var result = [];
  let state = false;
  for (var i = 0; i < bits.length; i++) {
    let symbol = "---";
      if (parseInt(bits[i].value) == 1 && i == 0) {
        symbol = '▁∣▔';
        state = true;
      }
      if (parseInt(bits[i].value) == 1 && i > 0 && state == true){
        symbol = '▔∣▁';
        state = false;
      } else if (parseInt(bits[i].value) == 1 && i > 0 && state == false){
        symbol = '▁∣▔';
        state = true;
      } 
      if (parseInt(bits[i].value) == 0 && i == 0) symbol = '∣▔∣▁';
      if (parseInt(bits[i].value) == 0 && i > 0 && state == false){
        symbol = '∣▔∣▁';
      } 
      else if (parseInt(bits[i].value) == 0 && i > 0 && state == true) {
        symbol = '|▁∣▔';
      } 
      result.push(symbol);
  }
  return result;
}

function getDelayEncoding(bits) {
  var result = [];
  let state = false;
  for (var i = 0; i < bits.length; i++) {
    let symbol = "---";
      if (parseInt(bits[i].value) == 1 && i == 0) {
        symbol = '▁∣▔';
        state = true;
      }
      if (parseInt(bits[i].value) == 1 && i > 0 && state == true){
        symbol = '▔∣▁';
        state = false;
      } else if (parseInt(bits[i].value) == 1 && i > 0 && state == false){
        symbol = '▁∣▔';
        state = true;
      } 

      if(i<=bits.length-2){
        if (parseInt(bits[i].value) == 0 && bits[i+1].value == 0){
           if(state == false){
            symbol = '▁▁∣';
            state = true;
          } else if(state == true){
            symbol = '▔▔∣';
            state = false;
          }
        } else if (parseInt(bits[i].value) == 0 && bits[i+1].value != 0){
          if(state == false){
            symbol = '▁▁';
          } else if(state == true){
            symbol = '▔▔';
          }
        }
      } else if(i == bits.length-1){
        // consider thet the next bit (9th bit is a zero)
        if(state == false){
          symbol = '▁▁∣';
          state = true;
        } else if(state == true){
          symbol = '▔▔∣';
          state = false;
        }
      }
      result.push(symbol);
  }
  return result;
}