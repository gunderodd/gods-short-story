const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
        return
    } else {
        img.src = src
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