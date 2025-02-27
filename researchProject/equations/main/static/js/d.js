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

$('#button').click(function(ev) {
    $('#x').text('');
    $('#x1').text('');
    $('#x2').text('');
    $('#solution').text('');
    $('#answer').text('');
    $('#D').html('D=b<sup>2</sup>-4ac')
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let third = document.getElementById('third').value;
    if(first == '-') {
        a *= -1;
    }
    if(second == '-') {
        b *= -1;
    }
    if(third == '-') {
        c *= -1;
    }
    let s = '-';
    if((a*c) < 0) {
        s = '+'
    }

    $('#kof').text('a = ' + a + '; b = ' + b + '; c = ' + c)
    $('#D').append('=' + (b*b) + s + Math.abs(4*a*c) + '=' + ((b*b) - (4*a*c)));
    let d = (b*b) - (4*a*c);
    b *= -1;
    if (d < 0) {
        $('#answer').text('Решений нет, поскольку D < 0')
    } else if(d == 0) {
        $('#x').text('x=(-b+√D)/2a=(' + b + '+' + '0' + ')/' + 2*a + '=' + (b / (2 * a)))
        $('#answer').text('Ответ: x=' + (b / (2 * a)));
    } else {
        if(Number.isInteger(Math.sqrt(d))) {
            d = Math.sqrt(d);
            $('#x').html('x<sub>1,2</sub>=(-b±√D)/2a');

            let x1 = f((b-d), 2*a);
            let x2 = f((b+d), 2*a); 

            $('#x1').html('x<sub>1</sub>=(' + b + '-' + d + ')/' + 2*a + '=' + x1);
            $('#x2').html('x<sub>2</sub>=(' + b + '+' + d + ')/' + 2*a + '=' + x2);
            $('#answer').html('Ответ: x<sub>1</sub>=' + x1 + ';' + 'x<sub>2</sub>=' + x2);
        } else {
            $('#answer').html('Ответ: x<sub>1</sub>=(' + b + '+√' + d + ')/' + 2*a);
            $('#answer').append('; x<sub>2</sub>=(' + b + '-√' + d + ')/' + 2*a);
        }
    }
})