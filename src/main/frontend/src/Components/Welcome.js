function Welcome(){
return (
    <>
    <div id="realBackground">
    <div id="mainBackGround">
    <center><h1 id="headings">ToolBox</h1></center>
    <div className = "container">
    <center><img id="mainImage2" src={`${process.env.PUBLIC_URL}/FrontPage/Logo.png`} alt="Tools" /></center>
    </div>
    <nav class="crumbsArea">
        <center>
            <ol>
                <span class="HomeLinks"><a href="/Parts/departments/:department" id="navBar">Departments</a></span><br/>
                <span class="HomeLinks"><a href="/Parts/Circular" id="navBar2">Weekly Ads</a></span><br/>
                <span class="HomeLinks"><a href="/Parts/About" id="navBar3">All About ToolBox</a></span>
            </ol>
        </center>
    </nav>
    <div>
    <hr/>
    </div>
    <center>
    <div className="welcomePage">
    </div>
    </center>
    </div>
    <div id="mainBottom">
        <div>
        <hr/>
        <center><button id="button1" type="button" disabled ><b>Ｗ ｅ ｌ ｃ ｏ ｍ ｅ</b></button></center>
        </div>
    </div>
    </div>
    </>
    )
}

export default Welcome;