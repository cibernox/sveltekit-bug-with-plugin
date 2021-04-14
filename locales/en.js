export default {
	"plain": "Some text without interpolations",
	"interpolated": "A text where I interpolate {count} times",
	"time": "Now is {now, time}",
	"time-custom-format": "The hour is {now, time, hour}",
	"date": "Today is {today, date}",
	"date-custom-format": "Today is {today, date, abbr-full}",
	"number": "My favorite number is {n, number}",
	"percent": "My favorite number is {n, number, percent}",
	"pluralized": "I have {count, plural,=0 {no cats} =1 {one cat} other {{count} cats}}",
	"pluralized-with-hash": "I have {count, plural, zero {no cats} one {just # cat} other {# cats}}",
	"selected": "{gender, select, male {He is a good boy} female {She is a good girl} other {They are good fellas}}"
  }