/*
  # Create Sample Users for Testing

  1. Updates
    - Fix role constraint to include 'affiliate_user' instead of 'affiliate_partner'
    - Create sample users for each role type

  2. Sample Users
    - Super Admin: mazter3000@gmail.com
    - Customer: customerone@amsyper.com  
    - Company User: manager@amsyper.com
    - Affiliate Partner: affiliate@amsyper.com

  3. Security
    - Maintains existing RLS policies
    - Users can only access their own data
*/

-- Update the role constraint to match the requested roles
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_role_check;

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_role_check 
CHECK (role IN ('super_admin', 'customer', 'company_user', 'affiliate_user'));

-- Note: The actual user creation will be done through the auth system
-- This migration just ensures the database schema supports the roles