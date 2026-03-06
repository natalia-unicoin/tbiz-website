'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'tbiz' | 'light' | 'safebets' | 'glass';

interface ThemeContextType {
    activeTheme: ThemeMode;
    setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
    // Definimos el estado inicial
    const [activeTheme, setActiveThemeState] = useState<ThemeMode>('tbiz');
    const [mounted, setMounted] = useState(false);

    // Evitamos problemas de hydratación asegurándonos de que corre en el cliente
    useEffect(() => {
        setMounted(true);
    }, []);

    const setTheme = (mode: ThemeMode) => {
        // Disabled for TBIZ single theme structure
    };

    // Remove the early return so the Provider is always in the tree on the server to prevent context errors.
    // Ensure we don't cause hydration mismatch by rendering default theme server-side.
    return (
        <ThemeContext.Provider value={{ activeTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProviderWrapper');
    }
    return context;
};
