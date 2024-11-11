/*

import * as v from 'valibot';

const Schema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

const result = v.safeParse(Schema, {
  email: 'jane@example.com',
  password: '12345678',
});

console.log(result);


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

const Schemaa = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(
    v.string(),
    v.minLength(8), // Minimum length of 8
    v.regex(passwordPattern, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
  ),
});

// Testing the schema
const results = v.safeParse(Schemaa, {
  email: 'jadne@example.com',
  password: 'Passdword', // This should pass validation
});

if (result.success) {
  console.log('Validation successful');
} else {
  console.error('Validation failed', results.issues);
}


console.log(results);

*/
