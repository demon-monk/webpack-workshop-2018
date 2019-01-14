export default (url) => {
    const imgEle = document.createElement('img')
    imgEle.src = url
    return imgEle
}