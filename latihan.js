var dataSepatu =[
    {
        nama : "jordan A",
        warna : "biru" ,
        Ukuran : 32 ,
    },
    {
        nama : "jordan B",
        warna : "Merah ",
        Ukuran : 31,
    },
    {
        nama : "jordan C",
        warna :  "Hijau", 
        Ukuran : 32.5 ,
    },
    {
        nama : "jordan D",
        warna : "Pink",  
        Ukuran : 26,
    },
    {
        nama : "jordan E",
        warna :  "gray", 
        Ukuran : 29,
    }
]

//YUSTIKA MAULINA

function penjualan(Sepatu){
    const hasil = {
        urutanSepatu : [],
        sepatuterbesar : ''
    }
    Sepatu.map((item)=>{
        
        let size = dataSepatu.concat(item.Ukuran)
        size.pop()
        
        //urutkan sepatu dari ukuran terkecil ke terbesar
        hasil.urutanSepatu = size.sort((a,b)=>a.Ukuran - b.Ukuran)
        
        // tentukan sepatu yang paling besar
        let totalUkuran = hasil.urutanSepatu
        hasil.sepatuterbesar= totalUkuran[4]

    });
    return hasil
}
console.log(penjualan(dataSepatu))
