import { Mail, MapPin, Phone } from 'lucide-react';
import { companyName } from '@/lib/constants/company';

export function Footer() {
  return (
    <footer className='bg-cta text-white'>
      <div className='mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16'>
        <div className='grid gap-12 lg:grid-cols-[1.5fr_2fr] lg:gap-16'>
          <div className='space-y-6'>
            <div className='max-w-24'>
              <img src='/des.jpg' alt='Summit Adventures logo' className='w-full' />
            </div>
            <p className='text-sm leading-relaxed text-white/90 max-w-sm'>
              Your trusted partner for Himalayan adventures since 2006. Experience the magic of mountains with expert
              guides.
            </p>

            <div className='space-y-3 pt-2'>
              <div className='flex gap-3 items-start'>
                <MapPin className='text-secondary mt-0.5 shrink-0' size={18} />
                <p className='text-sm text-white/90'>Thamel, Kathmandu, Nepal</p>
              </div>
              <div className='flex gap-3 items-center'>
                <Phone className='text-secondary shrink-0' size={18} />
                <a href='tel:+9779851233710' className='text-sm text-white/90 hover:text-secondary transition-colors'>
                  +977 9851233710
                </a>
              </div>
              <div className='flex gap-3 items-center'>
                <Mail className='text-secondary shrink-0' size={18} />
                <a
                  href='mailto:supertreks@gmail.com'
                  className='text-sm text-white/90 hover:text-secondary transition-colors'
                >
                  supertreks@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4'>
            <div>
              <h3 className='font-semibold text-white mb-4'>Destinations</h3>
              <ul className='space-y-2.5'>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Nepal
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Bhutan
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Tibet
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    India
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    China
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-white mb-4'>Popular Treks</h3>
              <ul className='space-y-2.5'>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Everest Base Camp
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Annapurna Circuit
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Langtang Valley
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Manaslu Circuit
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Upper Mustang
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-white mb-4'>Company</h3>
              <ul className='space-y-2.5'>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-white mb-4'>Support</h3>
              <ul className='space-y-2.5'>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Booking Guide
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-white/80 hover:text-secondary transition-colors'>
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-white/20'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/70'>
            <p className='leading-relaxed'>© 2025 {companyName}. All rights reserved.</p>
            <div className='flex flex-col gap-1 sm:text-right'>
              <p>Licensed by Nepal Tourism Board</p>
              <p>Member of TAAN</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
