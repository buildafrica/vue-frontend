/* eslint-disable */
module.exports =  {
  bind: (el, binding) => {
    let dhms = t => {
      let days, hours, minutes, seconds;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;
      return [
        `${days} Days`,
        `${hours} hours`,
        `${minutes} minutes`,
        `${seconds} seconds`
      ].join(', ');
    };

    let future;
    future = new Date(binding.value);
    setInterval(() => {
      let diff;
      diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
      if (diff >= future) {
        // Do nothing;
      } else {
        // $rootScope.comingSoon = true;
        return el.innerHTML = dhms(diff);
      }
    }, 1000);
  }
}
 