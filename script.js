var tip=new Array(3);
var total=new Array(3);
function calc(amt)
{ if(amt<50)
    { tip[0]=(20/100)*amt;
      total[0]=tip[0]+amt;
    }
    else if(amt>=50 && amt<=200)
    {   tip[1]=(20/100)*amt;
        total[1]=tip[1]+amt;
    }
    else(amt>200)
    { tip[2]=(100/100)*amt;
      total[2]=tip[2]+amt;
    }
}
calc(124);
calc(48);
calc(268);
console.log("the tips for each bill are",tip[0]," ",tip[1]," ",tip[2]);
console.log("the total for each bill is",total[0]," ",total[1]," ",total[2]);
