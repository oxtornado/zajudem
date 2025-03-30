import './lastSection.css'
import Button from '../button/button'

function lastSection() {
    return (
        <>
        <div className="lastSection">
            <div className="bigPhrase">
                <h1>Apostemos por formacion de calidad</h1>
                <div className="lastSectionButton">
                    <Button />
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h3>Senasec Inc. 2025</h3>
                </div>
                <div className="footer-right">
                    <a href="#">Email</a>
                    <a href="#">Github</a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default lastSection