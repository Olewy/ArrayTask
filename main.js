"use strict";

let list = [5, 6];

function showArray() {
  console.log(list);
}

function addArrayElement() {
  let newElement = Number(document.getElementById("addInput").value);
  list.push(newElement);
  console.log(list);
}

function deleteElementByPositon() {
  let deleteElement = Number(document.getElementById("removeInput").value);
  list.splice(deleteElement, 1);
  console.log(list);
}

function deletElementByValue() {
  let deleteElement2 = Number(document.getElementById("removeInput2").value);
  let index = list.indexOf(deleteElement2);
  list.splice(index, 1);
  console.log(list);
}

let mutlipliedList;
function multiplyArray() {
  mutlipliedList = list.map((element) => {
    return element * 2;
  });
  list = mutlipliedList;
  console.log(list);
}

function sumArray() {
  let sumList = mutlipliedList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  console.log(sumList);
}
