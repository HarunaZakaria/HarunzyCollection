export default function Footer(){
    return (
        <div>
            <h2>Sales To 70% Off All Sandals On All Styles</h2>
            <div className="row">
                <div className="container">
                    <footer class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <div class="col mb-3"> 
                            <p class="col-md-4 mb-0 text-body-secondary">&copy; 2025  Harunzy Collection</p> 
                        </div> 
                        <div class="col mb-3"> <h5>Section</h5> 
                            <ul class="nav flex-column"> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> 
                            </ul> 
                        </div> 
                        <div class="col mb-3"> 
                            <h5>Section</h5> 
                            <ul class="nav flex-column"> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li> 
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> 
                            </ul> 
                        </div> 
                        <div class="col mb-3"> 
                            <form> 
                                <h5>Subscribe</h5> 
                                <p>Monthly digest of what's new and exciting from us.</p> 
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2"> 
                                    <label for="newsletter1" class="visually-hidden">Email address</label> 
                                    <input id="newsletter1" type="email" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">SUBSCRIBE</button> 
                                </div> 
                            </form> 
                        </div>
                       
                    </footer>
                </div>
                
            </div>
        </div>
    )
}