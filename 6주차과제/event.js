const createCard = (event) => {

    event.preventDefault();

    const nameinput = document.getElementById('name');
    const jopinput = document.getElementById('job');
    const majorinput = document.getElementById('major');
    const githubinput = document.getElementById('github');
    const instainput = document.getElementById('instagram');
    const colorinput = document.getElementById('Bgcolor');
    const photoinput = document.getElementById('profile');

    const name = nameinput.value ;
    const job = jopinput.value ;
    const major = majorinput.value ;
    const github = githubinput.value ;
    const insta = instainput.value ;
    const Bgcolor = colorinput.value || '#FFFFFF';
    const profile = photoinput.files[0];

    const reader = new FileReader();
    reader.onload = function() {
        const photourl = reader.result || '';

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = Bgcolor;

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('card_image');

        const img = document.createElement('img');
        img.src = photourl;
        img.alt = 'profile photo'
        img.classList.add('profile');

        const namehead = document.createElement('h3');
        namehead.textContent = name ;

        imgContainer.appendChild(img);
        imgContainer.appendChild(namehead);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text_card');

        const jobhead = document.createElement('h2');
        jobhead.textContent = job;

        const majorhead = document.createElement('p');
        majorhead.innerHTML = '<i class="fa-solid fa-building"></i> ${major}';

        const githubhead = document.createElement('p');
        githubhead.innerHTML = '<i class="fa-brands fa-github"></i> ${github}';

        const instahead = document.createElement('p');
        instahead.innerHTML = '<i class="fa-brands fa-instagram"></i> ${insta}';
    };

};

if (profile) {
    reader.readAsDataURL(profile);
}