
const backGround=new URL("../images/picture2.png",import.meta.url)

const Home = () => {
    return(
        <>
          <div className="home-class">
           <div className="class_backGround">
              <img src={backGround}/>
         </div>
     
     
         <div className="class_home">
            
            <h1>Swipe Right@</h1>
            <button className="class_button">Get Started</button>
                  
            </div>
            
      
    </div>
      



            </>
    )

}
export default Home