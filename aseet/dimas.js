function checkKhodam(event) {
    event.preventDefault();  // Memperbaiki typo: preventDefault()

    let nama = $('#search').val();  // Memperbaiki typo: 'serch' menjadi 'search'

    if (nama === '') {
        alert('Nama tidak boleh kosong!');
    } else {
        let status = ['isi', 'kosong'];
        const randomStatus = Math.floor(Math.random() * status.length);

        if (randomStatus === 0) {
            let khodam = [
                'Harimau putih sering kali digambarkan dengan sifat bijaksana',
                'ular naga adalah salah satu jenis khodam yang populer',
                'Buaya putih sendiri merupakan spesies yang memang ada di dunia nyata meskipun jarang ditemui',
                ' bhatara karang adalah salah satu jin khodam yang dimanfaatkan untuk menjaga sesuatu',
                'Sulaiman merupakan salah satu bentuk khodam terkuat dalam kepercayaan spiritual',
                'burung garuda yang diyakini sebagai khodam paling langka',
                'Maung Bodas adalah raja dari kawanan macan putih gaib yang hidup di dunia lain',
            ];
            const random = Math.floor(Math.random() * khodam.length);

            $('#result').html(`${nama.toUpperCase()} - khodam kamu (${khodam[random]})`);  // Memperbaiki typo: toUpperCase() 
        } else {
            $('#result').html(`${nama.toUpperCase()} - Kosong`);  // Memperbaiki typo: toUpperCase()
        }
        $('#search').val('');  // Mengosongkan input setelah pencarian
    }
}

$(document).ready(function() {
    $('#btn-search').click(checkKhodam);  // Menghubungkan tombol dengan fungsi yang benar
});
