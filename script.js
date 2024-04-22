function sendWhatsAppMessage() {
    let cover = document.getElementById("cover").value;
    let cpwName = document.getElementById("cpwName").value;
    let cpwMother = document.getElementById("cpwMother").value;
    let cpwFather = document.getElementById("cpwFather").value;
    let cppName = document.getElementById("cppName").value;
    let cppMother = document.getElementById("cppMother").value;
    let cppFather = document.getElementById("cppFather").value;
    let akad = document.getElementById("akad").value;
    let waktuAkad = document.getElementById("waktuAkad").value;
    let alamatAkad = document.getElementById("alamatAkad").value;
    let tempatAkad = document.getElementById("tempatAkad").value;
    let acara = document.querySelector('input[name="acara"]:checked').value;
    let hariAcara = document.getElementById("hariAcara").value;
    let waktuAcara = document.getElementById("waktuAcara").value;
    let alamat = document.getElementById("alamat").value;
    let tempatAcara = document.getElementById("tempatAcara").value;
    let link = document.getElementById("link").value;
    let catatan = document.getElementById("catatan").value;

    // Validasi form
    if (
      cover === "" ||
      cpwName === "" ||
      cpwMother === "" ||
      cpwFather === "" ||
      cppName === "" ||
      cppMother === "" ||
      cppFather === "" ||
      akad === "" ||
      waktuAkad === "" ||
      alamatAkad === "" ||
      tempatAkad === "" ||
      !acara ||
      hariAcara === "" ||
      waktuAcara === "" ||
      alamat === "" ||
      tempatAcara === "" ||
      link === "" ||
      catatan === ""
  ) {
      alert("Harap lengkapi semua field sebelum mengirimkan form.");
      return;
  }

  // Jika form sudah diisi, buat pesan WhatsApp
let message = `Form Pernikahan
\n( Mempelai Wanita )\nNama Cover Undangan: ${cover}\nNama Lengkap: ${cpwName}\nNama Ibu: ${cpwMother}\nNama Ayah: ${cpwFather}
\n( Mempelai Pria )\nNama Lengkap: ${cppName}\nNama Ibu: ${cppMother}\nNama Ayah: ${cppFather}
\nAkad: ${akad}\nHari/Tgl Akad : ${waktuAkad}\nAlamat Akad : ${alamatAkad}\nTempat Akad : ${tempatAkad}
\nAcara: ${acara}\nHari/Tgl Acara : ${hariAcara}\nWaktu Acara : ${waktuAcara}\nAlamat Acara : ${alamat}\nTempat Acara : ${tempatAcara}
\nLink QRCODE : ${link}\ncatatan : ${catatan}`;

  
    // Kirim pesan via WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }
  