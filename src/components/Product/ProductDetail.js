import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";
import ImageLightbox from "./ImageLightbox";
import { MdClose } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    WhatsappIcon,
    TelegramIcon,

} from "react-share";

const productData = {
    1: {
        name: "Saree A",
        images: [
            "/silk/87654322/main.jpg",
            "/silk/87654322/pallu.jpg",
            "/silk/87654322/3.jpg",
            "/silk/87654322/4.jpg",
            "/silk/87654322/5.jpg",
        ],
    },
    2: {
        name: "Saree B",
        images: [
            "https://via.placeholder.com/400x400/ff7f7f/ffffff?text=Image+1",
            "https://via.placeholder.com/400x400/7f7fff/ffffff?text=Image+2",
        ],
    },
};

const imagesTemp = [
    { src: "/silk/87654322/main.jpg" },
    { src: "/silk/87654322/pallu.jpg" },
    { src: "/silk/87654322/3.jpg" },
    { src: "/silk/87654322/4.jpg" },
];


const ProductDetail = () => {
    const { id } = useParams();
    const product = productData[id];
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 10000); // Reset after 2 seconds
          })
          .catch(err => console.error("Failed to copy:", err));
      };
    

      const shareButtonbgcolor = {
        backgroundColor : isShareOpen ? "pink" : "#f4f4f4",
      }

    return (
        <div className="product-detail">
            {/* Left: Thumbnails */}
            <div className="product-detail-container">
                <div className="thumbnail-container">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                {/* Right: Large Image Preview */}
                <div className="product-image">
                    <img src={selectedImage} alt="Selected" className="large-image"
                        onClick={() => setIsOpen(true)}
                        style={{ cursor: "zoom-in" }} />

                </div>

                {isOpen && <ImageLightbox images={imagesTemp} isOpen={isOpen} setIsOpen={setIsOpen} />}

                <div className="product-description">
                    {isShareOpen && 
                        <div className="product-share">
                            <div className="product-share-left">
                                <div className="share-button">
                                    <WhatsappShareButton className="share-handle"
                                        url="https://www.google.com"
                                        title="Check out this saree on SareeShop">
                                        <WhatsappIcon  className="share-handle-icon"  round />
                                    </WhatsappShareButton>
                                </div>
                                <div className="share-button">
                                    <EmailShareButton className="share-handle"
                                        url="https://www.google.com"
                                        title="Check out this saree on SareeShop">
                                        <EmailIcon  className="share-handle-icon"  round />
                                    </EmailShareButton>
                                </div>
                                <div className="share-button">
                                    <FacebookShareButton className="share-handle"
                                        url="https://www.google.com"
                                        title="Check out this saree on SareeShop">
                                        <FacebookIcon  className="share-handle-icon" round />
                                    </FacebookShareButton>
                                </div>
                                <div className="share-button copy-link" onClick={()=>handleCopy()}>
                                   {copied ? "Copied!" : "Copy link"} 
                                </div>
                            </div>
                            <div className="product-share-right">
                                <MdClose 
                                    class = "cancel-button"
                                    onClick={()=>setIsShareOpen(!isShareOpen)}/>
                            </div>
                        </div>
                    }
                    <div className="titleDiv">
                        <p className="title">Green color silk saree with Golden Zari</p>
                        <div className="click-share-button" 
                            style={shareButtonbgcolor}
                            onClick={()=>setIsShareOpen(!isShareOpen)}
                            ><RiShareForwardFill/></div>
                        
                    </div>
                    

                    <hr className="grey-divider"></hr>
                    <p className="sku-code"><span className="bold">SKU: </span><span className="faded-font">BS202503010001</span></p>
                    <p className="sku-code faded-font">A silk saree is a traditional Indian garment made from luxurious silk fabric, known for its rich texture and elegant drape. It is often adorned with intricate weaving, embroidery, or zari work, making it a popular choice for weddings and festive occasions.</p>

                    <hr class="grey-divider"></hr>
                    <p className="h2">Specifications</p>
                    <p className="sku-code"><span className="bold product-description-item-width">Material </span><span class="faded-font tabs-3">Silk</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width">Weight </span><span class="faded-font tabs-3">750 gm</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width">Saree Size </span><span class="faded-font tabs-3">6 mts</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width">Blouse Size </span><span class="faded-font tabs-3">1 mtr</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width">Border </span><span class="faded-font tabs-3">Silk Blend</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width">Zari Type </span><span class="faded-font tabs-3">Half-Fine Zari</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width">Saree Colour </span><span class="faded-font tabs-3">Orange</span></p>
                    <p className="sku-code"><span className="bold product-description-item-width" >Blouse Color </span><span class="faded-font tabs-3">Orange</span></p>
                    <hr className="grey-divider"></hr>

                    {/* <div className="Demo__container">

                        <div className="Demo__some-network">
                            <WhatsappShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </div>
                        <div className="Demo__some-network">
                            <TelegramShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>
                        </div>
                        <div className="Demo__some-network">
                            <FacebookMessengerShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <FacebookMessengerIcon size={32} round />
                            </FacebookMessengerShareButton>
                        </div>

                        <div className="Demo__some-network">
                            <TwitterShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>

                        </div>
                        <div className="Demo__some-network">
                            <FacebookShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </div>
                        <div className="Demo__some-network">
                            <PinterestShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop" >
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                        </div>
                        <div className="Demo__some-network">
                            <LinkedinShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>
                        <div className="Demo__some-network">
                            <EmailShareButton className="Demo__some-network__share-button"
                                url="https://www.google.com"
                                title="Check out this saree on SareeShop">
                                <EmailIcon size={32} round />
                            </EmailShareButton>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
