listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
 let a = '<ul class="list-group">'
 items.forEach((item) => {
    a = a + "\n" + listItem(item);
 }
  )

 return a + "\n" + "</ul>"
}

console.log(unorderedList([ 'milk', 'butter', 'bread' ]));

//Below is using map() instead of forEach()
// unorderedList = (items) => {
// let a = '<ul class="list-group">'
// const listCon = items.map(item => a + "\n" + listItem(item));
// return listCon + "\n" + "</ul>"
//}
