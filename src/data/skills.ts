// Habilidades agrupadas por categoria.
// Campos traduzíveis aceitam uma string única ou { pt: '...', en: '...' }.
import { tr, type Lang, type Text } from '../i18n';

const skills: { category: Text; items: Text[] }[] = [
  {
    category: { pt: 'Desenvolvimento', en: 'Development' },
    items: ['Java', 'Angular', 'TypeScript', 'Node.js', 'C#'],
  },
  { category: { pt: 'Dados', en: 'Data' }, items: ['SQL Oracle', 'Databricks', 'Power BI'] },
  { category: { pt: 'Ferramentas', en: 'Tools' }, items: ['Git', 'GitHub'] },
  {
    category: { pt: 'Fundamentos', en: 'Fundamentals' },
    items: [
      { pt: 'Lógica de programação', en: 'Programming logic' },
      { pt: 'Redes', en: 'Networking' },
      { pt: 'Análise de processos', en: 'Process analysis' },
    ],
  },
];

export function getSkills(lang: Lang) {
  return skills.map((group) => ({
    category: tr(group.category, lang),
    items: group.items.map((item) => tr(item, lang)),
  }));
}
