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
    $('#answer').text('');
    $('#D').html('D=b<sup>2</sup>-4ac')
    let a = document.getElementById('a').value;
    let k = document.getElementById('b').value/2;
    let c = document.getElementById('c').value;
    let answ = document.getElementById('answer');
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let third = document.getElementById('third').value;
    if(first == '-') {
        a *= -1;
    }
    if(second == '-') {
        k *= -1;
    }
    if(third == '-') {
        c *= -1;
    }
    let s = '-';
    if((a*c) < 0) {
        s = '+'
    }

    $('#kof').text('a = ' + a + ';k = ' + k + ';c = ' + c)
    $('#D').append('=' + (k*k) + s + Math.abs(a*c) + '=' + ((k*k) - (a*c)));
    let d = (k*k) - (a*c);
    k *= -1;
    if (d < 0) {
        $('#answer').text('Решений нет, поскольку D < 0')
    } else if(d == 0) {
        $('#x').text('x=(-k+√D)/a=(' + k + '+' + '0' + ')/' + a + '=' + (k / a))
        $('#answer').text('Ответ: x=' + (k / a));
    } else {
        if(Number.isInteger(Math.sqrt(d))) {
            d = Math.sqrt(d);
            $('#x').html('x<sub>1,2</sub>=(-b±√D)/2a');

            let x1 = f((k-d), a);
            let x2 = f((k+d), a); 

            $('#x1').html('x<sub>1</sub>=(' + k + '-' + d + ')/' + a + '=' + x1);
            $('#x2').html('x<sub>2</sub>=(' + k + '+' + d + ')/' + a + '=' + x2);
            $('#answer').html('Ответ: x<sub>1</sub>=' + x1 + ';\t' + 'x<sub>2</sub>=' + x2);
        } else {
            $('#answer').html('Ответ: x<sub>1</sub>=(' + k + '+√' + d + ')/' + a);
            $('#answer').append('; x<sub>2</sub>=(' + k + '-√' + d + ')/' + a);
        }
    }
})