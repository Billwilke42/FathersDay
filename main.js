
const images = [
    {img: 'https://i.postimg.cc/ZKnksqKx/10154140-10153075211413577-252129690849809218-n.jpg'},
    {img: 'https://i.postimg.cc/j5tmHxFN/10441362-10153075213498577-1458957371368825852-n.jpg'},
    {img: 'https://i.postimg.cc/rwRBcY4d/14724633-10154172275038577-7772541266496452692-n.jpg'},
    {img: 'https://i.postimg.cc/HLQF8cBd/44298406-10156189887353577-4146578890342531072-n.jpg'},
    {img: 'https://i.postimg.cc/yYbMMzD4/44365068-10156189887638577-7557565818595180544-n.jpg'},
    {img: 'https://i.postimg.cc/SRtPbWN7/44716166-10156198768588577-2885296902750863360-n.jpg'},
    {img: 'https://i.postimg.cc/v8PkndLg/64533550-10215499775547327-7925062517729001472-n.jpg'},
    {img: 'https://i.postimg.cc/7YdRBMRq/80028596-10157274892648577-3514858929894981632-n.jpg'},
]

let count = 0;

onLoad()

function onLoad() {
    document.querySelector('.cycling-images').innerHTML = `
    <section class='images'><img src="${images[1].img}">`
    setInterval(cycleImages, 4000)
}

function cycleImages() {
    count++ 
    if(count === 9) {
        count = 0
    }
    document.querySelector('.cycling-images').innerHTML = `
    <section class='images'><img src="${images[count].img}">`  
}


for(i=0; i<200; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 10);
    // console.log(randomAnimationDelay)
  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.left=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }