export interface City {
  [index: number]: {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
  };
}
