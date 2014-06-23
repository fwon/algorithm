var sort = new algo.sort();
QUnit.test( "bubbleSort", function( assert ) {
    var arr = [5,3,8,2,1,6];
    var arrSort = sort.bubbleSort(arr);
    console.log(arrSort);
    assert.ok( arrSort.toString() == [1,2,3,5,6,8].toString(), "Passed!" );
});
QUnit.test( "selectionSort", function( assert ) {
    var arr = [5,3,8,2,1,6];
    var arrSort = sort.selectionSort(arr);
    console.log(arrSort);
    assert.ok( arrSort.toString() == [1,2,3,5,6,8].toString(), "Passed!" );
});
QUnit.test( "insertSort", function( assert ) {
    var arr = [5,3,8,2,1,6];
    var arrSort = sort.insertSort(arr);
    console.log(arrSort);
    assert.ok( arrSort.toString() == [1,2,3,5,6,8].toString(), "Passed!" );
});
QUnit.test( "quickSort", function( assert ) {
    var arr = [5,3,8,2,1,6];
    var arrSort = sort.quickSort(arr);
    console.log(arrSort);
    assert.ok( arrSort.toString() == [1,2,3,5,6,8].toString(), "Passed!" );
});
QUnit.test( "shellSort", function( assert ) {
    var arr = [5,3,8,2,1,6];
    var arrSort = sort.shellSort(arr);
    console.log(arrSort);
    assert.ok( arrSort.toString() == [1,2,3,5,6,8].toString(), "Passed!" );
});
QUnit.test( "mergeSort", function( assert ) {
    var arr = [5,3,8,2,1,6];
    var arrSort = sort.mergeSort(arr);
    console.log(arrSort);
    assert.ok( arrSort.toString() == [1,2,3,5,6,8].toString(), "Passed!" );
});