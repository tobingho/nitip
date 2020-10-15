// fungsi untuk ngecek tanggal kosong berikutnya
// berdasarkan hari dalam minggu

function we(curWeekDate) {
  var enabledDates = [1, 2, 3, 6]; //isi dengan 1-7
  var to_return;
  var x;

  enabledDates.forEach(function (item, index) {
    enabledDates.push(item + 7);
  });

  for (x = curWeekDate; x <= curWeekDate + 7; x++) {
    if (enabledDates.includes(x)) {
      to_return = x - 7;
      break;
    } else {
      to_return = false;
    }
  }

  return to_return;
}

console.log(we(7)); //isi dengan jumlah hari keberapa dalam 1 minggu, integer
