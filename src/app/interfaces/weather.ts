export interface Weather {
  curr_day: number;
  [index: number]: {
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
  };
}
