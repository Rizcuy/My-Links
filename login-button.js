alert('masukan username & Password yang telah diberikan oleh pemilik'); 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form melakukan submit yang sebenarnya
    // Ambil nilai dari input username dan password
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Definisikan username dan password yang benar
    const validUser = [
      { username:"1", password:"1"}, 
      {username:"2", password:"2" }]

    // Validasi username dan password
    if (validUser) {
        alert('Login berhasil! Anda akan diarahkan ke Halaman berikutnya!!');
        // Arahkan ke halaman dashboard
        window.location.href = 'link-lain.html' ;
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
}); 


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form melakukan submit yang sebenarnya
    alert('Login berhasil! Jangan bagikan ke orang lain ya!!');
});