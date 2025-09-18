/**
 * Global type definitions for OllamaLab application
 * This file contains all shared types and interfaces
 */

// Application Configuration Types
export interface AppConfig {
  name: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  apiBaseUrl: string;
}

// Dependency Information Types
export interface DependencyInfo {
  name: string;
  version: string;
  description: string;
  category?: 'core' | 'ui' | 'utility' | 'development';
  homepage?: string;
  license?: string;
}

// Tool Types for OllamaLab functionality
export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  isActive: boolean;
  implementation?: () => Promise<void>;
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  tools: Tool[];
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

// User Interface Types
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'auto';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface UserPreferences {
  theme: ThemeConfig;
  language: string;
  notifications: boolean;
  autoSave: boolean;
}

// Error Handling Types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// Navigation Types
export interface Route {
  path: string;
  name: string;
  component: React.ComponentType;
  isProtected?: boolean;
  roles?: string[];
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Environment Variables
declare global {
  const __APP_VERSION__: string;
}