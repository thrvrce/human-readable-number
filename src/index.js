module.exports = function toReadable (number) {
    //var arrOfNumbers = new Array();
  var tmpNumber = number;
  var curNumber = 0;
  var strNumber = '';
  var counter   = 0;

  if(number === 0)
    strNumber = 'zero';
  while( tmpNumber !== 0 ){
    counter++;
    //console.log(`counterstart: ${counter}`);
    //console.log(`tmpnumberStart: ${tmpNumber}`);

    curNumber = (tmpNumber % (10));
    //console.log(`CurNumber: ${curNumber}`);
    tmpNumber = (tmpNumber - curNumber) / 10;
    //console.log(`tmpnumberEnd: ${tmpNumber}`);
    switch (curNumber){
      case 0:
        break;
      case 1:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'one'+strNumber; break;
          case 2: switch (strNumber){
                    case 'one': strNumber = 'eleven';break;
                    case 'two': strNumber = 'twelve';break;
                    case 'three': strNumber = 'thirteen';break;
                    case 'four': strNumber = 'fourteen';break;
                    case 'five': strNumber = 'fifteen';break;
                    case 'six': strNumber = 'sixteen';break;
                    case 'seven': strNumber = 'seventeen';break;
                    case 'eight': strNumber = 'eighteen';break;
                    case 'nine': strNumber = 'nineteen';break;
                    default: strNumber = 'ten';break;
                  }

        };break;
      case 2:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'two'+strNumber; break;
          case 2: strNumber = 'twenty '+strNumber; break;

        };break;
      case 3:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'three'+strNumber; break;
          case 2: strNumber = 'thirty '+strNumber; break;

        };break;
      case 4:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'four'+strNumber; break;
          case 2: strNumber = 'forty '+strNumber; break;

        };break;
      case 5:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'five'+strNumber; break;
          case 2: strNumber = 'fifty '+strNumber; break;

        };break;
      case 6:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'six'+strNumber; break;
          case 2: strNumber = 'sixty '+strNumber; break;

        };break;
      case 7:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'seven'+strNumber; break;
          case 2: strNumber = 'seventy '+strNumber; break;

        };break;
      case 8:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'eight'+strNumber; break;
          case 2: strNumber = 'eighty '+strNumber; break;

        };break;
      case 9:
        switch (counter){
          case 3: strNumber = ' hundred '+strNumber;
          case 1: strNumber = 'nine'+strNumber; break;
          case 2: strNumber = 'ninety '+strNumber; break;

        };break;
      default:
        break;
    }
  //console.log(`${strNumber}`);

  }
  return strNumber.trim();
}
