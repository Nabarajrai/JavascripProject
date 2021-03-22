(function () {
  const name = prompt("please enter your name");
  const choice = prompt(`${name} are you vegeterian or veg ?`);
  if (choice == "veg") {
    const veg = ["curry", "dal", "bhaat"];
    const rando = Math.floor(Math.random() * veg.length);
    const veges = veg[rando];
    alert(`${name} you have a ${veges}`);
  } else if (choice == "nonveg") {
    const veg = ["pork", "meat", "goat"];
    const rando = Math.floor(Math.random() * veg.length);
    const veges = veg[rando];
    alert(`${name} you have a ${veges}`);
  } else {
    alert("invalid");
  }
})();
