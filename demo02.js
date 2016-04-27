var lcdString=[
    {
        number: [0,'._.' + '\n' +
                   '|.|' + '\n' +
                   '|_|'+'\n']
    },
    {
        number: [1,'...' + '\n' +
                   '..|' + '\n' +
                   '..|'+'\n']
    },
    {
        number: [2,'._.'+'\n'+
                   '._|'+'\n'+
                   '|_.'+'\n']
    },
    {
        number: [3,'._.'+'\n'+
                   '._|'+'\n'+
                   '._|'+'\n']
    },
    {
        number: [4,'...'+'\n'+
                   '|_|'+'\n'+
                   '..|'+'\n']
    },
    {
        number: [5,'._.'+'\n'+
                   '|_.'+'\n'+
                   '._|'+'\n']
    },
    {
        number: [6,'._.'+'\n'+
                   '|_.'+'\n'+
                   '|_|'+'\n']
    },
    {
        number: [7,'._.'+'\n'+
                   '..|'+'\n'+
                   '..|'+'\n']
    },
    {
        number: [8,'._.'+'\n'+
                   '|_|'+'\n'+
                   '|_|'+'\n']
    },
    {
        number: [9,'._.'+'\n'+
                   '|_|'+'\n'+
                   '..|'+'\n']
    }
    
];
 var input =910;
 var numStrings=input.toString();//将数字转换为字符串
    var number=outputNumber(numStrings,lcdString);//图案输出
    console.log(number);

function isEqual(numString, lcdNumbers) {
    for (var i = 0;i < lcdNumbers.length;i ++){
        if(parseInt(numString) === (lcdNumbers[i].number)[0]){
            return (lcdNumbers[i].number)[1];
        }
    }
}
function outputNumber(numStrings,lcdNumbers) {
    var result='';
    for(var i = 0;i < numStrings.length; i++){
        var it= isEqual(numStrings[i],lcdNumbers);//返回数字字符串中的每一个数字的图案
        if(it){
            result+=it;
        }
    }
    return result;
}
