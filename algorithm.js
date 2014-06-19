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
                for(j = 0; j < i - 1; j++) {
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
                this.exchange(arr, i, j);
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


    };

    if(module && module.exports) {
        module.exports = algo;
    }

}).call(this);