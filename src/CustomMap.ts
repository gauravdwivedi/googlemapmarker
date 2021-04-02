export interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
  getContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng,
      },
    });

    const infowindow = new google.maps.InfoWindow({
      content: mapable.getContent(),
    });

    marker.addListener('click', () => {
      infowindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
