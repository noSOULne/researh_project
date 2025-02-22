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
    for(let i = 2; i <= Math.abs(int1); i++) {
        if(Number.isInteger(int1/i) && Number.isInteger(int2/i)) {
            int1/=i;
            int2/=i;
        }
    }
    return int1 + '/' + int2;
}

$('#button').click(function(ev) {
    $('#answer').text('');
    $('#solution').text('');
    $('.after').text('');
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;

    if(first == '') {
        first = '+';
    }
    
    if(first == '-') {
        a *= -1;
    }
    let sing = '+';
    if(second == '-') {
        b *= -1;
        sing = '-';
    }

    $('#solution').html('<div>x(' + a + 'x' + sing + b + ')=0</div><div>x=0 или ' + a + 'x' + sing + Math.abs(b) + '=0</div>')
    b *= -1;
    let x2 = f(b, a);
    $('#solution').after('<span class="after">x=' + b + '/' + a + '<br>x=' + x2 + '</span>')
    $('#answer').html('Ответ: x<sub>1</sub>=0; x<sub>2</sub>=' + x2)
})