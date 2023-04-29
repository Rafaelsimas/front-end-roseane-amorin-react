import { Link } from "react-router-dom";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="container-home">
        <header id="topDashboard">
            <nav id="boxDashboard">
            <h2>Home</h2>
            <Link to='/'>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </Link>
            </nav>

        </header>

      <ul className="select-service">
        <li>
          <div className="pink">
            <ion-icon name="hand-left"></ion-icon>
          </div>
          <p>unhas</p>
        </li>
        <li>
          <div className="green">
            <ion-icon name="cart"></ion-icon>
          </div>
          <p>Produtos</p>
        </li>
        <li>
          <div className="purple">
            <ion-icon name="chatbubble"></ion-icon>
          </div>
          <p>cuidados</p>
        </li>
        <li>
          <div className="lightgreen">
            <ion-icon name="calendar"></ion-icon>
          </div>
          <p>Atendimento</p>
        </li>
      </ul>

      <div className="container-offers">
        <h2>Melhores ofertas</h2>
        <p>As melhores promoções de beleza</p>
        <ul className="list-image-offers">
          <li className="image-offers">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5oYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="title-card">
              <strong>Unha negra</strong>
            </div>
            <div className="description-card">
              <p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique ipsum quaerat aspernatur alias obcaecati
                  
                </p>
              </p>
            </div>
          </li>
          <li className="image-offers">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5oYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="title-card">
              <strong>Unha negra</strong>
            </div>
            <div className="description-card">
              <p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique ipsum quaerat aspernatur alias obcaecati
                </p>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="popular-services">
        <h2>Serviços mais vendidos</h2>
        <ul className="list-popular-services">
            <li className="service">
                <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5oYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="popular-description-hover">
                    <p>Unha tradicional</p>
                </div>
            </li>
            <li className="service">
                <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5oYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="popular-description-hover">
                    <p>Unha tradicional</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
}
