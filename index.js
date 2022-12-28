const articleEl = document.getElementById("article-paragraph")
const readMoreBtn = document.getElementById("read-more-or-less")


function changeParagrap(state) {
    let moreState = `
        Ultricies morbi urna lectus magna quisque ultricies velit enim nisi mi
        volutpat amet id id porta auctor at viverra consequat turpis quam enim... 
        <button id="read-more-or-less" onclick="changeParagrap('less')">read more</button>
    `
    let lessState = `
        Ultricies morbi urna lectus magna quisque ultricies velit enim nisi mi
        volutpat ametuctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
        volutpat amet id iorta auctor  id id porta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
        volutpat amet id iorta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
        volutpat atpat amet id iorta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
        volutmet id id porta d porta auctor at viverra us magna quisque ultricies velit enim nisi mi
        volutpat amet idrra conseq id porta auctor at viverra consequat turpis  velit enim nisi mi
        volutpat amet id id porta auctor at viverra consequat turpis quam enim agna quisque ultricies velit enim nisi mi
        volutpat amet id id porta auctor at viverra us magnt viverra us magna quisque ultricies velit enim nisi mi
        volutpat amet idrra conseq id porta auctor at viverra conseqviverrauat turpis  velit enim nisi mi
        volutpat amet id id porta auctor at viverra consea quisquequam enim agna quisque ultricies velit enim nisi mi
        volutpat amet id id porta auctor at viveconsequat turpis quam ea consequat turpis qu atrpi vrpiive.
        <button id="read-more-or-less" onclick="changeParagrap('more')">read less</button>
    `

    if (state === "more") 
        articleEl.innerHTML = moreState
    else 
        articleEl.innerHTML = lessState
}