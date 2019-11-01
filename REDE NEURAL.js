const dadotreino = [[30,5700,2,1,0,1],
                    [40,2500,2,1,0,1],
                    [20,1200,2,1,0,0],
                    [18,980,2,1,0,0],
                    [45,3500,2,1,0,1],
                    [30,1200,2,1,0,0],
                    [70,7700,2,1,0,0],
                    [26,1500,2,1,0,0],
                    [20,3200,2,1,0,1],
                    [58,2700,2,1,0,1],
                    [19,1500,2,1,0,1],
                    [53,3200,2,1,0,1],
                ];             
const esperado = [1,1,0,0,1,0,0,0,1,1,1,1];

const calculaRes = (t)=>{
    for(let i=0; i<dadotreino.length; i++){
        let x1= dadotreino[i][0];
        let x2= dadotreino[i][1];
        let w1= dadotreino[i][2];
        let w2= dadotreino[i][3];
        dadotreino[i][4]= (x1*w1)+(x2*w2);
        if (dadotreino[i][4]>=t){
             dadotreino[i][5]=1;
        }else{
            dadotreino[i][5]=0;
        }
    }   
};

let melhorTeta=[0,0];
for(let i=0; i<3000; i++){
    calculaRes(i);
    let acertos =0;
    for(let j=0;j<esperado.length;j++){
         if(esperado[j]==dadotreino[j][5]){
             acertos++;     
         }   
    }
    if(acertos>melhorTeta[1]){
        melhorTeta=[i,acertos]   
    }
    
}

console.log(melhorTeta[0]+" - "+ (melhorTeta[1]*100/12).toFixed(2)+"%");