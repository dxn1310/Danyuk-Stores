import Footer from '../../landing/landing_components/Footer';
import Header from '../../landing/landing_components/Header';
import "../itemListPage/itemList.css"
import AccordionType from "../itemListComponents/AccordionType";
import img from "../../landing/images/img1.jpg";
import "../itemListPage/itemList.css"

export default function itemList() {

  const types = ["Millet Products","Desi Rice","Noodles","Cold Pressed Oils","Organic Farm Produce"];
  const Data = {
    "Millet Products" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },
    ],

    "Desi Rice" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },
    ],

    "Noodles" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },
    ],

    "Cold Pressed Oils" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },
    ],

    "Organic Farm Produce" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },
    ],


  }


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