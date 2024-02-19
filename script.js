let nav = document.querySelector('.nav');
let circle = document.querySelector('.circle');

    const magic = function (e) {

        circle.style.top = `${e.clientY - 12 + window.scrollY}px`
        circle.style.left = `${e.clientX - 15 + window.scrollX}px`
    
    }


    document.documentElement.addEventListener('mousemove', magic)

const moveUp = function (e) {
    let linkItem = e.target.closest('.link-items');

    if(!linkItem) return

    if (linkItem.classList.contains('link-items')) {
        
        document.querySelectorAll('.links').forEach(el => {
            if (linkItem.firstElementChild !== el) {
                el.style.opacity = this;
                document.querySelector('.logo').style.opacity = this;
            }
        })
    }
}


nav.addEventListener('mouseover', moveUp.bind('.6'))

nav.addEventListener('mouseout', moveUp.bind('1'))

let section = document.querySelectorAll('.section');


function fadeIn(entries,observer) {
    let [entry] = entries;
console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('moveup')
        observer.unobserve(entry.target)
    }



}

let option = {
    root: null,
    threshold: .15,
}

section.forEach(function (el) {
    let show = new IntersectionObserver(fadeIn,option)
    show.observe(el)
    el.classList.add('hide')
})


let home = document.querySelector('.home-section');

function sticky(entries) {
    let [entry] = entries

    if (!entry.isIntersecting) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
}

let stickyNav = new IntersectionObserver(sticky, {
    root: null,
    threshold: 0,
    rootMargin:`${-50}px`
})

stickyNav.observe(home)

const smoothScrolling = function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');

    if(id === '#')return

    if(!e.target.closest('.link-items')) return
    document.querySelector(`${id}`).scrollIntoView({behavior:'smooth'})
    
}

document.querySelector('.link-container').addEventListener('click', smoothScrolling )