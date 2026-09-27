/** Mesaj și culoare în funcție de procent. */
export function gradeFor(percent: number): { title: string; message: string; color: string } {
  if (percent >= 90)
    return { title: 'Excelent!', message: 'Stăpânești foarte bine modulul.', color: 'var(--color-success)' };
  if (percent >= 70)
    return { title: 'Foarte bine!', message: 'Mai recitește explicațiile la ce ai greșit.', color: 'var(--color-success)' };
  if (percent >= 50)
    return { title: 'Nu e rău', message: 'Ai bazele, mai exersează puțin.', color: 'var(--color-warning)' };
  return { title: 'Mai încearcă', message: 'Parcurge explicațiile de mai jos și reia testul.', color: 'var(--color-danger)' };
}
