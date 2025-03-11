export const NewsLetter = () => {  
    return (
        <div className="newsletter">  
            <p className="title">Join our Newsletter</p>
            <p className="newsletter-text">Sign up for our e-mail to get latest news.</p>
            <div className="input-container">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
        )
}