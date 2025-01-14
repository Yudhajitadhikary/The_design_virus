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
      <div className="p-8 bg-white" id='workflow'>
        <h1 className="text-yellow-400 text-5xl md:text-7xl font-bold tracking-wider">
          WORKFOLIO
        </h1>
      </div>
      <div id='header' className="custom">
        <Header />
      </div>
      <div className="bg-white">
        {/* <div className="w-1/2"><ServiceList/></div> */}
        {/* <div className="w-1/2"> */}
          <div className="flex flex-wrap">{images.map((item) => (
            <div key={item.id} className="w-1/3 p-2">
              <img 
                onClick={() => { handleClick(item) }}
                src={images[currentIndex].image}
                alt={`Image ${currentIndex + 1}`} 
              />
            </div>
          ))}</div>
        {/* </div> */}
      </div>
      <DialogBox isOpen={open} onClose={() => setOpen(false)} title="Image Viewer">
        <div><ImageViewer currentIndexs={currentIndex}/></div>
      </DialogBox>
      <Footer/>
    </div>
  );
}
