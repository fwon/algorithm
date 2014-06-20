// algorithm 0.1.1
// some famous and fundamental algorithm
// by fwon

(function(){
    
    var algo = {};

    algo.sort = function() {};
    algo.sort.prototype = {
        exchange: function(arr, i, j) {
            var t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        },
        //max num bubble to the right
        // 4 2 3 1 -> 2 4 3 1 -> 2 3 4 1 -> 2 3 1 4
        // 2 3 1 4 -> 2 1 3 4
        // 2 1 3 4 -> 1 2 3 4
        bubbleSort: function(arr) {
            var n = arr.length, i, j;
            for(i = 0; i < n; i++) {
                for(j = 0; j < n; j++) {
                    if(arr[j] > arr[j + 1]) {
                        this.exchange(arr, j, j + 1);
                    }
                }
            }
            return arr;
        },
        //select max num at right and put in left
        // 4 2 3 1 -> 1 4 2 3 -> 1 2 4 3 -> 1 2 3 4
        selectionSort: function(arr) {
            var n = arr.length, i, j;
            for(i = 0; i < n; i++) {
                var min = i;
                for(j = i + 1; j < n; j++) {
                    if(arr[j] < arr[min]) {
                        min = j;
                    }
                }
                this.exchange(arr, i, min);
            }
            return arr;
        },
        //scan array from left and put min to the left
        // 4 2 3 1 -> 2 4 3 1 -> 2 3 4 1 -> 1 2 3 4
        insertSort: function(arr) {
            var n = arr.length, i, j;
            for(i = 0; i < n; i++) {
                for(j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
                    this.exchange(arr, j, j - 1);
                }
            }
            return arr;
        },
        quickSort: function(arr) {
            if(arr.length <= 1) { return arr; }
            var n = arr.length,
                pivotIndex = Math.floor(arr.length / 2),
                pivot = arr[pivotIndex], i = 0, left = [], right = [];
            for(i = 0; i < n; i++) {
                if(arr[i] < pivot) {
                    left.push(arr[i]);
                } else if(arr[i] > pivot){
                    right.push(arr[i]);
                }
            }
            return this.quickSort(left).concat([pivot], this.quickSort(right));
        }

    };

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = algo;
        }
        exports.algo = algo;
    } else {
        this.algo = algo;
    }

}).call(this);