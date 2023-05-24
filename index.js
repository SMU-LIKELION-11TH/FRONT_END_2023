
// const Inamecard = document.querySelector('.namecard').files[0];
const namecard_body = document.querySelector('.namecard');

const imgsrc = {'img': "1"}

function openFile(event){
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      imgsrc.img = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
function namecard(e) {
    e.preventDefault();
    const Iname = document.getElementById('name').value;
    const Ijob = document.getElementById('job').value;
    const Imajor = document.getElementById('major').value;
    const Igithub = document.getElementById('github').value;
    const Iinsta = document.getElementById('insta').value;
    const Icolor = document.getElementById('color').value;
    const Iimage = document.getElementById('photo-picker').value;

    const d1 = document.createElement('div');
    d1.classList.add('namecard');
    d1.style.backgroundColor = Icolor;
    const d2 = document.createElement('div');
    d2.classList.add('photo');
    const d3 = document.createElement('div');
    d3.classList.add('information');
    const d4 = document.createElement('div');
    d4.classList.add('mi');
    const d5 = document.createElement('div');
    d5.classList.add('pi');
    const im1 = document.createElement('img');
    im1.classList.add('picture');
    im1.src = imgsrc.img;
    const h1 = document.createElement('h');
    h1.classList.add('name');
    const h2 = document.createElement('h');
    h2.classList.add('job');
    d1.innerHTML=Iname;
    d2.innerHTML=Ijob;
    const i1 = document.createElement('i');
    i1.classList.add('fa-solid', 'fa-school');
    i1.innerHTML=Imajor;
    const i2 = document.createElement('i');
    i2.classList.add('fa-brands', 'fa-github');
    i2.innerHTML=Igithub;
    const i3 = document.createElement('i');
    i3.classList.add('fa-brands', 'fa-instagram');
    i3.innerHTML=Iinsta;
    d5.append(i1, i2, i3)
    d4.append(h1, h2)
    d3.append(d4, d5);
    d2.appendChild(im1);
    d1.append(d2, d3);
    namecard_body.appendChild(d1);
}