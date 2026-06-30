 const d = {
  list: [
       
    /*=============================================================================*/
    {
      vids: [
          {
          user: "bikaboypikapika",
          link: "https://youtu.be/X4kHufWod2E",
          percent: 100,
          hz: "240hz",
        },
      ],
      name: "Creo I",
      author: "gsyperia [gsyperia]",
      id: 143655232,
      percentToQualify: 100,
      verificationVid: "https://www.youtube.com/watch?v=MHjIItJmB7M",
    },
     {
      vids: [
      ],
      name: "Heartbeat",
      author: "bikaboypikapika [bikaboypikapika]",
      id: 143655232,
      percentToQualify: 100,
      verificationVid: "https://youtu.be/r0B9VoNz0Xs",
    },
     {
      vids: [
        {
          user: "gsyperia",
          link: "https://www.youtube.com/watch?v=7qwKfLvU-Ck",
          percent: 100,
          hz: "240hz",
        },
      ],
      name: "AT THE SPEED OF GD",
      author: "bikaboypikapika [bikaboypikapika]",
      id: 143730543,
      percentToQualify: 100,
      verificationVid: "https://youtu.be/p7cH_huzWEs",
    },
       {
      vids: [
       {
          user: "bikaboypikapika",
          link: "https://youtu.be/ys4vUM-TToM",
          percent: 100,
          hz: "240hz",
        },
        {
          user: "gsyperia",
          link: "https://www.youtube.com/watch?v=0HwSJayePTU",
          percent: 100,
          hz: "240hz",
        },
      ],
      name: "GLITTERBOUND",
      author: "NINCOMPOOPPPY [NINCOMPOOPPPY]",
      id: 137202057,
      percentToQualify: 100,
      verificationVid: "",
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
