var tanya = true;
while (tanya == true){

    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gajah';
    }else if( comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if(p == comp){
        hasil = 'SERI';;
    } else if(p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'MENANG!';
        // }else{
        //     hasil = 'KALAH!';
        // }
        hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH'; //OPERATOR TERNARY
    } else if(p == 'orang'){
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG'; //OPERATOR TERNARY
    } else if(p == 'semut'){
        hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG'; //OPERATOR TERNARY
    } else{
        hasil = 'Memasukkan pilihan yang salah!!';
    }
    // tampilkan hasil
    alert('Kamu memilih : ' + p + ' dan komputer memilih ' + comp + ', Hasil : Kamu ' + hasil);

    tanya = confirm('lagi?')
}
alert('terimakasih sudah bermain');