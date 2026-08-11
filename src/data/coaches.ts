export type Coach = {
  id: string
  initials: string
  name: string
  role: string
  introduction: string
  focus: string[]
  image: string
  languages: string[]
  phone: string
}

export const coaches: Coach[] = [
  {
    id: 'bia', initials: 'BI', name: 'Coach Bia', role: 'Muay Thai Coach',
    introduction: 'Private and small-group Muay Thai coaching for all levels, from first-timers to experienced fighters.',
    focus: ['Muay Thai', 'Private training', 'Group training'], image: '/coaches/bia.jpg', languages: ['Thai', 'English'], phone: '66952632882',
  },
  {
    id: 'bert', initials: 'BE', name: 'Coach Bert', role: 'Muay Thai Coach',
    introduction: 'Experienced Muay Thai coaching shaped by real competition experience, available privately or in small groups.',
    focus: ['Muay Thai', 'Fight technique', 'Conditioning'], image: '/coaches/bert.jpg', languages: ['Thai', 'English'], phone: '66952632882',
  },
  {
    id: 'beat', initials: 'BT', name: 'Coach Beat', role: 'Personal Trainer',
    introduction: 'Bodybuilding and nutrition-focused coaching for clients who want to improve strength, physique, and body composition.',
    focus: ['Bodybuilding', 'Nutrition', 'Breathing'], image: '/coaches/beat.jpg', languages: ['Thai'], phone: '66641955997',
  },
  {
    id: 'naw', initials: 'NW', name: 'Coach Naw', role: 'Personal Trainer',
    introduction: 'Sports science-led personal training with a strong focus on functional movement, running, mobility, and pain-aware exercise.',
    focus: ['Functional training', 'Running', 'Mobility'], image: '/coaches/naw.jpg', languages: ['Thai'], phone: '66865535204',
  },
  {
    id: 'kim', initials: 'KM', name: 'Coach Kim', role: 'Personal Trainer',
    introduction: 'A versatile coach combining yoga, bodybuilding, mobility, anatomy, and massage knowledge for balanced progress.',
    focus: ['Yoga', 'Mobility', 'Bodybuilding'], image: '/coaches/kim.jpg', languages: ['Thai', 'English'], phone: '66801485539',
  },
  {
    id: 'kwan', initials: 'KW', name: 'Coach Kwan', role: 'Personal Trainer',
    introduction: 'Personal training informed by nutrition, yoga, anatomy, and competitive physique experience.',
    focus: ['Physique', 'Nutrition', 'Yoga'], image: '/coaches/kwan.jpg', languages: ['Thai'], phone: '66891887014',
  },
  {
    id: 'pana', initials: 'PA', name: 'Coach Pana', role: 'Personal Trainer',
    introduction: 'Competition-proven physique coaching for clients who want disciplined training, body composition, and stage-level development.',
    focus: ['Physique', 'Bodybuilding', 'Competition'], image: '/coaches/pana.jpg', languages: ['Thai'], phone: '66896525005',
  },
  {
    id: 'owen', initials: 'OW', name: 'Coach Owen', role: 'Personal Trainer',
    introduction: 'Certified functional, strength, suspension, and corrective exercise coaching in Thai, English, and Filipino.',
    focus: ['Functional training', 'Strength', 'Corrective exercise'], image: '/coaches/owen.jpg', languages: ['Thai', 'English', 'Filipino'], phone: '66656259989',
  },
  {
    id: 'nueng', initials: 'NE', name: 'Coach Nueng', role: 'Personal Trainer',
    introduction: 'Certified fitness and bodybuilding coaching with additional experience in massage, movement, and padel development.',
    focus: ['Fitness', 'Bodybuilding', 'Movement'], image: '/coaches/nueng.jpg', languages: ['Thai', 'English'], phone: '66807788841',
  },
  {
    id: 'best', initials: 'BS', name: 'Coach Best', role: 'Personal Trainer & Sports Therapist',
    introduction: 'Sports science, football, massage, stretching, and injury-aware performance training brought together in one coaching approach.',
    focus: ['Sports therapy', 'Football', 'Performance'], image: '/coaches/best.jpg', languages: ['Thai'], phone: '66929725371',
  },
  {
    id: 'pino', initials: 'PI', name: 'Coach Pino', role: 'Personal Trainer',
    introduction: 'Strength, hypertrophy, mobility, posture, injury prevention, and calisthenics coaching in three languages.',
    focus: ['Strength', 'Calisthenics', 'Mobility'], image: '/coaches/pino.jpg', languages: ['Thai', 'English', 'Italian'], phone: '66842684966',
  },
  {
    id: 'ann', initials: 'AN', name: 'Coach Ann', role: 'Personal Trainer',
    introduction: 'Award-winning physique competitor offering personal and small-group training for body composition and performance goals.',
    focus: ['Physique', 'Competition', 'Bodybuilding'], image: '/coaches/ann.jpg', languages: ['Thai', 'English'], phone: '66623462477',
  },
]
