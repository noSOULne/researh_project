function f(int1, int2) {
    let int = int1 / int2;
    let i = 0;
    while(int%1 != 0) {
        int *= 10;
        i++;
    }
    if(i <= 3) {
        return int1 / int2;
    }
    for(let i = 2; i <= int1; i++) {
        if(Number.isInteger(int1/i) && Number.isInteger(int2/i)) {
            int1/=i;
            int2/=i;
        }
    }
    return int1 + '/' + int2;
}

function sq(int) {
    if(String(int).split('/').length > 1) {
        return '√(' + int + ')';
    }
    let i = 0;
    let sqrtint = Math.sqrt(int)
    while(sqrtint%1 != 0) {
        sqrtint *= 10;
        i++;
    }
    if(i <= 3) {
        return Math.sqrt(int);
    }
    return '√' + int;
}

$('#button').click(function(ev) {
    $('#answer').text('');
    $('#solution').text('');
    let a = document.getElementById('a').value;
    let c = document.getElementById('c').value;
    let first = document.getElementById('first').value;
    let third = document.getElementById('third').value;

    if(first == '') {
        first = '+';
    }
    
    if(first == '-') {
        a *= -1;
    }
    if(third == '-') {
        c *= -1;
    }

    let answ = f(c, a);
    if(a != 1) {
        $('#solution').html('<div>' + a + 'x<sup>2</sup> = ' + c + '</div>');
    }
    
    if((c/a > 0 && typeof(answ) == 'string') || answ > 0)
    {
        $('#solution').append('</div><div>x<sup>2</sup> = ' + answ +
        '</div><div>x<sub>1,2</sub> = ±' + sq(answ) + '</div>');
       $('#answer').append('Ответ: x<sub>1,2</sub>= ±' + sq(answ)); 
    } else {
        $('#solution').append('</div><div>x<sup>2</sup> = ' + answ)
        $('#answer').append('Ответ: корней нет'); 
    }
        
})
