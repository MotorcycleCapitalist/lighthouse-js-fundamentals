for (var x = 100; x < 201; x = x + 1) {
  if (x % 3 && x % 4) {
    console.log("LoopyLighthouse");
  } else {
    if (x % 3 == 0) {
      console.log("Loopy");
    }
    if (x % 4 == 0) {
      console.log("Lighthouse");
    }
    else {
      console.log(x);
    }
  }
} 