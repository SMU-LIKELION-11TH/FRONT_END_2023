function namecard() {
    
    // 입력된 정보 가져오기
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const major = document.getElementById("major").value;
    const github = document.getElementById("github").value;
    const insta = document.getElementById("insta").value;
    const color = document.getElementById("color").value;
    const image = document.getElementById("image").files[0];
  
    // 명함 생성
    const namecard = document.createElement("div");
    namecard.className = "namecard";
    namecard.style.backgroundColor = color;
  
    const namecard_img = document.createElement("div");
    namecard_img.className = "namecard_img";
    namecard.appendChild(namecard_img);
  
    const profile_img = document.createElement("img");
    profile_img.className = "namecard_profile";
    if (image) {
      profile_img.src = URL.createObjectURL(image);
    } else {
      profile_img.src = "./img/profile.png";
    }
    namecard_img.appendChild(profile_img);
  
    const namecard_intro = document.createElement("div");
    namecard_intro.className = "namecard_intro";
    namecard.appendChild(namecard_intro);
  
    const namecard_school = document.createElement("div");
    namecard_school.className = "namecard_school";
    namecard_intro.appendChild(namecard_school);
  
    const profile_name = document.createElement("h3");
    profile_name.id = "profile_name";
    profile_name.textContent = name;
    namecard_school.appendChild(profile_name);
  
    const profile_job = document.createElement("h3");
    profile_job.textContent = job;
    namecard_school.appendChild(profile_job);
  
    const profile_major = document.createElement("p");
    profile_major.innerHTML = `<i class="fa-solid fa-school"></i> ${major}`;
    namecard_school.appendChild(profile_major);
  
    const namecard_sns = document.createElement("div");
    namecard_sns.className = "namecard_sns";
    namecard_intro.appendChild(namecard_sns);
  
    const profile_github = document.createElement("p");
    profile_github.innerHTML = `<i class="fa-brands fa-github"></i> ${github}`;
    namecard_sns.appendChild(profile_github);
  
    const profile_insta = document.createElement("p");
    profile_insta.innerHTML = `<i class="fa-brands fa-instagram"></i> ${insta}`;
    namecard_sns.appendChild(profile_insta);
  
    // 명함 추가
    const container = document.querySelector(".middle .container");
    container.insertAdjacentElement("afterend", namecard);
  }