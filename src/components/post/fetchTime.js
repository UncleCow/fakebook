function fetchTime(time) {
  var DateDiff = {
    inMinutes: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime() + 3600 * 1000 * 7;
      return Math.floor((t2 - t1) / (60 * 1000));
    },
    inHours: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime() + 3600 * 1000 * 7;

      return Math.floor((t2 - t1) / (3600 * 1000));
    },
    inDays: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime() + 3600 * 1000 * 7;
      return Math.floor((t2 - t1) / (24 * 3600 * 1000));
    },
    inWeeks: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime() + 3600 * 1000 * 7;
      return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
    },
    inMonths: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime() + 3600 * 1000 * 7;
      return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7 * 30));
    },
    inYears: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime() + 3600 * 1000 * 7;
      return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7 * 30 * 12));
    },
  };
  var d1 = new Date(time);
  var d2 = new Date();
  const minutes = DateDiff.inMinutes(d1, d2);
  const hours = DateDiff.inHours(d1, d2);
  const days = DateDiff.inDays(d1, d2);
  const weeks = DateDiff.inWeeks(d1, d2);
  const months = DateDiff.inMonths(d1, d2);
  const years = DateDiff.inYears(d1, d2);

  if (years > 0) {
    return years + " years ago";
  } else if (months > 0) {
    return months + " months ago";
  } else if (weeks > 0) {
    return (weeks + " weeks ago");
  } else if (days > 0) {
    return (days + " days ago");
  } else if (hours > 0) {
    return (hours + " hours ago");
  } else if (minutes > 0) {
    return (minutes + " minutes ago");
  } else {
    return ("Just now");
  }
}
export default fetchTime;
