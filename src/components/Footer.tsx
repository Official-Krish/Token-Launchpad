import { Instagram, Linkedin, X } from "lucide-react";

function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-3 md:p-5 border-t border-[#27272a]">
            <h3 className="text-center text-white spacing tracking-widest">
            Designed & Developed by <a className="underline font-bold" target="_blank" href="" rel="noreferrer">Krish Anand</a>
            </h3>
            <div className="flex items-center justify-end gap-3">
                <a href="https://www.linkedin.com/in/"><Linkedin /></a>
                <a href="https://www.instagram.com/"><Instagram /></a>
                <a href="https://x.com/"><X /></a>
            </div>
        </footer>
    )
}
export default Footer;