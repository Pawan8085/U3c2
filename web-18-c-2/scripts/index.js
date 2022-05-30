// Add the coffee to local storage with key "coffee"
var div=document.getElementById('menu');
async function coffee(){
    try{
        let url= 'https://masai-mock-api.herokuapp.com/coffee/menu';
        let res=await fetch(url);
        let data=await res.json();
        return data;

    }
    catch (error){
        console.log(error)
    }
}

var coffeeCount=document.getElementById('coffee_count')
var arr=JSON.parse(localStorage.getItem('coffee'))||[];
function displayData(x){
    var count=0;
    x.forEach(element => {
        var mydiv=document.createElement('div');
        mydiv.setAttribute('id','coffeediv')
        var img=document.createElement('img');
        img.src=element.image;
        var p=document.createElement('p');
        p.innerText=element.title;
        var p1=document.createElement('p');
        p1.innerText=element.price;
        var btn=document.createElement('button');
        btn.setAttribute('id','add_to_bucket');
        btn.innerText='Add to Bucket';
        
        btn.addEventListener('click',func);
        
        function func(){
            ++count;
            
            var obj={
                img:element.image,
                title:element.title,
                price:element.price
            }
            coffeeCount.innerText=count;
            arr.push(obj)
            localStorage.setItem('coffee',JSON.stringify(arr))
            
            // window.location.reload()
            // coffeeCount.innerText=(arr.length)
        }
        
        mydiv.append(img,p,p1,btn);
        div.append(mydiv);
    });
    
    console.log(x)
}
async function main(){
    var promise=coffee();
    var data=await promise;
    displayData(data.menu.data);

}
main()