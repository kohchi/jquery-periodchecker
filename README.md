jquery-periodchecker
====================
check whether the specified date is within the option's day or not.

This is the jquery plugin that checks whether the specified date is
within option's day or not.
If you use this plugin, you have to set the title attribute to each
target html elements.

for example
-----------
```javascript
$('span.new').periodchecker();
// or
$('span.new').periodchecker({
  day: 7,
  html: 'new!!'
});
// If you don't want to display before the day, following below.
$('ul#news').periodchecker({
  day: 7,
  without: true
});
```

Options
-------
+ `day` :  
  the day to check whether it is within or not. The default is 7(days).
+ `html` :  
  display HTML If the day is within specified day. The default is 'New'.
+ `without` :  
  set true if you don't want to display the elements. The default is false.

License
-------
You may use this under the terms of either MIT License or
GNU General Public License (GPL) Version 2. (same as jQuery).

### Copyright
Copyright (c) MIYAGINO.net. All Rights Reserved.
