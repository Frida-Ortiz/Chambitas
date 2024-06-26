// src/app/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient,AuthResponse } from '@supabase/supabase-js';
import { environment } from '../evironments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseAnonKey = environment.supabaseAnonKey;
  private supabase!: SupabaseClient;

  constructor() {
    console.log("Initializing Supabase Service...");
    try {
      this.supabase = createClient(this.supabaseUrl, this.supabaseAnonKey);
      console.log("Supabase initialized successfully:", this.supabase);
    } catch (error) {
      console.error("Error initializing Supabase:", error);
    }
  }


  async signUp(email: string, password: string): Promise<AuthResponse> {
    const response: AuthResponse = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });
    return response;
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    const response: AuthResponse = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return response;
  }


  get client(): SupabaseClient {
    return this.supabase;
  }

}
