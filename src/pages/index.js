'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import ImageViewer from "@/components/ImageViewer";
import ServiceList from "@/components/ServiceList";
import DialogBox from "@/components/DialogBox";
import { images } from '@/constant';
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[open, setOpen] = useState(false);
  const handleClick = (item) => {
    setOpen(true);
    setCurrentIndex(item.id);
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scrolling', window.scrollY, document.getElementById('Banner').offsetHeight);
      if(window.scrollY >= document.getElementById('Banner').offsetHeight){
        document.getElementById('Banner').classList.add('hide');
        document.getElementById('header').classList.remove('custom');
        
      }else{
        document.getElementById('Banner').classList.remove('hide');
        document.getElementById('header').classList.add('custom');
      }
      // document.getElementById('Banner').classList.remove('hide');
    }); 
    
  //   setTimeout(() => {  
  //     document.getElementById('Banner').classList.add('hide');
  //   } , 3000);  
  }, []);
  return (
    <div className="bg-white">
      <div id='Banner'>
        <Banner/>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800">
        A creative Agency
      </h1>
      
      <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
        The Design Virus is a creative agency from Kolkata, India. We are deeply focused on clients' visual presentation and promotional activity like designing logo or graphics, photoshoot, TV commercial, website, digital media and offline media advertising. We start with initial brand strategy and understanding the need to the phase of building connection with
      </p>
    </div>
      <div id='header' className="custom">
        <Header />
      </div>
      <div className="bg-white flex flex-wrap">
        <div className="w-1/2"><ServiceList/></div>
        <div className="w-1/2">
          <div className="flex flex-wrap">{images.map((item) => (
            <div key={item.id} className="w-1/3 p-2">
              <img 
                onClick={() => { handleClick(item) }}
                src={images[currentIndex].image}
                alt={`Image ${currentIndex + 1}`} 
              />
            </div>
          ))}</div>
        </div>
      </div>
      <DialogBox isOpen={open} onClose={() => setOpen(false)} title="Image Viewer">
        <div><ImageViewer currentIndexs={currentIndex}/></div>
      </DialogBox>
      <Footer/>
    </div>
  );
}
