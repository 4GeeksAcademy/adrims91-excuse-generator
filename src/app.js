/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "my phone", "the car"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //write your code here
  const excuseGenerator = (str1, str2, str3, str4) => {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
    return `${str1[randomWho]} ${str2[randomAction]} ${str3[randomWhat]} ${str4[randomWhen]}`;
  };
  document.querySelector("#excuse").innerHTML = excuseGenerator(
    who,
    action,
    what,
    when
  );
};
