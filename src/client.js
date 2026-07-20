import { createClient } from '@supabase/supabase-js';
const URL = 'https://yfajlkzrrbcrnwnbbzbq.supabase.co';
const API_KEY = 'sb_publishable_J0pd6-tMGh4W-sIN4XjRcg_HP9xz1gw';
export const supabase = createClient(URL, API_KEY);