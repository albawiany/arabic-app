angular.module('arabicProvider', [])
  .factory('arabicProvider', [function () {
    'use strict';
    var arabicProvider = {
      convertNumberToArabic: function (inputNumber) {
        var returnNumber, modularNumber, firstIteration, arabicNumber;
        firstIteration = true;
        if (!inputNumber) {
          return;
        }
        while (inputNumber > 0) {
          modularNumber = Math.round(inputNumber % 10);
          switch (modularNumber) {
            case 0:
              arabicNumber = '٠';
              break;
            case 1:
              arabicNumber = '١';
              break;
            case 2:
              arabicNumber = '٢';
              break;
            case 3:
              arabicNumber = '٣';
              break;
            case 4:
              arabicNumber = '٤';
              break;
            case 5:
              arabicNumber = '٥';
              break;
            case 6:
              arabicNumber = '٦';
              break;
            case 7:
              arabicNumber = '٧';
              break;
            case 8:
              arabicNumber = '٨';
              break;
            case 9:
              arabicNumber = '٩';
              break;
            default:
              console.log('error');
              break;
          }
          if (firstIteration) {
            returnNumber = arabicNumber;
            firstIteration = false;
          }
          else {
            returnNumber = returnNumber.concat(arabicNumber);
          }
          inputNumber = Math.round(inputNumber / 10);
        }
        return returnNumber.split('').reverse().join('');
      }
    };
    return arabicProvider;
  }]);
