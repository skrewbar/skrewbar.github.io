const tdList = document.querySelectorAll("td");
const noSubitEx = /0 \/ --/;
const WAEx = /[1-9]+ \/ --/;
const ACEx = /[1-9]+ \/ [0-9]+/;

for (const td of tdList) {
  if (td === td.parentElement.lastElementChild) continue;

  if (WAEx.test(td.innerText)) td.style["background-color"] = "#f4b0b0";
  else if (ACEx.test(td.innerText)) td.style["background-color"] = "#b0f4b0";
}
