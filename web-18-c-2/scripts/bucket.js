// On clicking remove button the item should be removed from DOM as well as localstorage.
var total=document.getElementById('total_amount');
var showcoffee=document.getElementById('bucket');
var arr=JSON.parse(localStorage.getItem('coffee'));
func(arr);
function func(arr){
    var __total=0;
    arr.forEach(function(ele,index) {
        __total+=ele.price;
        var mydiv=document.createElement('div');
        mydiv.setAttribute('id','bucketdiv')
        var img=document.createElement('img');
        img.src=ele.img;
        var p=document.createElement('p');
        p.innerText=ele.title;
        var p1=document.createElement('p');
        p1.innerText=ele.price;
        var btn=document.createElement('button');
        btn.innerText='remove';
        btn.setAttribute('id','remove_coffee');
        btn.addEventListener('click',dlT);
        function dlT(){
            arr.splice(index,1);
            localStorage.setItem('coffee',JSON.stringify(arr));
            window.location.reload();
        }
        total.innerText=__total;
        mydiv.append(img,p,p1,btn);
        showcoffee.append(mydiv)

    });
}
var mybtn=document.getElementById('confirm_checkout');
mybtn.addEventListener('click',chkOut);
function chkOut() {
   
    window.location.href='checkout.html'
}
