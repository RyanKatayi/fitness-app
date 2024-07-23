import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qyibvwcgrdqrplfuamtr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aWJ2d2NncmRxcnBsZnVhbXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzI5OTYsImV4cCI6MjAxNDg0ODk5Nn0.HNt2B4ts8w1ZuRLz6Wmeq4LWW_AF0ee5lCXUtGnrK-E';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
