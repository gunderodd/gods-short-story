const images = document.querySelectorAll("[srcset]")

function preloadImage(img) {
    const srcset = img.getAttribute("srcset")
    if (!srcset) {
        return
    } else {
        img.srcset = srcset
        console.log('working')
    }

}

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 1000px 0px"
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            preloadImage(entry.target)
            imageObserver.unobserve(entry.target)
        }
    })
}, imageOptions)

images.forEach(image => {
    imageObserver.observe(image)
})

// testing with different selectors
// const pictures = document.querySelectorAll("picture")

// pictures.forEach(picture => {
//     console.log(picture)
// })