import { supabase } from "../utils/supabase";

export const signOut = () => supabase.auth.signOut();

export const login = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

export const resetPassword = (email: string) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:8080/",
  });
