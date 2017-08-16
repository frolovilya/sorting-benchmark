## Tiny Arrays
### Test: From 1 To 50 Step 1
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.060746ms | –
shellSort | 0.074687ms | 0.013941ms
quickSort | 0.106002ms | 0.045256ms
selectionSort | 0.113632ms | 0.052886ms
mergeSort | 0.16743ms | 0.106684ms
stdSort | 0.300722ms | 0.239976ms
### Test: From 1 To 50 Step 1 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.038951ms | –
shellSort | 0.044733ms | 0.005782ms
quickSort | 0.075517ms | 0.036566ms
selectionSort | 0.080945ms | 0.041994ms
stdSort | 0.094474ms | 0.055523ms
mergeSort | 0.144109ms | 0.105158ms
### Test: From 1 To 50 Step 1 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.013272ms | –
shellSort | 0.032125ms | 0.018853ms
selectionSort | 0.083944ms | 0.070672ms
quickSort | 0.108483ms | 0.095211ms
mergeSort | 0.199954ms | 0.186682ms
stdSort | 0.378047ms | 0.364775ms
### Test: From 1 To 50 Step 1 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.057204ms | –
shellSort | 0.068117ms | 0.010913ms
quickSort | 0.09825ms | 0.041046ms
selectionSort | 0.149281ms | 0.092077ms
mergeSort | 0.176911ms | 0.119707ms
stdSort | 0.32856ms | 0.271356ms
## Small Arrays
### Test: From 50 To 500 Step 50
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 0.4726ms | –
shellSort | 0.501644ms | 0.029044ms
mergeSort | 0.667827ms | 0.195227ms
stdSort | 1.762127ms | 1.289527ms
insertionSort | 1.86818ms | 1.39558ms
selectionSort | 2.719763ms | 2.247163ms
### Test: From 50 To 500 Step 50 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**shellSort** | 0.149843ms | –
stdSort | 0.177033ms | 0.02719ms
quickSort | 0.275319ms | 0.125476ms
mergeSort | 0.515252ms | 0.365409ms
insertionSort | 1.024718ms | 0.874875ms
selectionSort | 2.404891ms | 2.255048ms
### Test: From 50 To 500 Step 50 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.017518ms | –
shellSort | 0.099083ms | 0.081565ms
quickSort | 0.207518ms | 0.19ms
mergeSort | 0.425508ms | 0.40799ms
stdSort | 1.091173ms | 1.073655ms
selectionSort | 2.418182ms | 2.400664ms
### Test: From 50 To 500 Step 20 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.111565ms | –
quickSort | 0.282074ms | 0.170509ms
shellSort | 0.315738ms | 0.204173ms
mergeSort | 0.902974ms | 0.791409ms
stdSort | 1.234611ms | 1.123046ms
selectionSort | 2.27523ms | 2.163665ms
## Medium Arrays
### Test: From 1000 To 10000 Step 1000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 9.051064ms | –
shellSort | 11.657754ms | 2.60669ms
mergeSort | 15.992671ms | 6.941607ms
stdSort | 32.805339ms | 23.754275ms
insertionSort | 647.997524ms | 638.94646ms
selectionSort | 1045.062351ms | 1036.011287ms
### Test: From 1000 To 10000 Step 1000 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**stdSort** | 3.155011ms | –
shellSort | 4.373762ms | 1.218751ms
quickSort | 6.895686ms | 3.740675ms
mergeSort | 12.5188ms | 9.363789ms
insertionSort | 383.421026ms | 380.266015ms
selectionSort | 883.537664ms | 880.382653ms
### Test: From 1000 To 10000 Step 1000 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.305873ms | –
shellSort | 3.397151ms | 3.091278ms
quickSort | 4.966683ms | 4.66081ms
mergeSort | 11.81023ms | 11.504357ms
stdSort | 34.773175ms | 34.467302ms
selectionSort | 848.369775ms | 848.063902ms
### Test: From 1000 To 10000 Step 1000 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 2.664591ms | –
quickSort | 4.770203ms | 2.105612ms
shellSort | 7.827554ms | 5.162963ms
mergeSort | 12.412521ms | 9.74793ms
stdSort | 34.84874ms | 32.184149ms
selectionSort | 842.966987ms | 840.302396ms
## Big Arrays
### Test: From 10000 To 100000 Step 10000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 105.910929ms | –
shellSort | 171.391535ms | 65.480606ms
mergeSort | 184.411054ms | 78.500125ms
stdSort | 315.843424ms | 209.932495ms
### Test: From 10000 To 100000 Step 10000 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**stdSort** | 44.261809ms | –
shellSort | 51.812396ms | 7.550587ms
quickSort | 110.570491ms | 66.308682ms
mergeSort | 171.97137ms | 127.709561ms
### Test: From 10000 To 100000 Step 10000 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**shellSort** | 56.234106ms | –
quickSort | 86.528946ms | 30.29484ms
mergeSort | 326.705663ms | 270.471557ms
stdSort | 612.701564ms | 556.467458ms
### Test: From 10000 To 100000 Step 10000 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**shellSort** | 65.98664ms | –
quickSort | 107.437171ms | 41.450531ms
mergeSort | 216.073697ms | 150.087057ms
stdSort | 581.995199ms | 516.008559ms
## Large Arrays
### Test: Sort 500'000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 186.082567ms | –
mergeSort | 195.788294ms | 9.705727ms
shellSort | 214.329811ms | 28.247244ms
stdSort | 598.285614ms | 412.203047ms
### Test: Sort 1'000'000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 340.568145ms | –
mergeSort | 471.130694ms | 130.562549ms
shellSort | 596.167789ms | 255.599644ms
stdSort | 952.891576ms | 612.323431ms
### Test: Sort 10'000'000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 3023.829307ms | –
mergeSort | 5108.503573ms | 2084.674266ms
shellSort | 6406.504693ms | 3382.675386ms
stdSort | 8865.171343ms | 5841.342036ms
