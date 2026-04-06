const Footer = () => {
    return(
        <footer className="bg-emblem-blue text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>Brand Info</div>
                <div>Quick Links</div>
                <div>Socials</div>
            </div>
            <div className="flex h-2 mt-8">
                <div className="flex-1 bg-ethio-green"></div>
                <div className="flex-1 bg-ethio-yellow"></div>
                <div className="flex-1 bg-ethio-red"></div>
            </div>
        </footer>
    );
};

export default Footer;