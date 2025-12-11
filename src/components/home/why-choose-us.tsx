import { Award, BadgeCheck, CreditCard, Headphones, Leaf, MapPin } from 'lucide-react';
import { Heading, HightlightText, NormalText } from '../common/typography';

type Props = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};
const iconMap: Record<string, React.ReactNode> = {
  experience: <Award className='w-10 h-10 text-primary' />,
  guide: <MapPin className='w-10 h-10 text-primary' />,
  price: <BadgeCheck className='w-10 h-10 text-primary' />,
  support: <Headphones className='w-10 h-10 text-primary' />,
  sustainable: <Leaf className='w-10 h-10 text-primary' />,
  payment: <CreditCard className='w-10 h-10 text-primary' />,
};

export const features = [
  {
    title: '18+ Years Experience',
    description: 'Two decades of expertise organizing unforgettable Himalayan adventures with proven safety records.',
    icon: 'experience',
  },
  {
    title: 'Expert Local Guides',
    description: 'Certified Nepali guides who know every trail, village, and hidden gem in the mountains.',
    icon: 'guide',
  },
  {
    title: 'Best Price Guarantee',
    description: 'Find a lower price elsewhere? We’ll match it and give you an additional 5% discount.',
    icon: 'price',
  },
  {
    title: '24/7 Support',
    description: "Round-the-clock assistance before, during, and after your adventure. We're always here.",
    icon: 'support',
  },
  {
    title: 'Sustainable Travel',
    description: 'Committed to eco-friendly practices and supporting local communities responsibly.',
    icon: 'sustainable',
  },
  {
    title: 'Flexible Payments',
    description: 'Secure online payments with options to pay in installments. Cancel free up to 30 days.',
    icon: 'payment',
  },
];

export function WhyChooseUs() {
  return (
    <div className='container'>
      <div className='text-center space-y-2'>
        <p className='uppercase text-primary font-xs'>Why Choose Us</p>

        <Heading className='text-center font-semibold'>
          <NormalText text='Why Book With' />
          <HightlightText text='Summit Adventures' className='text-secondary' />
        </Heading>

        <p className='text-muted-foreground'>
          We don't just organize trips—we craft life-changing experiences with safety, sustainability, and satisfaction
          at the core.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-8'>
        {features.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} icon={iconMap[item.icon]} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, description, icon }: Props) {
  return (
    <div className='p-4 border-2 m-3'>
      {icon} <h3 className='font-semibold text-lg mt-2'>{title}</h3>
      <p className='text-muted-foreground mt-2'>{description}</p>
    </div>
  );
}
