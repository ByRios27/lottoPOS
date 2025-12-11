export interface Sorteo {
  id: string; // ID del documento de Firestore
  name: string;
  logoUrl: string; // URL de la imagen en Firebase Storage
  cost: number;
  closingTime: string; // Formato HH:mm
  active: boolean;
}
