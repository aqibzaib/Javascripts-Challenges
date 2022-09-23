logs = ["d1/", "../", "../", "../"];
var minOperations = function (logs) {
  let depth = 0;

  for (var value = 0; value < logs.length; value++) {
    if (logs[value] == "./") {
      continue;
    } else if (logs[value] == "../") {
      depth--;
      if (depth < 0) {
        depth = 0;
      }
    } else {
      depth++;
    }
  }
  return depth;
  console.log(depth);
};

// minOperations(logs);
console.log(minOperations(logs));
