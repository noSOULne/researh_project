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
    $('#solution').text('');
    $('#D').html('D=b<sup>2</sup>-4ac')
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
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

    let solutionX1;
    let solutionX2;
    let x1;
    let x2;
    let rule = 'Нельзя решить через свойства коэффициентов';
    let append = true;

    if((a+b+c) == 0) {
        rule = 'Если a+b+c=0, то х<sub>1</sub>=1, х<sub>2</sub>=c/а.';
        x1 = 1;
        x2 = '=' + f(c, a);
        if(x2 == ('=' + c + '/' + a)) append = false;
        solutionX1 = 'x<sub>1</sub>=' + 1;
        solutionX2 = 'x<sub>2</sub>=' + c + '/' + a;
        (append)? solutionX2 += x2 : null; 
    } else if((a+c) == b) {
        rule = 'Если а+с=в, то х<sub>1</sub>=-1, х<sub>2</sub>=-с/а';
        x1 = -1;
        x2 = '=' + f(-c, a);
        if(x2 == ('=' + c + '/' + a)) append = false;
        solutionX1 = 'x<sub>1</sub>=' + -1;
        solutionX2 = 'x<sub>2</sub>=' + -c + '/' + a ;
        (append)? solutionX2 += x2 : null; 
    } else if(b == (a*a + 1) && c == a) {
        rule = 'Если b=(a<sup>2</sup>+1) и c=a, то x<sub>1</sub>=-a, x<sub>2</sub>=-1/a';
        x1 = -a;
        x2 = '=' + f(-1, a);
        if(x2 == ('=' + c + '/' + a)) append = false;
        solutionX1 = 'x<sub>1</sub>=' + -a;
        solutionX2 = 'x<sub>2</sub>=' + -1 + '/' + a;
        (append)? solutionX2 += x2 : null; 
    } else if(b == -(a*a + 1) && c == a) {
        rule = 'Если b=-(a<sup>2</sup>+1) и c=a, то x<sub>1</sub>=a, x<sub>2</sub>=1/a';
        x1 = a;
        x2 = '=' + f(1, a);
        if(x2 == ('=' + c + '/' + a)) append = false;
        solutionX1 = 'x<sub>1</sub>=' + a;
        solutionX2 = 'x<sub>2</sub>=' + 1 + '/' + a;
        (append)? solutionX2 += x2 : null; 
    } else if(b == (a*a-1) && c == -a) {
        rule = 'Если b=(a<sup>2</sup>-1) и c=-a, то x<sub>1</sub>=-a, x<sub>2</sub>=1/a';
        x1 = -a;
        x2 = '=' + f(1, a);
        if(x2 == ('=' + c + '/' + a)) append = false;
        solutionX1 = 'x<sub>1</sub>=' + -a;
        solutionX2 = 'x<sub>2</sub>=' + 1 + '/' + a;
        (append)? solutionX2 += x2 : null; 
    } else if(b == -(a*a-1) && c == -a) {
        rule = 'Если b=-(a<sup>2</sup>-1) и c=-a, то x<sub>1</sub>=a, x<sub>2</sub>=-1/a';
        x1 = a
        x2 = '=' + f(-1, a);
        if(x2 == ('=' + c + '/' + a)) append = false;
        solutionX1 = 'x<sub>1</sub>=' + a;
        solutionX2 = 'x<sub>2</sub>=' + -1 + '/' + a;
        (append)? solutionX2 += x2 : null; 
    }
    $('#kofs').html('a = ' + a + '; b = ' + b + '; c = ' + c)
    $('#rule').html(rule);
    $('#x1').html(solutionX1);
    $('#x2').html(solutionX2);
    if(solutionX1) {
        if((x1 * -1) == (x2.split('=')[1])) $('#answer').html('Ответ: x<sub>1,2</sub>=±' + Math.abs(x1))
        else if('=' + x1 != x2) $('#answer').html('Ответ: x<sub>1</sub>=' + x1 + '; x<sub>2</sub>' + x2)
        else $('#answer').html('Ответ: x<sub>1,2</sub>=' + x1)
    }
    
})