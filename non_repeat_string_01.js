function non_repeat(str) {
  str = str.split("");
  let i;
  let j;
  for (i = 0; i < str.length; i++) {
    console.log("innitial letter is ", str[i]);
    for (j = i + 1; j < str.length; j++) {
      console.log("comparative letter is ", str[j]);
      if (str[i] === str[j]) {
        console.log("Match at ", j);
        console.log("remove ", str[i]);
        console.log("remove ", str[j]);
        str.splice(i, 1);
        str.splice(j - 1, 1);
        console.log("You are left with ", str);
        break;
      }
    }
  }
  console.log("All your base are belong to us");
  console.log(str);
  return 0;
}

non_repeat("abcabd");
