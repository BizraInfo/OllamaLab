/**
 * Application configuration and constants
 * Centralized configuration management for OllamaLab
 */

import { AppConfig, Tool } from '@/types';

// Application Configuration
export const APP_CONFIG: AppConfig = {
  name: 'OllamaLab',
  version: '1.0.0',
  environment: (import.meta.env.MODE as 'development' | 'staging' | 'production') || 'development',
  apiBaseUrl: import.meta.env['VITE_API_BASE_URL'] || 'http://localhost:3000/api',
};

// Tool definitions based on the repository README
export const OLLAMA_TOOLS: Tool[] = [
  {
    id: 'summarize',
    name: 'Summarize',
    description: 'Summarizes text content or documents',
    category: 'Text Processing',
    icon: '📄',
    isActive: false,
  },
  {
    id: 'translate',
    name: 'Translate',
    description: 'Translates text between languages',
    category: 'Language',
    icon: '🌐',
    isActive: false,
  },
  {
    id: 'chat',
    name: 'Chat',
    description: 'Engages in conversational interactions with models',
    category: 'Communication',
    icon: '💬',
    isActive: false,
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Composes and formats emails',
    category: 'Communication',
    icon: '📧',
    isActive: false,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Assists in creating and managing LinkedIn posts and messages',
    category: 'Social Media',
    icon: '💼',
    isActive: false,
  },
  {
    id: 'tutorial',
    name: 'Tutorial',
    description: 'Provides step-by-step guides and tutorials on various topics',
    category: 'Education',
    icon: '📚',
    isActive: false,
  },
  {
    id: 'code',
    name: 'Code',
    description: 'Generates code snippets or assists with programming tasks',
    category: 'Development',
    icon: '💻',
    isActive: false,
  },
  {
    id: 'search',
    name: 'Search',
    description: 'Searches for information or resources online',
    category: 'Information',
    icon: '🔍',
    isActive: false,
  },
  {
    id: 'image',
    name: 'Image',
    description: 'Processes and analyzes images',
    category: 'Media',
    icon: '🖼️',
    isActive: false,
  },
  {
    id: 'event-calendar',
    name: 'Event Calendar',
    description: 'Manages and schedules events and reminders',
    category: 'Productivity',
    icon: '📅',
    isActive: false,
  },
  {
    id: 'gantt-chart',
    name: 'Gantt Chart',
    description: 'Creates and manages Gantt charts for project planning',
    category: 'Project Management',
    icon: '📊',
    isActive: false,
  },
  {
    id: 'task-planner',
    name: 'Task Planner',
    description: 'Helps in planning and organizing tasks',
    category: 'Productivity',
    icon: '✅',
    isActive: false,
  },
];

// UI Constants
export const UI_CONSTANTS = {
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  ANIMATION_DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },
  Z_INDEX: {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
  },
} as const;

// API Configuration
export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Feature flags for progressive enhancement
export const FEATURE_FLAGS = {
  ENABLE_PWA: true,
  ENABLE_OFFLINE_MODE: true,
  ENABLE_ANALYTICS: false,
  ENABLE_ERROR_REPORTING: true,
  ENABLE_PERFORMANCE_MONITORING: true,
} as const;

// Theme configuration
export const THEME_CONFIG = {
  DEFAULT_THEME: 'light' as const,
  STORAGE_KEY: 'ollama-lab-theme',
  SYSTEM_THEME_MEDIA_QUERY: '(prefers-color-scheme: dark)',
} as const;