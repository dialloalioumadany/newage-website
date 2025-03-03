import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const links = [
    { href: 'https://discord.com', icon: <FaDiscord /> },
    { href: 'https://x.com', icon: <FaTwitter /> },
    { href: 'https://instagram.com', icon: <FaInstagram /> },
    { href: 'https://facebook.com', icon: <FaFacebook /> },
]

const Footer = () => {
  return (
    <footer className='w-screen bg-white py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; New Age 2025. Tous droits réservés
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {
                    links.map((link) => (
                        <a 
                            key={link} 
                            href={link.href} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='text-black transition-colors duration-500 ease-in-out hover:text-violet-300'
                        >
                            {link.icon}
                        </a>
                    ))}
            </div>

            <a 
                href="#privacy-policy"
                className='text-center text-sm hover:underline md:text-right'
            >
                Politique de confidentialité
            </a>
        </div>
    </footer>
  )
}

export default Footer