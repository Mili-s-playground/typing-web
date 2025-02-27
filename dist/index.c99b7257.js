// const container = document.createElement('div');
// // container.style.position = 'absolute';
// const fullWidth = window.innerWidth;
// const fullHeight = window.innerHeight;
// // console.log(fullWidth);
// const box = document.createElement('div');
// // container.id = 'containerId';
//
// const size = 10 + (Math.random() * 90);
// box.style.width = `${size}px`;
// box.style.height = `${size}px`;
// box.style.backgroundColor = 'yellow';
// box.style.position = 'absolute';
//
// const randomWidth = `${(fullWidth - size) * Math.random()}px`;
// const randomHeight = `${(fullHeight - size) * Math.random()}px`;
// // console.log(randomWidth);
// box.style.setProperty('top', randomHeight);
// box.style.setProperty('left', randomWidth);
//
// // let boxPositionX = box.offsetLeft;
// // let boxPositionY = box.offsetTop;
//
// document.querySelector("body").append(box);
//
// let speed = 10 * Math.random();
// setInterval(() => {
//
//     if (box.style.top > (fullHeight - size)) {
//         speed = -speed;
//     }
//     if (box.style.left > (fullWidth - size)) {
//         speed = -speed;
//     }
//     box.style.left = box.offsetLeft + speed + 'px';
//     box.style.top = box.offsetTop + speed + 'px';
//
// },100)
const particles = [];
// mouse tracker
const brdMouse = document.createElement("div");
brdMouse.id = "brdMouseId";
brdMouse.style.height = '50px';
brdMouse.style.width = '50px';
brdMouse.style.borderRadius = '25px';
brdMouse.style.backgroundColor = 'black';
brdMouse.style.borderColor = 'red';
brdMouse.style.position = 'absolute';
brdMouse.style.opacity = '0';
for(let i = 0; i < 20; i++){
    console.log("for loop executed");
    const particle = document.createElement('div');
    const size = 20 + Math.random() * 40;
    const x = Math.random() * (innerWidth - size);
    const y = Math.random() * (innerHeight - size);
    let dx = (5 + Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
    let dy = (5 + Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
    particle.style.position = 'absolute';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = `${50}%`;
    // particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    particle.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.body.append(particle);
    particles.push({
        particle,
        size,
        dx,
        dy
    });
// const smlParticle = document.querySelector('#particle');
// console.log(smlParticle);
// smlParticle.addEventListener('move', ()=>{
//     const particleX = smlParticle.clientX;
//     const particleY = smlParticle.clientY;
//     console.log(particleX, particleY);
// });
}
let tmOut = null;
document.body.append(brdMouse);
document.addEventListener('mousemove', (e)=>{
    // document.querySelector('body').style.backgroundColor = 'red';
    // e.clientX + 'px' = brdMouse.style.left;
    // console.log(e.clientX);
    // let dx = e.clientX;
    brdMouse.style.opacity = '1';
    brdMouse.style.left = `${e.clientX - brdMouse.clientWidth / 2}px`;
    brdMouse.style.top = `${e.clientY - brdMouse.clientHeight / 2}px`;
    const mouseStartX = e.clientX;
    const mouseStartY = e.clientY;
    clearTimeout(tmOut);
    // const timeStart = Date.now().;
    tmOut = setTimeout(()=>{
        brdMouse.style.opacity = '0';
        brdMouse.style.transitionProperty = 'opacity';
        brdMouse.style.transitionDuration = '2s';
    }, 5000);
});
document.addEventListener('mouseleave', (e)=>{
    brdMouse.style.opacity = '0';
    brdMouse.style.transitionProperty = 'opacity';
    brdMouse.style.transitionDuration = '4s';
});
setInterval(()=>{
    for (const p of particles){
        const { dx, dy, size, particle } = p;
        particle.style.left = `${particle.offsetLeft + dx}px`;
        particle.style.top = `${particle.offsetTop + dy}px`;
        if (particle.offsetTop + size >= innerHeight || particle.offsetTop <= 0) p.dy = -dy;
        if (particle.offsetLeft + size >= innerWidth || particle.offsetLeft <= 0) p.dx = -dx;
        if (brdMouse.style.opacity === '0') continue;
        const x1 = particle.offsetLeft;
        const y1 = particle.offsetTop;
        // console.log("particle: ", prtX, prtY);
        const x2 = brdMouse.offsetLeft;
        const y2 = brdMouse.offsetTop;
        // console.log("mouseX: ", mouseX);
        // console.log("mouseY: ", mouseY);
        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        const radii = brdMouse.clientWidth / 2 + particle.clientWidth / 2;
        if (distance < radii) {
            particle.style.left = `${x1 + brdMouse.clientWidth / 2}px`;
            particle.style.top = `${y1 + brdMouse.clientHeight / 2}px`;
            p.dy = -dy;
            p.dx = -dx;
        }
    }
}, 50);

//# sourceMappingURL=index.c99b7257.js.map
