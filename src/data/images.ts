// Free-to-use photos from Unsplash (unsplash.com/license).
// Replace these with RestoreLife's own photography when available.
const unsplash = (id: string, width = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=75&auto=format&fit=crop`;

export const IMAGES = {
  heroBowl: unsplash('1512621776951-a57141f2eefd', 1100),
  dietitian: unsplash('1559839734-2b71ea197ec2', 600),
  thali: unsplash('1546833999-b9f581a1996d', 900),
  idli: unsplash('1630383249896-424e482df921', 700),
  dosa: unsplash('1668236543090-82eba5ee5976', 700),
  chanaRice: unsplash('1516714435131-44d6b64dc6a2', 700),
  thaliDark: unsplash('1626777552726-4a6b54c97e46', 1200),
  vegFlatlay: unsplash('1490645935967-10de6ba17061', 900),
};

export const CONDITION_IMAGES: Record<string, string> = {
  diabetes: unsplash('1547592180-85f173990554', 700),
  weight: unsplash('1546069901-ba9599a7e63c', 700),
  pcos: unsplash('1610832958506-aa56368176cf', 700),
  'fatty-liver': unsplash('1498837167922-ddd27525d352', 700),
  'gut-health': unsplash('1505576399279-565b52d4ac71', 700),
  thyroid: unsplash('1494390248081-4e521a5940db', 700),
};
