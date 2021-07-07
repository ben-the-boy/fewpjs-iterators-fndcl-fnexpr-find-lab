function superbowlWin(record) {
  const win = record.find(function(e) {
    return e.result === "W";
  })
  if (win) {
    return win.year;
  }
}
