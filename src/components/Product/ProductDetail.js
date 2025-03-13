import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";
import { MdClose } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { GoZoomIn } from "react-icons/go";
import {
    EmailShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    WhatsappIcon,

} from "react-share";
import "./Product.css";
import Papa from "papaparse";

const parseDetails = (detailsStr) => {
    try {
      return JSON.parse(detailsStr.replace(/'/g, '"')); // Fix single quotes
    } catch (error) {
      console.error("Error parsing details:", detailsStr, error);
      return {};
    }
  };



const ProductDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const [thumbnails, setThumbnails] = useState(null);
    const [saree, setSaree] = useState(null);
   

    useEffect(() => {
        const fetchSarees = async () => {
          try {
            const response = await fetch("/data/sarees.csv"); // Ensure correct path
            const csvText = await response.text();
    
            const result = await new Promise((resolve) => {
              Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: resolve,
              });
            });
    
            const processedData = result.data.map((row) => ({
              ...row,
              labels: row.labels ? row.labels.split(",").map((l) => l.trim()) : [],
              images: row.images ? row.images.split(",").map((img) => img.trim()) : [],
              details: row.details ? parseDetails(row.details) : {},
            }));
    
            

            if(processedData){
                const saree = processedData.filter((product) => product.sku == id)[0];
                setSaree(saree);
        
                const imageObjects = saree.images.map((image) => { return { 'src': "/sarees/" + saree.sku + "/" + image } })
                setThumbnails(imageObjects);
                setSelectedImage(imageObjects[0])
            }
          } catch (error) {
            console.error("Error fetching sarees:", error);
          }
        };
    
        fetchSarees();
      }, [])


    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 10000); // Reset after 2 seconds
            })
            .catch(err => console.error("Failed to copy:", err));
    };


    const shareButtonbgcolor = {
        backgroundColor: isShareOpen ? "pink" : "#f4f4f4",
    }

    return (
        <div className="product-detail">
            {/* Left: Thumbnails */}
            <div className="product-detail-container">
                <div className="thumbnail-container">
                    {thumbnails && thumbnails.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={`Thumbnail ${index}`}
                            className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
                            onClick={() => { setSelectedImage(img); setIndex(index); }}
                        />
                    ))}
                </div>

                {/* Right: Large Image Preview */}
                <div className="product-detail-image">
                    {selectedImage && <img src={selectedImage.src} alt="Selected" className="large-image"
                        onClick={() => setIsOpen(true)}
                        style={{ cursor: "zoom-in" }} />}
                    <GoZoomIn className="icon-overlay" onClick={() => setIsOpen(true)} />

                </div>

                {isOpen && <ImageLightbox images={thumbnails} isOpen={isOpen} setIsOpen={setIsOpen} index={index} />}

                {saree && <div className="product-description">
                    {isShareOpen &&
                        <div className="product-share">
                            <div className="product-share-left">
                                <div className="share-button">
                                    <WhatsappShareButton className="share-handle"
                                        url="https://www.google.com"
                                        title="Check out this saree on SareeShop">
                                        <WhatsappIcon className="share-handle-icon" round />
                                    </WhatsappShareButton>
                                </div>
                                <div className="share-button">
                                    <EmailShareButton className="share-handle"
                                        url="https://www.google.com"
                                        title="Check out this saree on SareeShop">
                                        <EmailIcon className="share-handle-icon" round />
                                    </EmailShareButton>
                                </div>
                                <div className="share-button">
                                    <FacebookShareButton className="share-handle"
                                        url="https://www.google.com"
                                        title="Check out this saree on SareeShop">
                                        <FacebookIcon className="share-handle-icon" round />
                                    </FacebookShareButton>
                                </div>
                                <div className="share-button copy-link" onClick={() => handleCopy()}>
                                    {copied ? "Copied!" : "Copy link"}
                                </div>
                            </div>
                            <div className="product-share-right">
                                <MdClose
                                    className="cancel-button"
                                    onClick={() => setIsShareOpen(!isShareOpen)} />
                            </div>
                        </div>
                    }
                    <div className="titleDiv">
                        <p className="title">{saree.title}</p>
                        <div className="click-share-button"
                            style={shareButtonbgcolor}
                            onClick={() => setIsShareOpen(!isShareOpen)}
                        ><RiShareForwardFill /></div>

                    </div>


                    <hr className="grey-divider"></hr>
                    <p className="sku-code"><span className="bold">SKU: </span><span className="faded-font">{saree.sku}</span></p>
                    <p className="sku-code faded-font">{saree.description}</p>

                    <hr className="grey-divider"></hr>
                    <p className="h2">Specifications</p>
                    {saree.details && Object.entries(saree.details).map(([key, value]) => 
                         <p key={value} className="sku-code">
                            <span className="bold product-description-item-width">{key} </span>
                            <span className="faded-font tabs-3">{value}</span>
                            </p>
                    )}

                  

                    
                </div>}
            </div> 
        </div>
    );
};

export default ProductDetail;
