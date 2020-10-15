// fungsi untuk ngecek tanggal kosong berikutnya
// berdasarkan hari dalam minggu

function we(curWeekDate) {
  var enabledDates = [1, 2, 3, 6];
  var to_return;
  var x;

  enabledDates.forEach(function (item, index) {
    enabledDates.push(item + 7);
  });

  for (x = curWeekDate; x <= curWeekDate + 7; x++) {
    if (enabledDates.includes(x)) {
      to_return = x;
      break;
    } else {
      to_return = false;
    }
  }

  return to_return;
}

console.log(we(7));
