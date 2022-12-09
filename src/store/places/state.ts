export interface PlaceStateInterface {
  isLoading: boolean;
  userLocation?: [number, number]; // ? significa que es opcional. Podemos tener la info o no.
}

function state(): PlaceStateInterface {
  return {
    isLoading: true,
    userLocation: undefined,
  };
}

export default state;
