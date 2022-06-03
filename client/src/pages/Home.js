
const backGround=new URL("../images/picture1.png",import.meta.url)

const Home = () => {
    return(
        <>
          <div className="home-class">
           <div container="class_backGround">
              <img src={backGround} width="500" height="650"/>
         </div>
     
     
         <div className="class_home">
            
            <h1>Swipe Right@</h1>
                            
            </div>
            
      
    </div>
      



            </>
    )

}
export default Home