const Footer = () => {
    return (
        <div className="bg-orange-500 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-tight">
                    RiyyaEats.com
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    )

}

export default Footer;

//container mx-auto - everything aligns regardless of the size of the screen
//md:flex-row for larger screen, we want the content in a row
//justify-between there is gap between the footer components and it will send those to the edges
// flex gap-4 there is nice spacing between the links