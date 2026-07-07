export interface Product {
  id: string;
  name: string;
  composition: string;
  mrp: number;
  pricePerStrip: number;
  stripSize: number;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'ESORIK-D CAPS',
    composition: 'Esomeprazole 40mg + Domperidone 30mg',
    mrp: 108,
    pricePerStrip: 108,
    stripSize: 10,
    category: 'Capsule',
    description: 'For acid reflux and GERD',
    image: 'https://images.unsplash.com/photo-1704662451911-198af41df592?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-002',
    name: 'CEFNIK-200LB TAB',
    composition: 'Cefixime 200mg + Lactobacillus',
    mrp: 180,
    pricePerStrip: 180,
    stripSize: 10,
    category: 'Tablet',
    description: 'Antibiotic with probiotic',
    image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-003',
    name: 'MONTARIK-LC TAB',
    composition: 'Montelukast 10mg + Levocetirizine 5mg',
    mrp: 135,
    pricePerStrip: 135,
    stripSize: 10,
    category: 'Tablet',
    description: 'For allergies and asthma',
    image: 'https://images.unsplash.com/photo-1622147459102-8a0f3727e4c4?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-004',
    name: 'CALZINRIK-D3 TAB',
    composition: 'Calcium Carbonate + Vitamin D3',
    mrp: 120,
    pricePerStrip: 120,
    stripSize: 15,
    category: 'Tablet',
    description: 'Calcium and Vitamin D supplement',
    image: 'https://images.unsplash.com/photo-1668453569370-789848f41ebe?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-005',
    name: 'CDM-60K SACHET',
    composition: 'Cholecalciferol 60000 IU',
    mrp: 38,
    pricePerStrip: 38,
    stripSize: 4,
    category: 'Sachet',
    description: 'Vitamin D3 supplement',
    image: 'https://images.unsplash.com/photo-1630094539356-db820e921e83?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-006',
    name: 'BIORIK PRO CAPS',
    composition: 'Probiotic Complex',
    mrp: 150,
    pricePerStrip: 150,
    stripSize: 10,
    category: 'Capsule',
    description: 'Gut health supplement',
    image: 'https://images.unsplash.com/photo-1761361414308-b1b683d1f33a?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-007',
    name: 'OFLARIK-200 TAB',
    composition: 'Ofloxacin 200mg',
    mrp: 69,
    pricePerStrip: 69,
    stripSize: 10,
    category: 'Tablet',
    description: 'Antibiotic for bacterial infections',
    image: 'https://images.unsplash.com/photo-1771526680240-78ea84ff336e?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-008',
    name: 'RIKVITA SYRUP',
    composition: 'Multivitamin & Minerals',
    mrp: 159.80,
    pricePerStrip: 159.80,
    stripSize: 1,
    category: 'Syrup',
    description: 'Complete nutritional supplement (200ml bottle)',
    image: 'https://images.unsplash.com/photo-1700104494865-200e961d942c?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-009',
    name: 'CEFNIK-O DRY SYRUP',
    composition: 'Cefixime 50mg/5ml',
    mrp: 96,
    pricePerStrip: 96,
    stripSize: 1,
    category: 'Syrup',
    description: 'Antibiotic suspension for children (30ml bottle)',
    image: 'https://images.unsplash.com/photo-1700104494908-a08588182134?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-010',
    name: 'CEFNIK-O TAB',
    composition: 'Cefixime 200mg + Ofloxacin 200mg',
    mrp: 225,
    pricePerStrip: 225,
    stripSize: 10,
    category: 'Tablet',
    description: 'Combination antibiotic',
    image: 'https://images.unsplash.com/photo-1704661780161-f272ea486ca5?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-011',
    name: 'AZIRIK-250 TAB',
    composition: 'Azithromycin 250mg',
    mrp: 78.21,
    pricePerStrip: 78.21,
    stripSize: 6,
    category: 'Tablet',
    description: 'Antibiotic for respiratory infections',
    image: 'https://images.unsplash.com/photo-1624362772755-4d5843e67047?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-012',
    name: 'AZIRIK-500 TAB',
    composition: 'Azithromycin 500mg',
    mrp: 72,
    pricePerStrip: 72,
    stripSize: 5,
    category: 'Tablet',
    description: 'High-strength antibiotic',
    image: 'https://images.unsplash.com/photo-1606940743881-b33f4b04d661?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-013',
    name: 'COFRIK-D SYRUP',
    composition: 'Dextromethorphan + Chlorpheniramine',
    mrp: 109,
    pricePerStrip: 109,
    stripSize: 1,
    category: 'Syrup',
    description: 'Cough suppressant (100ml bottle)',
    image: 'https://images.unsplash.com/photo-1700104494922-6edd35d95e27?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-014',
    name: 'DEACT TAB',
    composition: 'Diclofenac + Paracetamol + Serratiopeptidase',
    mrp: 69,
    pricePerStrip: 69,
    stripSize: 10,
    category: 'Tablet',
    description: 'Pain and inflammation relief',
    image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?w=400&h=400&fit=crop&sat=-50'
  },
  {
    id: 'prod-015',
    name: 'COFRIK EXPECTORANT SYRUP',
    composition: 'Guaifenesin + Ambroxol',
    mrp: 108,
    pricePerStrip: 108,
    stripSize: 1,
    category: 'Syrup',
    description: 'Expectorant for productive cough (100ml bottle)',
    image: 'https://images.unsplash.com/photo-1700104495010-2e961cd6141f?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-016',
    name: 'ORDIC GEL',
    composition: 'Diclofenac Diethylamine + Methyl Salicylate',
    mrp: 105,
    pricePerStrip: 105,
    stripSize: 1,
    category: 'Gel',
    description: 'Topical pain relief gel (30g tube)',
    image: 'https://images.unsplash.com/photo-1694101123493-5c4d839bf91f?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-017',
    name: 'REKY GEL',
    composition: 'Diclofenac + Linseed Oil + Menthol',
    mrp: 108,
    pricePerStrip: 108,
    stripSize: 1,
    category: 'Gel',
    description: 'Muscle and joint pain relief (30g tube)',
    image: 'https://images.unsplash.com/photo-1711779187532-cf4298865722?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-018',
    name: 'BRECET SYRUP',
    composition: 'Cetirizine 5mg/5ml',
    mrp: 73,
    pricePerStrip: 73,
    stripSize: 1,
    category: 'Syrup',
    description: 'Antihistamine for allergies (60ml bottle)',
    image: 'https://images.unsplash.com/photo-1700104494871-3d91160370aa?w=400&h=400&fit=crop'
  },
  {
    id: 'prod-019',
    name: 'ULTRA ZEAL TAB',
    composition: 'Multivitamin + Multimineral + Antioxidants',
    mrp: 119.70,
    pricePerStrip: 119.70,
    stripSize: 15,
    category: 'Tablet',
    description: 'Complete wellness supplement',
    image: 'https://images.unsplash.com/photo-1622147459102-8a0f3727e4c4?w=400&h=400&fit=crop&hue=30'
  },
  {
    id: 'prod-020',
    name: 'NEURORIK PLUS TAB',
    composition: 'Methylcobalamin + Alpha Lipoic Acid + Folic Acid',
    mrp: 159,
    pricePerStrip: 159,
    stripSize: 10,
    category: 'Tablet',
    description: 'Nerve health supplement',
    image: 'https://images.unsplash.com/photo-1668453569370-789848f41ebe?w=400&h=400&fit=crop&sat=-30'
  },
  {
    id: 'prod-021',
    name: 'RIKY GEL SYRUP',
    composition: 'Aluminium Hydroxide + Magnesium Hydroxide + Simethicone',
    mrp: 95,
    pricePerStrip: 95,
    stripSize: 1,
    category: 'Syrup',
    description: 'For acidity and digestive problems, provides relief from heartburn and gas (170ml bottle)',
    image: 'https://images.unsplash.com/photo-1700104494922-6edd35d95e27?w=400&h=400&fit=crop&hue=60'
  }
];
