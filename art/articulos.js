// Pequeña mejora: delegar clicks en botones "Leer más" para navegar al artículo.
document.addEventListener('click', function(e){
const btn = e.target.closest('.btn');
if(!btn) return;
const card = btn.closest('.card');
// aquí podrías cambiar por card.querySelector('a').href
alert('Simulación: abrir artículo — reemplaza con navegación real');
});