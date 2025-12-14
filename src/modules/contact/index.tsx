import { zodResolver } from '@hookform/resolvers/zod';
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Heading, HightlightText, NormalText } from '@/components/common/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RoundedInput } from '@/components/ui/input';
import { TextareaRounded } from '@/components/ui/textarea';

export const contact = [
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
  const formSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.email('Invalid email address'),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters long'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
    subject: z.string().min(5, 'Subject must be at least 5 characters long'),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
      subject: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
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
          {contact.map((value, index) => {
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

      <div className='container grid md:grid-cols-2 gap-8 my-16'>
        <div className=' flex flex-col gap-6 '>
          <div className='flex gap-3 justify-center md:justify-start items-center mb-4'>
            <MessageSquare className='w-8 h-8 text-primary' />
            <div className=''>
              <h1 className='font-playfair text-3xl'>Send us Message</h1>
              <p className='text-gray-500'>We'll respond within 24 hours</p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='fullName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <RoundedInput placeholder='Enter full name ' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <RoundedInput placeholder='Enter your email ' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <RoundedInput placeholder='Enter your phone number ' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='subject'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <RoundedInput placeholder='Enter your subject ' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <TextareaRounded placeholder='Enter your message' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='px-5 py-4 rounded-full text-lg'>
                {' '}
                <Send />
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5272007596263!2d85.30862247451864!3d27.670096127135224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19849e63c8b9%3A0x3ad719441b230381!2sLCCI%20Global%20Qualifications%20pvt.ltd!5e0!3m2!1sen!2snp!4v1765694493728!5m2!1sen!2snp'
            className='size-full rounded-2xl'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='location'
          ></iframe>
        </div>
      </div>

      <FrequentlyAskedQuestions />
    </div>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <div className='container my-20'>
      <Heading className='text-center mb-10'>
        <NormalText text='Frequently Asked' className='text-2xl md:text-3xl font-bold font-playfair' />
        <HightlightText text='Questions' className='text-2xl md:text-3xl font-bold font-playfair' />
      </Heading>

      <div className='max-w-4xl mx-auto '>
        <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Product Information</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p>
                Our flagship product combines cutting-edge technology with sleek design. Built with premium materials,
                it offers unparalleled performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an intuitive user interface designed for both
                beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Shipping Details</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p>
                We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days,
                while express shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your shipment in real-time through our
                dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p>
                We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely
                satisfied, simply return the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and full refunds processed within 48 hours
                of receiving the returned item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
