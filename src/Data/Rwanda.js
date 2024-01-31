import { Sectors } from 'rwanda';
export const provinces = ['East', 'Kigali', 'North', 'South', 'West'];
export const districts = {
    'East': ['Bugesera', 'Gatsibo', 'Kayonza', 'Kirehe', 'Ngoma', 'Rwamagana', 'Nyagatare'],
    'Kigali': ['Gasabo', 'Kicukiro', 'Nyarugenge'],
    'North': ['Burera', 'Gakenke', 'Gicumbi', 'Musanze', 'Rulindo'],
    'South': ['Huye', 'Nyamagabe', 'Nyanza', 'Nyaruguru', 'Gisagara', 'Muhanga', 'Kamonyi', 'Ruhango'],
    'West': ['Karongi', 'Nyabihu', 'Rubavu', 'Rusizi', 'Ngororero', 'Nyamasheke', 'Rutsiro']
  };

 export const sectors = {
    Bugesera: Sectors("East", "Bugesera"),
    Gatsibo: Sectors("East", "Gatsibo"),
    Kayonza: Sectors("East", "Kayonza"),
    Kirehe: Sectors("East", "Kirehe"),
    Ngoma: Sectors("East", "Ngoma"),
    Rwamagana: Sectors("East", "Rwamagana"),
    Nyagatare: Sectors("East", "Nyagatare"),
    Gasabo: Sectors("Kigali", "Gasabo"),
    Kicukiro: Sectors("Kigali", "Kicukiro"),
    Nyarugenge: Sectors("Kigali", "Nyarugenge"),
    Burera: Sectors("North", "Burera"),
    Gakenke: Sectors("North", "Gakenke"),
    Gicumbi: Sectors("North", "Gicumbi"),
    Musanze: Sectors("North", "Musanze"),
    Rulindo: Sectors("North", "Rulindo"),
    Huye: Sectors("South", "Huye"),
    Nyamagabe: Sectors("South", "Nyamagabe"),
    Nyanza: Sectors("South", "Nyanza"),
    Nyaruguru: Sectors("South", "Nyaruguru"),
    Gisagara: Sectors("South", "Gisagara"),
    Muhanga: Sectors("South", "Muhanga"),
    Kamonyi: Sectors("South", "Kamonyi"),
    Ruhango: Sectors("South", "Ruhango"),
    Karongi: Sectors("West", "Karongi"),
    Nyabihu: Sectors("West", "Nyabihu"),
    Rubavu: Sectors("West", "Rubavu"),
    Rusizi: Sectors("West", "Rusizi"),
    Ngororero: Sectors("West", "Ngororero"),
    Nyamasheke: Sectors("West", "Nyamasheke"),
    Rutsiro: Sectors("West", "Rutsiro")
  }; 

  export const plotType = [
    'Residential plot',
    'Commercial plot',
    'Industrial plot',
    'Other',
  ]
  
  export const propertyType = [
  "Ghetto",
  "Office",
  "Apartments",
  "Warehouse",
  "Residentials",
  "Commercial"
  ]
  