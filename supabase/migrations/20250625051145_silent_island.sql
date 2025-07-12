/*
  # Fix role constraint to match database schema

  1. Updates
    - Fix role constraint to use 'affiliate_partner' instead of 'affiliate_user'
    - Ensure consistency with the existing database schema
*/

-- Update the role constraint to match the existing database schema
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_role_check;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_role_check 
CHECK (role IN ('super_admin', 'customer', 'company_user', 'affiliate_partner'));