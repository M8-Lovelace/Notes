// Clousure to simulate a post functionalities
const languages = () => {
    const allLanguages = []
    return insertNewLanguage = (post) => {
        allLanguages.push(post)
        console.log(allLanguages)
    }
}

let newPost = languages()
newPost({name: 'JavaScript'})
newPost({name: 'Rust'})
newPost({name: 'Go'})
newPost({name: 'C++'})
