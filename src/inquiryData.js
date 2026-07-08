export const inquiryCategoryOptions = [
  { value: 'mechanical', label: 'Mechanical' },
  { value: 'electrical', label: 'Electrical' },
  { value: 'plumbing', label: 'Plumbing' },
  { value: 'fire-fighting', label: 'Fire Fighting' },
  { value: 'hvac', label: 'HVAC' },
  { value: 'amc', label: 'AMC' },
  { value: 'testing-and-commissioning', label: 'Testing & Commissioning' },
  { value: 'mep-consultancy', label: 'MEP Consultancy' },
]

export const projectTypeOptions = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'hospital', label: 'Hospital' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'mall', label: 'Mall' },
  { value: 'factory', label: 'Factory' },
]

export const budgetOptions = [
  { value: 'under-1-lakh', label: 'Under Rs 1 Lakh' },
  { value: '1-to-5-lakhs', label: 'Rs 1-5 Lakhs' },
  { value: '5-to-10-lakhs', label: 'Rs 5-10 Lakhs' },
  { value: '10-to-25-lakhs', label: 'Rs 10-25 Lakhs' },
  { value: '25-to-50-lakhs', label: 'Rs 25-50 Lakhs' },
  { value: 'above-50-lakhs', label: 'Above Rs 50 Lakhs' },
]

export const countryOptions = [
  { value: 'india', label: 'India' },
  { value: 'united-arab-emirates', label: 'United Arab Emirates' },
  { value: 'saudi-arabia', label: 'Saudi Arabia' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'oman', label: 'Oman' },
]

export const contactServiceOptions = [
  { value: 'hvac', label: 'HVAC' },
  { value: 'fire-protection', label: 'Fire Protection' },
  { value: 'electrical-systems', label: 'Electrical Systems' },
  { value: 'plumbing-systems', label: 'Plumbing Systems' },
  { value: 'annual-maintenance-contracts', label: 'Annual Maintenance Contracts' },
  { value: 'testing-and-commissioning', label: 'Testing & Commissioning' },
  { value: 'mep-consultancy', label: 'MEP Consultancy' },
]

export const indiaStateCityMap = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang'],
  Assam: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat'],
  Bihar: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'],
  Chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba'],
  Goa: ['Panaji', 'Margao', 'Mapusa', 'Vasco da Gama'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala'],
  'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Solan', 'Mandi'],
  Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'],
  Karnataka: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru'],
  Kerala: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'],
  'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  Manipur: ['Imphal', 'Churachandpur', 'Bishnupur', 'Thoubal'],
  Meghalaya: ['Shillong', 'Tura', 'Jowai', 'Nongpoh'],
  Mizoram: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'],
  Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang'],
  Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur'],
  Punjab: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Mohali'],
  Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
  Sikkim: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem'],
  Telangana: ['Hyderabad', 'Warangal', 'Karimnagar', 'Nizamabad'],
  Tripura: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar'],
  'Uttar Pradesh': ['Lucknow', 'Noida', 'Kanpur', 'Varanasi'],
  Uttarakhand: ['Dehradun', 'Haridwar', 'Haldwani', 'Roorkee'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri'],
  'Andaman and Nicobar Islands': ['Port Blair', 'Diglipur', 'Mayabunder', 'Rangat'],
  Chandigarh: ['Chandigarh'],
  'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Diu', 'Silvassa'],
  Delhi: ['New Delhi', 'Dwarka', 'Rohini', 'Saket'],
  'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla'],
  Ladakh: ['Leh', 'Kargil'],
  Lakshadweep: ['Kavaratti', 'Agatti', 'Amini'],
  Puducherry: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
}

export const stateOptions = Object.keys(indiaStateCityMap).map((state) => ({
  value: state,
  label: state,
}))

export const getCityOptions = (state) =>
  (indiaStateCityMap[state] || []).map((city) => ({
    value: city,
    label: city,
  }))
