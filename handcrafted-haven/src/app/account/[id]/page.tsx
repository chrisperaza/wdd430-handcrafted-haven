import { Metadata } from 'next';

// TODO: Add authentication check. If the user logged and is not the same as the one in the URL, redirect to the logged user account page. (uSE COOKIE SESSION, example in the auth.ts file)
// TODO: Display name, email, password (change password?)
// If the user is seller, then show story (db story in a textarea with a button bellow of submit)

export const metadata: Metadata = {
  title: 'Account',
};

export default function Page() {
  return (
    <h1>Account</h1>
  );
}
