/** Builds the email at runtime to prevent scraper harvesting from static bundles */
export function getContactEmail(): string {
  const parts = ['ortzat1', 'gmail', 'com'];
  return `${parts[0]}@${parts[1]}.${parts[2]}`;
}
