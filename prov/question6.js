// 3. (3p) Arrayer och Funktioner
// Skriv klart funktionen median som tar en array av nummer
// och returnerar median-värdet. Median-värdet är det mittersta
// numret i en serie med nummer. T.ex: är medianvärdet 7 i [1, 5, 7, 23, 120]
// I en array med jämnt antal nummer är median-värdet medelvärdet av
// de två mittersta talen: T.ex: 7.5 i [1, 5, 10, 33].
// Medelvärdet räknas då ut så här: (5 + 10)/2 = 7.5

// Följ denna algoritm för att lösa uppgiften:
// 1. Sortera arrayen med funktionen sortArray
// 2. Kolla om arrayens längd är udda eller jämn med funktionen isEven
// 3. Om arrayens längd är udda returnera talet på mitten-position ((arrayens längd - 1) / 2)
// 4. Om arryens längd är jämn räkna ut och returnera medelvärdet av de två mittersta talen.
//    Dessa har positioner: arrayens längd / 2 och  arrayens längd / 2 - 1
// OBS! Er funktion median måste använda funktionerna sortArray och isEven

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function isEven(num) {
  return num % 2 == 0;
}

function median(arr) {
  //Sortera arrayen
  const sortedArray = sortArray(arr);

  //kolla om arayens längs ör udda eller jämna
  const isEvenLength = isEven(sortedArray.length);

  // Om arrayens längd är udda
  if (!isEvenLength) {
    const middleIndex = Math.floor((sortedArray.length - 1) / 2);
    return sortedArray[middleIndex];
  } else {
    // Om arrayens längd är jämna
    const middleIndex1 = sortedArray.length / 2;
    const middleIndex2 = middleIndex1 - 1;
    const middleValue1 = sortedArray[middleIndex1];
    const middleValue2 = sortedArray[middleIndex2];
    return (middleValue1 + middleValue2) / 2;
  }
}

console.log(median([1, 5, 7, 23, 120])); // ska logga 7
console.log(median([1, 5, 10, 33])); // ska logga 7.5
