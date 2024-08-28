import img from "../assets/img/img"

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-cont">
                <img src={img.iconNav} alt="" />
                <span> © 2024 One Piece</span>
            </div>
            <ul className="footer-ul-privacy">
                <li>Privacy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
            </ul>
        </footer>
    )
}
export default Footer