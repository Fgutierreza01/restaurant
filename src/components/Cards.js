import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsFillCalendarDateFill} from "react-icons/bs";
import {FaPizzaSlice, FaChild } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";


function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://madridpress.com/upload/images/02_2020/827_local.png" />
        <Card.Body>
          <Card.Title>Sobre nosotros:</Card.Title>
          <Card.Text>
            Sr. Jabalí es un local de tradición familiar en donde disfrutamos la pasión por la comida, al igual que nuestros clientes.  
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><FaChild/>Grato ambiente familiar</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.latercera.com/resizer/paQrJOZi15EjJBXDgQQOS_wNl-M=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/IH4ZL56GY5B5NONKRLO6GTWMLA.jpg" />
        <Card.Body>
          <Card.Title>Hamburguesas</Card.Title>
          <Card.Text>
            Ven a disfrutar de todas nuestras variedades de Hamburguesas, tenemos para todos los gustos, especiales para niños y también veganas 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><GiHamburger/> Disfruta tu hamburguesa</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa-945x630.jpg" />
        <Card.Body>
          <Card.Title>Pizzas</Card.Title>
          <Card.Text>
            Si lo tuyo son las pizzas, no te arrepentirás de venir a visitarnos, contamos con una gran variedad y en diferentes versiones.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><FaPizzaSlice/> Disfruta tu pizza</small>
        </Card.Footer>
      </Card>
      <Card>
 
        <Card.Body>
          <Card.Title>No dejes de Visitarnos!!!</Card.Title>
          <Card.Text>
            Visita nuestra sección de contacto en la parte superior, déjanos tus datos y nos comunicaremos contigo para gestionar tu reserva.
            Ubicados en el barrio centro de Quilicura
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="https://www.google.com/maps/vt/data=v3lI8AXkO6eFlYphp-GSZFnhyzZo8466NH90SV0Vho9mII1_zwPprMTtj2N5W53fqbWYMDZdBFDVlgzwUDa2tsLhpvap7qnu7FVpCHRfVwleNygcbClFlhu_2kSS77k4rUfm_ZsF5LyMbzAMn-APm_fjUjQTG8I7" />
        <Card.Footer>
          <small className="text-muted"><BsFillCalendarDateFill/> Agenda tu Visita</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;