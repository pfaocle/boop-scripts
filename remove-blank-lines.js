/**
  {
    "api":1,
    "name":"Remove blank lines",
    "description":"Removes all blank lines from your text",
    "author":"Paul Byrne",
    "icon":"collapse",
    "tags":"remove,blank,lines"
  }
**/

const removeEmptyLines = str => str.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');

function main(state) {
    let allText = state.fullText;
    let numBlankLines = allText ? (allText.match(/^[ \t]*$/gm) || []).length : 0;

    state.fullText = removeEmptyLines(allText);
    state.postInfo(`${ numBlankLines } blank lines removed`);
}
