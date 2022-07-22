import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const public_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZmV2cmdsandzZGlqa2lqY3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg0Mzg3ODYsImV4cCI6MTk3NDAxNDc4Nn0.K5L_SG1aFDqIjQud6xw_H73oxDK8Uz5-6dSoroFj0RU';
export const supabase = createClient('https://rdfevrgljwsdijkijcur.supabase.co', public_key);

// export const authApp = getAuth(firebaseApp);
