const NoPage = () => {
    const style = {
        color: "black",
        fontSize: 50,
        /* fontFamily: "Normal", */
        padding: "5em"
    }
    const text = "404 Page Not Found "
    return <h1
        style={style}>
        {text} <img src="../404.gif" alt="╰（‵□′）╯" />
        </h1>
}

export default NoPage;