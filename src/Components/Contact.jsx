import NavBar from "./NavBar";
export default function Contact(){
    return(
        <div>
            <NavBar />
            <form>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 form-check">
                <textarea name="messsage" placeholder="Your Message" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}