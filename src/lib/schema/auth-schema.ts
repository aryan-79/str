import z from 'zod';

export const UserLoginSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid Email' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .refine(
        (password) =>
          /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[^A-Za-z\d]/.test(password),
        {
          message:
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
        },
      ),
  }),
});

export enum EGender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export const UserCreateSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export const UserSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Full Name must be at least 2 characters long' }),
    nationality: z.string().length(2, 'Please Enter a valid nationality'),
    dateOfBirth: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format. Please use 'YYYY-MM-DD'" })
      .refine(
        (date) => {
          const dob = new Date(date);
          const today = new Date();
          const fiveYearsAgo = new Date(today.setFullYear(today.getFullYear() - 5));
          return dob < fiveYearsAgo;
        },
        { message: 'You must be atleast 5 years to register as a user.' },
      ),
    email: z.string().email({ message: 'Invalid email format' }),
    phone: z.string().regex(/^([+]?\d{1,3}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/, { message: 'Invalid phone number' }),
    secondaryPhone: z
      .string()
      .regex(/^([+]?\d{1,3}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/, { message: 'Invalid phone number' }),
    secondaryEmail: z.string().email({ message: 'Invalid email format' }),
    isEmailVerified: z.boolean({ message: 'Must be a boolean value' }),
    isPhoneVerified: z.boolean({ message: 'Must be a boolean value' }),
    isBlocked: z.boolean({ message: 'Must be a boolean value' }),
    address: z.string().min(3, { message: 'Agency Address must be at least 3 characters long' }),
    gender: z.nativeEnum(EGender, { message: 'Please enter a valid gender' }),
  })
  .extend({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .refine(
        (password) =>
          /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[^A-Za-z\d]/.test(password),
        {
          message:
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
        },
      ),
  });
