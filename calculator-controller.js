var buttons=document.getElementsByClassName("BOX");
var disp=document.getElementById("result-display-panel");
//console.log(buttons);
var operand1=0;
var operand2=0;
var operator=null;
var a="";
for(var i=0;i<buttons.length;i++)
{
    //console.log("entered");
    buttons[i].addEventListener('click',function(){
        var valbutton=this.getAttribute('data-value');
        console.log(valbutton);
        if(valbutton=='ADD'||valbutton=='MUL'||valbutton=='DIV'||valbutton=='SUB'||valbutton=='EXP'||valbutton=="MOD"||valbutton=='AC'||valbutton=='CLR')
        {
            console.log("entered");
            if(valbutton=='AC')
            {
                disp.value="";
                a="";
            }
            
            else if(valbutton=='CLR')
            {
                console.log("a"+a);
                a=a.slice(0,-1);
                console.log("a"+a);
                disp.value=a;
            }
            else
            {
                operand1=parseFloat(a);
                a="";
                switch(valbutton)
                {
                    case 'ADD': operator='+';
                    break;
                    case 'MUL': operator='*';
                    break;
                    case 'DIV': operator='/';
                    break;
                    case 'MOD': operator='%';
                    break;
                    case 'SUB': operator='-';
                    break;
                    case 'EXP': operator='^';
                    
                }
             }
        }
        else if(valbutton=="EQ")
        {
            operand2=parseFloat(a);
            
            a="";
            var res=0;
            if(operand1!=null&&operand2!=null)
            {
                
                if(operator=='+')
                {
                    res=eval(operand1+operand2);
                    console.log("result->"+operand1+operator+operand2);
                }
                else
                if(operator=='-')
                {
                    res=eval(operand1-operand2);
                    console.log("result->"+operand1+operator+operand2);
                }else
                if(operator=='*')
                {
                    res=eval(operand1*operand2);
                    console.log("result->"+operand1+operator+operand2);
                }
                else
                if(operator=='/')
                {
                    if(operand2==0)
                    {
                        alert("can't divide by zero");
                    }
                    else{
                    res=eval(operand1/operand2);
                    
                    console.log("result->"+operand1+operator+operand2);
                    }
                }
                else
                if(operator=='%')
                {
                    res=eval(operand1%operand2);
                    console.log("result->"+operand1+operator+operand2);
                }
                else
                if(operator=='^')
                {
                    res=Math.pow(operand1,operand2);
                    
                }
              operator=null;
              operand1=0;
              operand2=0;
              disp.value=res;
              disp.style.color="red";
              disp.style.color="black";
              
            }
            else{
                alert("there is some input error");
            }
        }
        else
        {
            a+=valbutton;
            console.log("a"+a);
            console.log("innertext"+disp.value);
            disp.value=a;
            
        }
        //console.log(valbutton);


    });
}


