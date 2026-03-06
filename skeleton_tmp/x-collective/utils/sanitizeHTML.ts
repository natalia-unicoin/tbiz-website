export const sanitizeHTML = async (dirtyHTML: string): Promise<string> => {
  if (typeof window === 'undefined') return '';
  const DOMPurifyModule = await import('dompurify');
  return DOMPurifyModule.default.sanitize(dirtyHTML);
};
