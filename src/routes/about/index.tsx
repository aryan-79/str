import { createFileRoute } from '@tanstack/react-router';
import { Eye, Focus, Leaf, Mountain, ShieldCheck, Users } from 'lucide-react';
import { CTA } from '@/components/common/cta';
import { Heading, HightlightText, NormalText } from '@/components/common/typography';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { companyDescription, companyName, companyStats, teamMembers } from '@/lib/constants/company';

export const coreValues = [
  {
    title: 'Passion for Adventure',
    description: 'We live and breathe the mountains. Our love for the Himalayas drives everything we do.',
    icon: Mountain,
  },
  {
    title: 'Community First',
    description: 'We employ local guides and porters, supporting communities in remote mountain regions.',
    icon: Users,
  },
  {
    title: 'Sustainable Tourism',
    description: 'We minimize our environmental impact and promote responsible travel practices.',
    icon: Leaf,
  },
  {
    title: 'Excellence & Safety',
    description: 'Safety is our top priority. Our guides are certified and equipped for any situation.',
    icon: ShieldCheck,
  },
];
export const Route = createFileRoute('/about/')({
  component: AboutUs,
});

function StatsCard({ value, label }: { value: string; label: string }) {
  return (
    <div className='border rounded-xl p-10 text-center shadow-sm'>
      <h2 className='text-4xl font-playfair text-primary font-semibold'>{value}</h2>
      <p className='mt-2 text-muted-foreground'>{label}</p>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <div className='text-center mx-auto py-30 space-y-3'>
        <Heading className=''>
          <NormalText text='About' className=' text-5xl md:text-7xl font-bold font-playfair' />
          <HightlightText text={companyName} className=' text-5xl md:text-7xl font-bold font-playfair' />
        </Heading>

        <p className='  text-sm md:text-xl text-muted-foreground'>
          Your trusted partner for Himalayan adventures since 2016
        </p>
      </div>

      <div className='container grid lg:grid-cols-2 gap-10 my-20'>
        <div className='space-y-3'>
          <p className=' uppercase text-primary text-sm'>Our Story</p>
          <h1 className='text-3xl font-playfair'>Born in the Mountains, Driven by Passion</h1>

          {companyDescription.story.map((para, index) => (
            <p key={index} className='text-muted-foreground'>
              {para}
            </p>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {companyStats.map((stat, index) => (
            <StatsCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-10 my-20 container'>
        <Card className='p-6'>
          <Button variant='outline' size='icon-lg' className='size-14'>
            <Focus className='size-8 text-primary ' />
          </Button>

          <h1 className='text-2xl font-bold'>Our Mission</h1>
          <p className='text-muted-foreground'>
            To provide safe, authentic, and transformative Himalayan experiences that inspire a deep connection with
            nature and culture, while supporting local communities and preserving the environment for future
            generations.
          </p>
        </Card>
        <Card className='p-6'>
          <Button variant='outline' size='icon-lg' className='size-14'>
            <Eye className='size-8 text-secondary' />
          </Button>
          <h1 className='text-2xl font-bold'>Our Vision</h1>
          <p className='text-muted-foreground'>
            To be the world's most trusted and sustainable adventure company in the Himalayas, setting the standard for
            responsible tourism while making mountain experiences accessible to adventurers of all backgrounds and
            abilities.
          </p>
        </Card>
      </div>

      <div className='container'>
        <div className='space-y-3'>
          <p className='uppercase text-primary text-sm'>What Drives Us</p>
          <Heading>
            <NormalText text='Our' className='font-semibold text-3xl' />
            <HightlightText text='Core Values' className='font-semibold text-3xl' />
          </Heading>
        </div>
        <div className='grid  sm:grid-cols-2  md:grid-cols-4 gap-4 mt-8 '>
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className='p-4 text-center gap-3'>
                <div className='flex justify-center'>
                  <Icon className='w-10 h-10 text-primary ' />
                </div>
                <h3 className='text-xl font-semibold'>{value.title}</h3>
                <p className='text-muted-foreground'>{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
      <TeamSection />
      <CTA />
    </div>
  );
}

function TeamSection() {
  return (
    <div className='container my-20'>
      <div className='text-center space-y-2'>
        <p className='uppercase text-primary font-xs'>Meet our Expert</p>

        <Heading className='text-center font-semibold '>
          <NormalText text='Our Dedicated' />
          <HightlightText text='Team Members' className='text-secondary' />
        </Heading>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
        {teamMembers.map((member, index) => (
          <div key={index} className='flex flex-col items-center space-y-4 border-2 p-4 rounded-xl bg-white'>
            <img src={member.image} alt={member.name} className='w-32 h-32 rounded-full object-cover' />

            <div className='text-center space-y-1'>
              <h3 className='font-semibold text-lg text-primary'>{member.name}</h3>
              <p className='text-sm text-secondary'>{member.role}</p>
              <p className='text-center'>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
