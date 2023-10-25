export function getFirstTwoNumbers(zipCode) {
  // Convertit le code postal en chaîne (au cas où il ne le serait pas déjà)
  const zipString = String(zipCode);

  // Retourne les deux premiers caractères
  return zipString.substring(0, 2);
}
