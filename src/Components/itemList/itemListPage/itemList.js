import Footer from '../../landing/landing_components/Footer';
import Header from '../../landing/landing_components/Header';
import "../itemListPage/itemList.css"
import AccordionType from "../itemListComponents/AccordionType";
import img from "../../landing/images/img1.jpg";
import "../itemListPage/itemList.css"
import { data } from '../../Data/data.js';

export default function itemList() {

  const types = ["Millet Products","Desi Rice","Noodles","Cold Pressed Oils",];
  const Data = data;
  
  return (
      <div className='page-conatainer'>
        <div className='itemList-outer'>
              <Header />
              <div className='ItemList-body'>
                <div> 
                  <b>The various Items we sell are...</b>
                </div>
                <AccordionType types = {types} Data={Data}/>
              </div>
        </div>
          <Footer />
      </div>
  );

}