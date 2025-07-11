const viewMoreBtn = document.getElementById("view-more-btn")
const blog4 = document.getElementById('blog4')
const blog5 = document.getElementById('blog5')
const blog6 = document.getElementById('blog6')

viewMoreBtn.addEventListener('click' , function() {
    blog4.classList.toggle('hidden')
    blog5.classList.toggle('hidden')
    blog6.classList.toggle('hidden')
    viewMoreBtn.classList.toggle('hidden')
})