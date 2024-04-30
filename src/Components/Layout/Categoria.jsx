import './Categoria.css'
import { useState,useEffect } from 'react'
function Categoria(){
    var [categorias,setCategoria] = useState([]);

    useEffect(()=>{
         function ListarCategoria(){
            try {
                fetch("http://localhost:5000/category", {
                  method: "GET", 
                  headers: {
                    "Content-Type": "application/json",
                  }
                }).then((elements)=>elements.json())
                .then((elements)=>{
                    setCategoria(elements)
                });
          
              } catch (error) {
                console.error("Error:", error);
              }
        }
        ListarCategoria()

    },[])

    return(
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-black p-0">
                <a className="navbar-brand" href="#"></a>
                <a className="navbar-toggler btn-navbar" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    MENU
                </a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navbar-header">
                        <li className="nav-item mx-5 px-4 mx-md-4 active">
                            <a className="nav-link text-white" href="?id=home">Home</a>
                        </li>
                        <li className="nav-item mx-5 px-4 mx-md-4">
                            <a className="nav-link text-white" href="?id=quemSomos">Quem somos</a>
                        </li>
                        <li className="nav-item mx-5 px-4 mx-md-4">
                            <a className="nav-link text-white" href="?id=tipoGravacao">Tipo de gravação</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <div className="container-fluid">
                <div className="row bg-medium-dark-gray text-white p-2" id="listarCategoria">
                {
                    categorias.map((json,i)=>(
                        <div key={json.id} className="col-6 col-md-4 col-lg-2 d-flex align-items-center p-1 mb-2">   
                            <div className="d-flex align-items-center cursor-pointer zoom menu-categoria">       
                                <div className="d-flex justify-content-center externo-cat">           
                                    <img src="internetfiles/img/categorias/91b858e98aef331a157c607566ab44f3.png" className="tamanho-imagem" />       
                                </div>       
                                <span className="font-16 poppins-regular ms-1">{json.name}</span>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
   
        
    )
}
export default Categoria