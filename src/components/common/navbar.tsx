import { Link } from '@tanstack/react-router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const destinations = [
  {
    title: 'Nepal',
    description: 'You can checkout packages available in Nepal here.',
    href: '/',
  },
  {
    title: 'Bhutan',
    description: 'You can checkout packages available in Bhutan here.',
    href: '/',
  },
  {
    title: 'Tibet',
    description: 'You can checkout packages available in Tibet here.',
    href: '/',
  },
];

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className='text-red-600 leading-none font-medium'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <div className='container sticky top-2 z-50 bg-background p-4'>
      <div className='flex justify-between items-center'>
        <Link to='/' className='text-3xl'>
          Logo
        </Link>

        {!isMobile ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid md:grid-cols-2 gap-4 min-w-[min(98vw,500px)] p-4'>
                    {destinations.map((destination, index) => (
                      <ListItem key={index} title={destination.title} href={destination.href}>
                        {destination.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid md:grid-cols-2 gap-4 min-w-[min(98vw,500px)] p-4'>
                    {destinations.map((destination, index) => (
                      <ListItem key={index} title={destination.title} href={destination.href}>
                        {destination.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to='/about'>About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to='/contact'>Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <MobileNav />
        )}
        {!isMobile && (
          <Button asChild>
            <Link to='/'>Book Now</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

function MobileNav() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <Button variant='ghost'>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='flex items-center justify-between gap-4'>
            <span className='text-lg'>Menu</span>
            <DrawerClose asChild>
              <Button variant='ghost'>
                <X />
              </Button>
            </DrawerClose>
          </DrawerTitle>
          <DrawerDescription className='sr-only'>Menu</DrawerDescription>
        </DrawerHeader>

        <div className='flex gap-2 pl-4 pr-6'>
          <Collapsible className='w-full'>
            <CollapsibleTrigger className='w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-accent transition-colors group'>
              <span className='text-base font-medium'>Destinations</span>
              <ChevronDown className='h-4 w-4 transition-transform group-data-[state=open]:rotate-180' />
            </CollapsibleTrigger>
            <CollapsibleContent className='pt-2'>
              <ul className='space-y-1 ml-2'>
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <Link
                      to={destination.href}
                      className='block py-2 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'
                    >
                      <div className='font-medium text-sm'>{destination.title}</div>
                      <p className='text-xs text-muted-foreground mt-0.5'>{destination.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
