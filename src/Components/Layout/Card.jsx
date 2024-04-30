import './Card.css'
import { useState,useEffect } from 'react'

function Card() {
    var [produtos,setProdutos] = useState([])
    useEffect(()=>{
        function listarProdutos(){
            try {
                fetch("http://localhost:5000/product", {
                  method: "GET", 
                  headers: {
                    "Content-Type": "application/json",
                  }
                }).then((elements)=>elements.json())
                .then((elements)=>{
                    setProdutos(elements)
                });
          
              } catch (error) {
                console.error("Error:", error);
              }
        }
        listarProdutos()
    },[])

  
    return (
        <>
            {
                produtos.map((json,index)=>(
                    <div key={index} className="col-sm-6 col-xl-3 my-2">
                        <div className="card h-100 bg-white border-blue cursor-pointer zoom" >
                            <div className="externo-prod position-relative d-flex align-items-center justify-content-center">
                                <img onerror="this.src = 'temp.php?mv=centro&amp;mh=meio&amp;img=site/sem_imagem.png'" src={`https://www.jjbrindes.com.br/temp.php?mv=centro&mh=meio&img=produtos/${JSON.parse(json.img)[0].imagem}`} />        
                            </div>
                         
                            <div className="card-body text-center d-flex flex-column py-2">
                                <div className="d-flex justify-content-center col">
                                    <p className="card-title mb-0 titulo fw-bold">{json.category_nome}</p>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <div className="btn btn-success zoom ">                   
                                        CONSULTAR VALORES               
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-around f-wrap fw-bold">               
                                    <small>A PARTIR DE</small>           
                                </div>
                                <div className="d-flex justify-content-around f-wrap">
                                    <p className="card-text text-end mb-0 fw-bold"><small><span className="titulo">{json.refence}</span></small></p>
                                    <p className="card-text text-end mb-0 titulo color-blue fw-bold">R$ {parseFloat(json.price).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default Card