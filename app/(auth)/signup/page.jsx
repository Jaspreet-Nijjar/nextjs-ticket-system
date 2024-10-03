'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import AuthForm from '../AuthForm';

const SignUp = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signup({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
    }
  };

  return (
    <main>
      <h2 className="text-center">Sign Up</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
};

export default SignUp;
