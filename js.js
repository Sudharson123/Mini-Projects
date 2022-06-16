var a=[34,34,221,56,787,2324,67]
b=a.reduce(function(tot,cur){
    return tot+cur
})

console.log(b)

var aa=[[1,2],[3,4],[5,7],[8,9]]
final=[]
for(i=0;i<aa.length;i++){
    for(j=0;j<aa[i].length;j++){
        bb=aa[i].reduce(function(tot,cur){
        return tot+cur
        }
        )
    }
    final.push([bb])
    
}

console.log(final)
odd=[3,2,5]
res=odd.filter(function(item){
   if(item%2!==0){
       return item
   }
} ).reduce(function(a,b){
    return a+b
})
console.log(res)

var a=[1,2,3]
vb=a.reduce((n,b){
  n+b
})
console.log(vb)