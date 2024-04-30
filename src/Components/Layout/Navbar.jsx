import './Navbar.css' 
import Input from './Input'
import { CiShoppingCart } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

function Navbar(){
    return(
        <div className="bg-fibra">
            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-md-12 col-lg-2 d-flex justify-content-center align-items-center">
                        <a className="text-white" href="?id=home">
                            <FaHome size="3em"/>
                            {/* <img height="90" className="my-3" src="internetfiles/img/site/logotipo_jj.png" alt=""> */}
                        </a>
                    </div>
                    <div className="col-8 offset-2 col-sm-8 offset-sm-2 offset-md-0 col-md-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="navbar-procurar position-relative w-100">
                            <Input classe="form-control rounded-pill obrigatorio" id="procurar" name="procurar" placeholder="Digite o que procura"/>
                            <a className="btn text-dark rounded-pill position-absolute" type="button" id="btnProcurar" name="btnProcurar"><i className="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-center">
                        {/* <div>
                            <div className="d-flex f-wrap justify-content-center my-2">
                                <p className=" text-white mb-1">(11) 2258-2331<i className="fa-solid fa-square-phone text-white mx-1"></i> </p>
                                <p className=" text-white mb-1">(11) 95399-9228<i className="fa-brands fa-whatsapp text-white mx-1"></i></p>
                            </div>
                            <div className="text-center">
                                <p className="text-white mb-1">Souza - vendas1@jjbrindes.com.br</p>
                                <p className="text-white m-0">Jonas - vendas@jjbrindes.com.br</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-center">
                        <div className="text-center position-relative">
                            <a className="btn btn-success d-flex align-items-center justify-content-center text-start" href="?id=carrinho">
                                <CiShoppingCart size="3em"/> Orçamento 
                            </a>
                            <span className="badge d-flex justify-content-center align-items-center bg-red rounded-circle position-absolute" id="totalCarrinho">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar