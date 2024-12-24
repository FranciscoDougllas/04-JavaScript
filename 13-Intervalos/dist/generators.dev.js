"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(numberGenerator);

/**
 * Gera uma sequência infinita de números inteiros começando de 1.
 * 
 * @generator
 * @yields {number} O próximo número na sequência.
 */
function numberGenerator() {
  var number;
  return regeneratorRuntime.wrap(function numberGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          number = 1;

        case 1:
          if (!true) {
            _context.next = 6;
            break;
          }

          _context.next = 4;
          return number++;

        case 4:
          _context.next = 1;
          break;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var generator = numberGenerator();
console.log(generator.next().value); // 1

console.log(generator.next().value); // 2

console.log(generator.next().value); // 3

console.log(generator.next().value); // 4

console.log(generator.next().value); // 5