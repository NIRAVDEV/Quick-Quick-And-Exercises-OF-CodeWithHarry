console.log("starting");

function createCard(title, cName, views, timeOld, duration, thumbnail) {
  document.getElementById("title").innerText = title;
  document.getElementById("cName").innerText = cName;
  document.getElementById("views").innerText = formatViews(views);
  document.getElementById("timeOld").innerText = timeOld + " months old";
  document.getElementById("duration-box").innerText = duration;
  document.getElementById("thumbnail").src = thumbnail;

  function formatViews(num) {
    const abbrDict = [
      [3, "K"],
      [6, "M"],
      [9, "B"],
    ];

    for (let abbrPair of abbrDict) {
      const abbrLimit = 10 ** abbrPair[0];
      const nextLimit = abbrDict[abbrDict.indexOf(abbrPair) + 1]
        ? 10 ** abbrDict[abbrDict.indexOf(abbrPair) + 1][0]
        : Infinity;
      const abbrSymbol = abbrPair[1];

      if (num >= abbrLimit && num < nextLimit) {
        return `${Math.floor(num / abbrLimit)}${abbrSymbol}`;
      }
    }

    return num;
  }
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);