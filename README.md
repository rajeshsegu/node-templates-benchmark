# Node.JS template engines benchmark



## Results

###Rendering 100000 templates:
<pre>
Generating ECT templates....
3132ms
Generating Gaikan templates....
2999ms
Generating Dust templates....
4408ms
Generating Hogan.js templates....
4676ms
Generating Fest templates....
928ms
Generating doT templates....
1707ms
Generating Swig templates....
5770ms
Generating Underscore templates....
3054ms
Generating Eco templates....
6687ms
Generating EJS templates....
6107ms
Generating Handlebars.js templates....
3957ms
Generating CoffeeKup templates....
8918ms
Generating Jade templates....
17560ms

Sorted by latest
-
  name:      Fest
  escaped:   793
  unescaped: 135
  total:     928
-
  name:      doT
  escaped:   1670
  unescaped: 37
  total:     1707
-
  name:      Gaikan
  escaped:   2960
  unescaped: 39
  total:     2999
-
  name:      Underscore
  escaped:   1910
  unescaped: 1144
  total:     3054
-
  name:      ECT
  escaped:   3070
  unescaped: 62
  total:     3132
-
  name:      Handlebars.js
  escaped:   2504
  unescaped: 1453
  total:     3957
-
  name:      Dust
  escaped:   3983
  unescaped: 425
  total:     4408
-
  name:      Hogan.js
  escaped:   4213
  unescaped: 463
  total:     4676
-
  name:      Swig
  escaped:   5512
  unescaped: 258
  total:     5770
-
  name:      EJS
  escaped:   5211
  unescaped: 896
  total:     6107
-
  name:      Eco
  escaped:   6267
  unescaped: 420
  total:     6687
-
  name:      CoffeeKup
  escaped:   2263
  unescaped: 6655
  total:     8918
-
  name:      Jade
  escaped:   11578
  unescaped: 5982
  total:     17560
  
</pre>  

## Usage

	npm install
	node ./benchmark.js
