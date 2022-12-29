//34
let h1tag = document.querySelector('#h1-tag');
let btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    h1tag.textContent = 'MERN stack';
})

// <-------------------------------------------->

//35
let firsth1 = document.getElementsByTagName('h1')[0];
console.log(firsth1);

// <-------------------------------------------->

//36
function time(){
    let d = new Date();
    let hr = d.getHours();
    let mi = d.getMinutes();
    let se = d.getSeconds();
  
    // document.write(hr,min,sec);
    document.getElementById("min").innerHTML = mi + ":"
    document.getElementById("sec").innerHTML = se 
    if(hr > 12){
        hr = hr - 12
    document.getElementById("ap").innerHTML = "PM"
    }else{
    document.getElementById("ap").innerHTML = "AM"
    }
    document.getElementById("hrs").innerHTML = hr + ":"
    // console.log(`${hr+':'}${mi+':'}${se}`)

    setInterval(time, 1000)
  }
  
// <-------------------------------------------->

//37
let te = document.querySelector('#h3-tag')
let rtbtn = document.querySelector('#rt-btn')

rtbtn.addEventListener('click', () => {
    te.textContent = 'Welcome to Elevation academy'
})


// <-------------------------------------------->

//38
let te1 = document.querySelector('#h3-tag1')
let rtbtn1 = document.querySelector('#rt-btn1')

rtbtn1.addEventListener('click', () => {
    te1.textContent = ''
})