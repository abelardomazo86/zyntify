import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Present' : 'Missing');

// Disable Supabase for in-memory auth mode
console.warn('Using in-memory authentication - Supabase disabled');

export const supabase = null;

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          role: 'super_admin' | 'customer' | 'company_user' | 'affiliate_partner'
          business_name?: string
          business_owner?: string
          website?: string
          facebook?: string
          linkedin?: string
          onboarding_completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name: string
          role?: 'super_admin' | 'customer' | 'company_user' | 'affiliate_partner'
          business_name?: string
          business_owner?: string
          website?: string
          facebook?: string
          linkedin?: string
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'super_admin' | 'customer' | 'company_user' | 'affiliate_partner'
          business_name?: string
          business_owner?: string
          website?: string
          facebook?: string
          linkedin?: string
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}