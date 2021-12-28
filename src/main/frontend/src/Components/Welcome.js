function Welcome(){
return (
    <>
    <div id="mainBackGround">
    <div className = "container">
    <center><img id="mainImage2" src={`${process.env.PUBLIC_URL}/Logos/Logo.png`} alt="Welcome to Breed Shelter" /></center>
    </div>
    <nav class="crumbsArea">
        <center>
            <ol>
                <li class="crumb"><a href="/breeded-shelter/facility" id="navBar">Departments</a></li>
                <li class="crumb"><a href="/breeded-shelter/staff" id="navBar2">Weekly Ada</a></li>
                <li class="crumb"><a href="/breeded-shelter/residents" id="navBar3">Sign In</a></li>
            </ol>
        </center>
    </nav>
    <div>
    <hr/>
    </div>
    <center>
    <div className="welcomePage">
      <img id="mainImage" src={`${process.env.PUBLIC_URL}/Dogs/affenpinscher1_1.jpg`} alt="Welcome to Breed Shelter" />
    </div>
    </center>
    </div>
    <div id="mainBottom">
        <div>
        <hr/>
        <center><button id="button1" type="button" disabled ><b>Ｗ ｅ ｌ ｃ ｏ ｍ ｅ</b></button></center>
        </div>
    </div>
    </>
    )
}