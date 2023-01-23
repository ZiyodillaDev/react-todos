 import TodoImg from "../../assets/images/todo-img.png"
 import DarkLlight from "../../assets/images/moon.svg"
 const Header = () =>{
  return(


<div className="bg">
<header className="siteHeader">
        <img src={TodoImg} alt="todo-img" className="todoImg"></img>
        <h1 className="todoText">TODO</h1>
        <button className="js-mode dark-light">
                <img src={DarkLlight} alt="dark-mode" />
              </button>
    </header>
</div>
  )
 }

 export default Header