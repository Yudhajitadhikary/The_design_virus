'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { images } from '@/constant';
const ImageViewer = ({ currentIndexs }) => {
  const [currentIndex, setCurrentIndex] = useState(currentIndexs);
  const [scale, setScale] = useState(1);
  
  // Sample images array - replace with your own images

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative bg-gray-900 rounded-lg overflow-hidden">
        {/* Main image container */}
        <div className="relative h-96 flex items-center justify-center">
          <img
            src={images[currentIndex].image}
            alt={`Image ${currentIndex + 1}`}
            className="transition-transform duration-200 ease-in-out"
            style={{
              transform: `scale(${scale})`,
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
          
          {/* Navigation buttons */}
          <button 
            onClick={handlePrevious}
            className="absolute left-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Controls bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleZoomOut}
              className="p-2 rounded-full hover:bg-black/30 transition-colors"
              disabled={scale <= 0.5}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm">{Math.round(scale * 100)}%</span>
            <button 
              onClick={handleZoomIn}
              className="p-2 rounded-full hover:bg-black/30 transition-colors"
              disabled={scale >= 3}
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;