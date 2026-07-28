/**
 * Formata datas do frontmatter (YYYY-MM-DD) sem erro de fuso:
 * força o parse como horário local ao meio-dia.
 */
export function formatDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
