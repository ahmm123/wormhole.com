const slides = ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg', 's7.jpg', 's8.jpg'];
const classMates = [
  {index: 1, name: 'آراد ابوالحسن زاده', questions: 0, score: 0, hasGift: false},
  {index: 2, name: 'محمدطاها شفیعی', questions: 0, score: 0, hasGift: false},
  {index: 3, name: 'علیرضا رستگار', questions: 0, score: 0, hasGift: false},
  {index: 4, name: 'آرومین قمرزاده', questions: 0, score: 0, hasGift: false},
  {index: 5, name: 'حمیدرضا قناعت پیشه', questions: 0, score: 0, hasGift: false},
  {index: 6, name: 'امیرعلی قناعتی', questions: 0, score: 0, hasGift: false},
  {index: 7, name: 'ادیب کاظمی', questions: 0, score: 0, hasGift: false},
  {index: 8, name: 'امیرعلی کاظمی', questions: 0, score: 0, hasGift: false},
  {index: 9, name: 'کسری کاظمی', questions: 0, score: 0, hasGift: false},
  {index: 10, name: 'عرفان کاووسی فر', questions: 0, score: 0, hasGift: false},
  {index: 11, name: 'محمدمتین کرمی جعفرلو', questions: 0, score: 0, hasGift: false},
  {index: 12, name: 'سپهر کریمی زارچی', questions: 0, score: 0, hasGift: false},
  {index: 13, name: 'امیرطاها گلشن', questions: 0, score: 0, hasGift: false},
  {index: 14, name: 'سید بهنیا موسوی', questions: 0, score: 0, hasGift: false},
  {index: 15, name: 'سید بهتاش موسوی نژاد', questions: 0, score: 0, hasGift: false},
  {index: 16, name: 'مهیار مومن روانبخش', questions: 0, score: 0, hasGift: false},
  {index: 17, name: 'امیر علی مومنی', questions: 0, score: 0, hasGift: false},
  {index: 18, name: 'فربد میری', questions: 0, score: 0, hasGift: false},
  {index: 19, name: 'محمدحسین نصیری نژاد', questions: 0, score: 0, hasGift: false},
  {index: 20, name: 'علیرضا نوروزی', questions: 0, score: 0, hasGift: false},
  {index: 21, name: 'امیرپوریا نیازی', questions: 0, score: 0, hasGift: false},
  {index: 22, name: 'رادین نیری', questions: 0, score: 0, hasGift: false},
  {index: 23, name: 'آرتین هوشیار', questions: 0, score: 0, hasGift: false},
];

let slideNumber = 0;
let isfullscreen = false;

function addSlide(index, images) {
  const slide = document.createElement('img');
  slide.className = 'slide';
  slide.id = 's' + String(index);
  slide.src = './assets/images/slides/' + String(images);
  if (index == 0) {
    slide.classList.add('active');
  }
  document.querySelector('.slider').appendChild(slide);
}

for (let index = 0; index < slides.length; index++) {
  addSlide(index, slides[index]);
}

function addQuestions(index){
  const QsNumber = document.getElementById('QsNumber')
  QsNumber.innerText = Number(QsNumber.innerText) + 1
  classMates[index-1].questions += 1;
  refershClassMates();
}

function removeQuestions(index){
  if (classMates[index-1].questions > 0) {
    const QsNumber = document.getElementById('QsNumber')
    QsNumber.innerText = Number(QsNumber.innerText) - 1;
    classMates[index-1].questions -= 1;
    console.log(classMates[index-1].questions)
    refershClassMates();
  }
}

function addClassmate(classmate){
  const classmateObject = document.createElement('div');
  classmateObject.className = 'classmate';
  classmateObject.id = 'c'+String(classmate.index);
  const name = document.createElement('p');
  name.className = 'name';
  name.innerText = classmate.name;
  classmateObject.appendChild(name);
  const addQs = document.createElement('i');
  addQs.onclick = ()=>{addQuestions(classmate.index)};
  addQs.innerText = '+';
  classmateObject.appendChild(addQs);
  const qsnum = document.createElement('i');
  qsnum.innerText = classmate.questions;
  qsnum.id = 'qs'+String(classmate.index);
  classmateObject.appendChild(qsnum);
  const removeQs = document.createElement('i');
  removeQs.onclick = ()=>{removeQuestions(classmate.index)};
  removeQs.innerText = '-';
  classmateObject.appendChild(removeQs);
  document.querySelector('.classmates').appendChild(classmateObject)
}

function refershClassMates(){
  document.querySelector('.classmates').innerHTML = '';
  for (let index = 0; index < classMates.length; index++) {
    addClassmate(classMates[index])
  }
}

refershClassMates();

function toggleFullScreen(){
  const elem = document.querySelector('.slider');
  if (!isfullscreen) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    isfullscreen = true;
    return;
  } else{
    document.exitFullscreen()
    isfullscreen = false;
    return;
  }
}

function nextSlide(){
  if (slideNumber+1 < slides.length) {
    document.getElementById('s'+String(slideNumber++)).classList.remove('active');
    document.getElementById('s'+String(slideNumber)).classList.add('active');
    document.getElementById('slide-number').innerText = slideNumber+1;
  }
}

function prevSlide(){
  if (slideNumber-1 >= 0) {
    document.getElementById('s'+String(slideNumber--)).classList.remove('active');
    document.getElementById('s'+String(slideNumber)).classList.add('active');
    document.getElementById('slide-number').innerText = slideNumber+1;
  }
}

function footerAnimation() {
  const footerText = document.getElementById('footer-text');
  let left = 1;
  setInterval(()=>{
    if (footerText.style.left=='100%') left = -100
    footerText.style.left = String(left) + '%';
    left+=0.5;
  }, 80);
}

footerAnimation();
