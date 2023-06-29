export default function Footer() {

    const currentYear = new Date().getFullYear();
    
        return(
        <footer>
            <div className="footerFlex">
            <p>&copy; {currentYear}</p>
            </div>
            <p><a href = 'https://github.com/'>Github</a></p>
        </footer>
        );
    }
