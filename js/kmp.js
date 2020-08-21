var $inputs = $('#string, #canPattern');

$inputs.keyup(function(){
    $inputs.val($(this).val());
});

var makeKMPTable = function(word) {
    if(Object.prototype.toString.call(word) == '[object String]' ) {
        word = word.split('');
    }
    var results = [];
    var pos = 2;
    var cnd = 0;

    results[0] = -1;
    results[1] = 0;
    while (pos < word.length) {
        if (word[pos - 1] == word[cnd]) {
            cnd++;
            results[pos] = cnd;
            pos++;
        } else if (cnd > 0) {
            cnd = results[cnd];
        } else {
            results[pos] = 0;
            pos++;
        }
    }
    return results;
};

var KMPSearch = function(string, word) {
    if(Object.prototype.toString.call(string) == '[object String]' ) {
        string = string.split('');
    }
    if(Object.prototype.toString.call(word) == '[object String]' ) {
        word = word.split('');
    }

    var index = -1;
    var m = 0;
    var i = 0;
    var T = makeKMPTable(word);

    while (m + i < string.length) {
        if (word[i] == string[m + i]) {
            if (i == word.length - 1) {
                return m;
            }
            i++;
        } else {
            m = m + i - T[i];
            if (T[i] > -1) {
                i = T[i];
            } else {
                i = 0;
            }
        }
    }
    return index;
};


function submitForm(){
    var el = document.getElementById('Search');

    simulateClick(el);

    var searchString = document.getElementById("string").value;

    var searchableString = document.getElementById("text").value;
    var result = '';

    if(searchableString == '' || searchString == ''){
        result = 'Neither of the form fields can not be empty'
    }else{
        result = KMPSearch(searchableString, searchString);
    }

    if(result == -1){
        result = 'Nothing Found'
    }

    document.getElementById("result-output").innerHTML = result;

}

function simulateClick(control)
{
    if (document.all)
    {
        control.click();
    }
    else
    {
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
        control.dispatchEvent(evObj);
    }
}