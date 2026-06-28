 const d = {
  list: [
   {
      vids: [
      ],
      name: "black hole or smth",
      author: "bikaboypikapika [gugugaga]",
      id: 143723641,
      percentToQualify: 100,
      verificationVid: "https://medal.tv/games/geometry-dash/clips/n0yyRFrdwn6i9JvEH?invite=cr-MSxleGcsNjYxMzUxNjQ3",
    },
       
    /*=============================================================================*/
    {
      vids: [
      ],
      name: "Creo I",
      author: "gsyperia [gsyperia]",
      id: 143655232,
      percentToQualify: 100,
      verificationVid: "https://www.youtube.com/watch?v=MHjIItJmB7M",
    },
        /*=============================================================================*/
    /*=============================================================================*/
    
  ],
  version: [3, 5, 0],
};
const list = d.list;
const version = d.version;
console.log(
  "%c my balls",
  "color: pink; font-weight: bold; background-color: rgb(50,10,40); padding: 2em; margin: 3em 2em 10em 20em; border: 3px solid black; border-radius: 1em; box-shadow: 10px 10px 8px pink;"
);

//automatically changes keys aka awesome
for (let x = 0; x < list.length; x++) {
  if (x < 100) {
    list[x].key = x;
  } else if (x >= 100) {
    list[x].legacykey = 0;
  }
}
