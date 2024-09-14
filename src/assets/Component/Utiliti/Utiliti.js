import toast from "react-hot-toast"
export const getblog = () => {
    let blogs = []
    const storData = localStorage.getItem('blog')
    if (storData) {
        blogs = JSON.parse(storData)
    }
    return blogs
}
// save 
export const saveblog = (blog) => {
    let blogs = getblog()
    const isexit = blogs.find(b => b.id === blog.id)
    if (isexit) {
        return toast.error('allrady bookmarked')
    }
    blogs.push(blog)
    localStorage.setItem('blog', JSON.stringify(blogs))
    toast.success('blog bookmark successfull')
}

// delete
export const deleteblog = id => {
    let blogs = getblog()
    const remainder = blogs.filter(b => b.id !== id)
    localStorage.setItem('blog', JSON.stringify(remainder))
    toast.success('remove this bookmark')
}
