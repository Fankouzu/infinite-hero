import promptConfig from '../prompt-config.json';

type PromptVariables = Record<string, string | number>;

export const getPrompt = (templateId: keyof typeof promptConfig, variables: PromptVariables): string => {
  let template = promptConfig[templateId];
  
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    template = template.replace(regex, String(value));
  });

  return template;
};
