window.onload = function () {
  let sec = 0;
  let mili = 0;
  const changeSec = document.getElementsByClassName("sec")[0];
  const changeMili = document.getElementsByClassName("mili")[0];
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const start = document.getElementById("start");
  let interval;

  start.onclick = function() {
    clearInterval(interval)
    interval = setInterval(() => {
      mili += 1;
      if (mili > 0 && mili < 10) {
        changeMili.innerText = "0" + mili;
      } else {
        changeMili.innerText = mili;
      }
      if (mili == 100) {
        sec += 1;
        if (sec > 0 && sec < 10) {
          changeSec.innerText = "0" + sec;
        } else {
          changeSec.innerText = sec;
        }
        mili = 0;
      }
    }, 10);
  }

  stop.onclick = function () {
    clearInterval(interval);
  };

  reset.onclick = () => {
    clearInterval(interval);
    sec = 0
    mili = 0
    changeSec.innerText = "00";
    changeMili.innerText = "00";
  };
};
