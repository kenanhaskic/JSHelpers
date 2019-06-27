export default{

install(Vue,options){
    Vue.prototype.print=function(data){
        return data*10
    }
    Vue.prototype.sum=function(data){
        let suma=0;
        for(var i=0;i<data.length;i++){
            suma+=data[i].Price
        }
        return suma;
    }
    Vue.prototype.bigestprice=function(data){
        let price=0;
        for(var i=0;i<data.length;i++){
            if(data[i].Price>price)
            price=data[i].Price
        }
        return price
    }
    Vue.prototype.lowestprice=function(data){
        let price=100;
        for(var i=0;i<data.length;i++){
            if(data[i].Price<price)
            price=data[i].Price
        }
        return price
    }
    Vue.prototype.changecolor=function(){
        document.body.style.backgroundColor='yellowgreen';      
    }
    Vue.prototype.StyleName=function(){
    document.getElementById('items').style.color='blue';

    }
    Vue.prototype.StyleFont=function(){
    document.getElementById('items').style.fontSize='20px';

    }
    
    Vue.prototype.changetitle=function(){
        document.getElementById('title').innerText='Title changed';
    
        }
    Vue.prototype.getborder=function(){
        document.getElementById('items').style.border="3px solid black";
        
        }
        Vue.prototype.listbg=function(){
            document.getElementById('items').style.backgroundColor="pink";
            
            }
}


}