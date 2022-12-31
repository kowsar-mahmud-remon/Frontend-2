export const gender = [
    { value: 'male', label: 'Male', color: '#00B8D9', isFixed: true },
    { value: 'female', label: 'Female', color: '#5243AA' }
];

export const days = []
export const months = []
export const years = []


for (let i = 1; i <= 30; i++) {
  let obj = {
    value: i.toString(),
    label: i.toString()
  }
  days.push(obj)
  
}
for (let i = 1; i <= 12; i++) {
  let obj = {
    value: i.toString(),
    label: i.toString()
  }
  months.push(obj)
  
}
const date = new Date();
let year = date.getFullYear();

for (let i = year; i > 1970 ; i--) {

  let obj = {
    value: i.toString(),
    label: i.toString()
  }
  years.push(obj)
  
}