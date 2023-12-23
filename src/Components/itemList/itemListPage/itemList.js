import Footer from '../../landing/landing_components/Footer';
import Header from '../../landing/landing_components/Header';
import "../itemListPage/itemList.css"
import AccordionType from "../itemListComponents/AccordionType";
import img from "../../landing/images/img1.jpg";

export default function itemList() {

  const types = ["Millet Products","Desi Rice"];
  const Data = {
    "Millet Products" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },

      {
        name : "MP Item2",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm3dedeeevreverbvtr"
      },
      {
        name : "MP Item3",
        pic : img,
        data : "qwertyudrvrevreveiop[asdfghjklzxcvbnm"
      },
    ],

    "Desi Rice" : [
      {
        name : "MP Item1",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm"
      },

      {
        name : "MP Item2",
        pic : img,
        data : "qwertyuiop[asdfghjklzxcvbnm3dedeeevreverbvtr"
      },
      {
        name : "MP Item3",
        pic : img,
        data : "qwertyudrvrevreveiop[asdfghjklzxcvbnm"
      },
    ],


  }


    return (
        <div className='page-conatainer'>
            <div>
                <Header />
                <div>
                  The various Items we sell are...
                </div>
                <AccordionType types = {types} Data={Data}/>
            </div>
            <Footer />
        </div>
    );
}