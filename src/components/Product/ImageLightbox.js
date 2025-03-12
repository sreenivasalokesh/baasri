import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { useState } from "react";
import { Captions, Slideshow, Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// "/silk/87654322/main.jpg",
//       "/silk/87654322/pallu.jpg",    
//       "/silk/87654322/3.jpg",
//       "/silk/87654322/4.jpg",
//       "/silk/87654322/5.jpg", 


export default function ImageLightbox({isOpen, setIsOpen, images, index}) {
   
  return (
    <>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        index={index}
        
      />
    </>
  );
}

