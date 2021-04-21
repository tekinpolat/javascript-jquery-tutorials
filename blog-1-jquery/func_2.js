//Function dönüş değerine 2 ayrılır
//1 - hiçbir şey döndermeyen fonksiyon 
//2 - değer dönderen  fonksiyon 


//return --> geri döndermek

//return
function toplam(sayi1, sayi2){
    let toplam = sayi1 + sayi2;
    return toplam;
}

function cikarma(sayi1, sayi2){
    return sayi1-sayi2;
}


//non-return  ==> undefined
function yazdir(isim){
    console.log("Merhaba " +  isim);
}


let toplam_sonuc = toplam(3, 5);





let cikar_sonuc = cikarma(3,6);



let sonuc = yazdir("Doğan")
console.log(sonuc)


toplam(4,6);