export interface Weather {
  [index: number]: {
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
  };
}
