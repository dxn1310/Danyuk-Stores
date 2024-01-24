import Footer from '../../landing/landing_components/Footer';
import Header from '../../landing/landing_components/Header';
import "../itemListPage/itemList.css"
import AccordionType from "../itemListComponents/AccordionType";
import img from "../../landing/images/img1.jpg";
import "../itemListPage/itemList.css"
import { data } from '../../Data/data.js';

import ItemMenu from '../itemMenu/itemMenu.js';

export default function itemList() {

  const category = ["Millet Products","Desi Rice","Noodles","Cold Pressed Oils"]
  const types = ["Millet Noodles","Millet Pasta","Millet Vermicelli","Millet Flakes","Millet Rice","Desi Rice","Noodles","Cold Pressed Oils",];
  const Data = data;
  
  return (
      <div className='page-conatainer'>
        <div className='itemList-outer'>
              <Header />
              <div className='ItemList-body'>
                <div> 
                  <b>The various Items we sell are...</b>
                </div>
                {/* <ItemMenu types = {types} Data={Data} category={category}/> */}
                <AccordionType types = {types} Data={Data} category={category}/>
              </div>
        </div>
          <Footer />
      </div>
  );

}