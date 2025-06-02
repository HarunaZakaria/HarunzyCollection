export default function Footer(){
    return (
        <div>
            
            <div className="row footer">
                <h2>Sales To 70% Off All Sandals On All Styles</h2>
                <div className="container">
                    <footer className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <div className="col mb-3  footer-content logo"> 
                            <h5>Harunzy Collection</h5>
                            <p>The best look anytime, anywhere.</p>
                        </div> 
                        <div className="col mb-3 footer-content"> 
                            <h5>Section</h5> 
                            <ul className="nav flex-column"> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li> 
                            </ul> 
                        </div> 
                        <div className="col mb-3 footer-content"> 
                            <h5>Section</h5> 
                            <ul className="nav flex-column"> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li> 
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li> 
                            </ul> 
                        </div> 
                        <div className="col mb-3 footer-content"> 
                            <form> 
                                <h5>Subscribe</h5> 
                                <p>Monthly digest of what's new and exciting from us.</p> 
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2"> 
                                    <label className="visually-hidden">Email address</label> 
                                    <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">SUBSCRIBE</button> 
                                </div> 
                            </form> 
                        </div>  
                    </footer>
                    <p className="col-md-4 copy ">&copy; 2025  Harunzy Collection</p>
                </div>  
            </div>
        </div>
    )
}