/**
 * Display the progress of the day
 * @param {*} jour 
 * @param {*} fait 
 * @param {*} total 
 * @param {*} containerId 
 */
function displayProgress(jour, fait, total, containerId) {
  let container = document.getElementById(containerId);
  let barreProg = document.createElement("div");
  barreProg.classList.add("barre-prog");
  let pbTextWrapper = document.createElement("div");
  pbTextWrapper.classList.add("pb-text-wrapper");
  let spanJour = document.createElement("span");
  spanJour.classList.add("pb-text-element");
  spanJour.innerHTML = jour;
  let spanPbText = document.createElement("span");
  spanPbText.classList.add("pb-text");
  spanPbText.innerHTML = getDayProgress(fait, total) + " %";
  pbTextWrapper.appendChild(spanPbText);
  pbTextWrapper.appendChild(spanJour);
  let pbWrapper = document.createElement("div");
  pbWrapper.classList.add("pb-wrapper");
  let pbBar = document.createElement("div");
  pbBar.classList.add("pb-bar");
  pbBar.style.width = getDayProgress(fait, total) + "%";
  pbWrapper.appendChild(pbBar);
  barreProg.appendChild(pbTextWrapper);
  barreProg.appendChild(pbWrapper);
  container.appendChild(barreProg);
}

function getDayProgress(fait, total) {
  return Math.round((fait / total) * 100);
}

/**
 * Total route progress
 * @param {*} progress 
 * @returns 
 */
function getTotalProgress(progress) {
  let totalProgress = 0;
  let totalNow = 0;
  let totalTotal = 0;
  for (let i = 0; i < progress.length; i++) {
    totalNow += progress[i][1];
    totalTotal += progress[i][2];
  }
  totalProgress = (totalNow / totalTotal) * 100;

  return totalProgress;
}

// updateProgress(container_le, 0);

/* Affiche les cercles de progression */
function updateProgress(container, $progress) {
  var bar = new ProgressBar.Circle(document.getElementById(container), {
    color: "#fff",
    // This has to be the same size as the maximum width to prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    trailColor: "#4b4b4b",
    easing: "easeInOut",
    duration: 1400,
    from: {
      color: "#9600ff",
      width: 10,
    },
    to: {
      color: "#9600ff",
      width: 10,
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("0");
      } else {
        circle.setText(value);
      }
    },
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = "1.7rem";
  bar.animate($progress); // Number from 0.0 to 1.0
}
