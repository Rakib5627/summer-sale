const couponButton = document.getElementById('coupon-button');
    couponButton.disabled = true;
const makePurchase= document.getElementById('make-purchase');
  makePurchase.disabled = true;
    
    

const productArray =[];

function totalPrice(productPrice){

    const floatProductPrice = parseFloat(productPrice);


    productArray.push(floatProductPrice);

    console.log(productArray);
    let pPrice = 0;
    
    for(i=0 ; i<productArray.length ;i++){
        // console.log(productArray[i])
   

        pPrice = pPrice + productArray[i];
    }
    // console.log(pPrice)
    return pPrice

}



document.getElementById('coupon-button').addEventListener('click' , function(){

})

function couponProperties(){
    
}



function addToList(element){
    element.disabled=true;
    const productName = element.children[1].children[1].innerText;
    const productPrice =element.children[1].children[2].children[0].innerText;


    const cartList = document.getElementById('product-list');
    // console.log(cartList);
    const li = document.createElement('li');


        li.innerText=productName;
        cartList.appendChild(li);
    // console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[1])

    let showTotalPrice = totalPrice(productPrice);
    // console.log(showTotalPrice)
    
    const totalPriceIT = document.getElementById('total-price');
    totalPriceIT.innerText=showTotalPrice.toFixed(2);
    
    
    // const totalPriceFloat = parseFloat(totalPriceIT);
    // console.log(typeof totalPriceFloat)

    const totalPayment= document.getElementById('total-payment');

    if(showTotalPrice >0){
        makePurchase.disabled = false;
    }
    
    if(showTotalPrice >= 200){
        couponButton.disabled = false;

        couponButton.addEventListener('click' , function(){
            const couponInputV = document.getElementById('coupon-input');
            const couponInput =couponInputV.value;
        // console.log(couponInput);

        


        if (couponInput === 'SELL200'){
            const discount = showTotalPrice/5;
            const discountPrice = document.getElementById('discount-price').innerText = discount.toFixed(2);
            const payAble = showTotalPrice - discount ;
            totalPayment.innerText =payAble.toFixed(2);   
        }

       
        
        })   
            
    }
    
        totalPayment.innerText =showTotalPrice.toFixed(2);

     
}  



// modal close//

document.getElementById('close-btn').addEventListener('click', function(){
        
        window.location.reload();
    });



