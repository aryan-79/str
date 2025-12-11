import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Heading, HightlightText, NormalText } from '@/components/common/typography';
import { Card } from '@/components/ui/card';

export const contactInfo = [
  {
    title: 'Visit Us',
    add: ['Thamel, Kathmandu', 'Nepal, 44600'],
    icon: MapPin,
  },
  {
    title: 'Call Us',
    add: ['+977 9851233710', '+977 1 4123456'],
    icon: Phone,
  },
  {
    title: 'Email Us',
    add: ['info@summitadventures.com', 'bookings@summitadventures.com'],
    icon: Mail,
  },
  {
    title: 'Working Hours',
    add: ['Sun - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    icon: Clock,
  },
];

export function ContactUs() {
  return (
    <div>
      <div className='text-center mx-auto py-30 space-y-3'>
        <Heading className=''>
          <NormalText text='Get in' className='text-5xl md:text-7xl font-bold font-playfair' />
          <HightlightText text='Touch' className='text-5xl md:text-7xl font-bold font-playfair' />
        </Heading>

        <p className='text-sm md:text-xl text-muted-foreground'>
          Have questions about our tours? Want to plan a custom adventure? We're here to help make your dream trip a
          reality.{' '}
        </p>
      </div>

      <div className='container'>
        <div className='grid  sm:grid-cols-2  md:grid-cols-4 gap-4 mt-8 '>
          {contactInfo.map((value, index) => {
            const Icon = value.icon;

            return (
              <Card key={index} className='p-4 text-center gap-3'>
                <div className='flex justify-center'>
                  <Icon className='w-10 h-10 text-primary ' />
                </div>
                <h3 className='text-xl font-semibold'>{value.title}</h3>
                <p className='text-muted-foreground'>{value.add.join(' , ')}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
