import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CSharpeLogo from './img/Csharp_Logo.png';
// Add your JavaScript code below
console.log('Webpack is working!');

document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.card-img-top');
  if (img) {
    img.src = CSharpeLogo;
    img.alt = 'C# Logo';
  }
});