function sort(a,b) {
  if (a > b) {
    return [b, a]
  } else {
    return [a, b]
  }
};

function join(a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var newArray = [];
  var pushed = newArray.length;
  var allIn = aLength + bLength;
  var ai = -1;
  var bi = -1;
  while (pushed < allIn) {
    ai++;
    bi++;
    if (a[ai] < b[bi]) {
      newArray.push(a[ai]);
      bi--;
      pushed = newArray.length;
    } else {
      newArray.push(b[bi]);
      ai--;
      pushed = newArray.length;
    };
    if (ai == (aLength - 1)) {
      newArray = newArray.concat(b.slice(bi + 1))
      pushed = newArray.length;
    } else if (bi == (bLength - 1)) {
      newArray = newArray.concat(a.slice(ai + 1))
      pushed = newArray.length;
    };
  };
  return newArray;
};

function subs(a) {
  newArray = []
  const length = a.length;
  for (var i = 0; i < length; i+=2) {
    if (i >= length) {
      return newArray
    } else if ((i + 1) == length) {
      newArray.push([a[i]])
    } else {
      newArray.push([a[i], a[i+1]])
    }
  };
  return newArray;
};

function merge(a) {
  merged = []
  var subArrays = subs(a)
  let sorted = subArrays.map(sub => {
    if (sub.length == 2) {
      return sort(sub[0],sub[1])
    } else {
      return sub
    };
  });
  merged = sorted
  while (merged.length > 1) {
    array = []
    for (var i = 0; i < merged.length; i += 2) {
      if (i == (merged.length - 1)) {
        array.push(merged[i])
      } else {
        array.push(join(merged[i], merged[i+1]))
      }
    };
    merged = array
  };
  return merged[0];
};

module.exports = {
    sort: sort,
    join: join,
    subs: subs,
    merge: merge
};
