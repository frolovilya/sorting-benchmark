## Tiny Arrays
### Test: From 1 To 50
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.0913ms | -
shellSort | 0.1069ms | 0.0156ms
selectionSort | 0.1571ms | 0.0658ms
quickSort | 0.1646ms | 0.0734ms
mergeSort | 0.2418ms | 0.1506ms
stdSort | 0.3790ms | 0.2878ms
### Test: From 1 To 50 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.0468ms | -
shellSort | 0.0641ms | 0.0173ms
selectionSort | 0.0940ms | 0.0471ms
quickSort | 0.1041ms | 0.0573ms
mergeSort | 0.1709ms | 0.1240ms
stdSort | 0.2513ms | 0.2045ms
### Test: From 1 To 50 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.0119ms | -
shellSort | 0.0308ms | 0.0189ms
selectionSort | 0.0761ms | 0.0643ms
quickSort | 0.0830ms | 0.0711ms
mergeSort | 0.1362ms | 0.1243ms
stdSort | 0.3017ms | 0.2898ms
### Test: From 1 To 50 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.0956ms | -
shellSort | 0.1035ms | 0.0078ms
quickSort | 0.1486ms | 0.0530ms
selectionSort | 0.1576ms | 0.0619ms
mergeSort | 0.2973ms | 0.2017ms
stdSort | 0.3495ms | 0.2538ms
## Small Arrays
### Test: From 50 To 500
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 0.3868ms | -
shellSort | 0.4186ms | 0.0317ms
mergeSort | 0.6277ms | 0.2409ms
stdSort | 1.1778ms | 0.7910ms
insertionSort | 1.6134ms | 1.2265ms
selectionSort | 2.2648ms | 1.8779ms
### Test: From 50 To 500 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**shellSort** | 0.2403ms | -
quickSort | 0.3090ms | 0.0687ms
stdSort | 0.4318ms | 0.1915ms
mergeSort | 0.5165ms | 0.2762ms
insertionSort | 1.3325ms | 1.0922ms
selectionSort | 2.1840ms | 1.9437ms
### Test: From 50 To 500 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.0165ms | -
shellSort | 0.1123ms | 0.0958ms
quickSort | 0.2295ms | 0.2130ms
mergeSort | 0.5047ms | 0.4882ms
stdSort | 1.0706ms | 1.0541ms
selectionSort | 2.2584ms | 2.2419ms
### Test: From 50 To 500 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.1121ms | -
shellSort | 0.2018ms | 0.0898ms
quickSort | 0.2114ms | 0.0993ms
mergeSort | 0.4573ms | 0.3452ms
stdSort | 1.5940ms | 1.4820ms
selectionSort | 3.8590ms | 3.7469ms
## Medium Arrays
### Test: From 1000 To 10000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 8.6740ms | -
shellSort | 11.6933ms | 3.0193ms
mergeSort | 15.6879ms | 7.0139ms
stdSort | 30.3229ms | 21.6489ms
insertionSort | 612.9520ms | 604.2780ms
selectionSort | 1128.2100ms | 1119.5360ms
### Test: From 1000 To 10000 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 10.9785ms | -
mergeSort | 16.8339ms | 5.8554ms
stdSort | 21.7834ms | 10.8048ms
shellSort | 22.9403ms | 11.9618ms
insertionSort | 582.0113ms | 571.0327ms
selectionSort | 986.5920ms | 975.6135ms
### Test: From 1000 To 10000 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**insertionSort** | 0.3533ms | -
shellSort | 9.7746ms | 9.4213ms
quickSort | 11.0939ms | 10.7406ms
mergeSort | 39.0225ms | 38.6692ms
stdSort | 57.9287ms | 57.5754ms
selectionSort | 1122.3952ms | 1122.0419ms
### Test: From 1000 To 10000 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**shellSort** | 5.7855ms | -
insertionSort | 6.1851ms | 0.3997ms
quickSort | 7.0292ms | 1.2437ms
mergeSort | 16.5679ms | 10.7824ms
stdSort | 132.6487ms | 126.8632ms
selectionSort | 882.4058ms | 876.6203ms
## Big Arrays
### Test: From 10000 To 100000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 145.4679ms | -
shellSort | 235.7525ms | 90.2845ms
mergeSort | 255.3345ms | 109.8665ms
stdSort | 495.4858ms | 350.0178ms
### Test: From 10000 To 100000 Duplicate Keys
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 100.5610ms | -
shellSort | 135.4516ms | 34.8906ms
mergeSort | 177.1537ms | 76.5927ms
stdSort | 223.5239ms | 122.9629ms
### Test: From 10000 To 100000 Sorted Array
 Method | Time | Delta 
 ------ | ---- | ----- 
**shellSort** | 43.4816ms | -
quickSort | 58.2723ms | 14.7907ms
mergeSort | 145.1851ms | 101.7034ms
stdSort | 464.3357ms | 420.8540ms
### Test: From 10000 To 100000 Sorted Array Desc
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 75.7570ms | -
shellSort | 76.7569ms | 0.9999ms
mergeSort | 177.4395ms | 101.6826ms
stdSort | 642.5908ms | 566.8338ms
## Large Arrays
### Test: Sort 500'000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 134.7507ms | -
mergeSort | 240.3780ms | 105.6273ms
shellSort | 341.3474ms | 206.5967ms
stdSort | 1051.0715ms | 916.3208ms
### Test: Sort 1'000'000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 278.1522ms | -
mergeSort | 460.6214ms | 182.4692ms
shellSort | 670.7147ms | 392.5626ms
stdSort | 1628.6749ms | 1350.5228ms
### Test: Sort 10'000'000
 Method | Time | Delta 
 ------ | ---- | ----- 
**quickSort** | 4125.8725ms | -
mergeSort | 6224.9834ms | 2099.1109ms
shellSort | 10279.2553ms | 6153.3827ms
stdSort | 18206.6668ms | 14080.7943ms
